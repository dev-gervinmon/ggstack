"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users, platforms } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";
import { workflowClient } from "../workflow";
import config from "../config";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, message: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Sign in error");
    return { success: false, message: "Error signing in" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, gamerTag, platform } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  const selectedPlatform = await db
    .select()
    .from(platforms)
    .where(eq(platforms.name, platform))
    .limit(1);

  if (selectedPlatform.length === 0) {
    return { success: false, message: "Platform not found" };
  }

  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword,
      gamerTag,
      platformId: selectedPlatform[0].id,
    });

    await workflowClient.trigger({
      url: `${config.env.prodApiEndpoint}/api/workflows/onboarding`,
      body: {
        email,
        fullName,
      },
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "Sign up error");
    return { success: false, message: "Error signing up" };
  }
};
