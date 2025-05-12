import { auth } from "@/auth";
import Header from "@/components/Header";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { redirect } from "next/navigation";
import { after } from "next/server";
import React, { ReactNode } from "react";
import { eq } from "drizzle-orm";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }

  after(async () => {
    if (!session?.user?.id) return;

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1);

    const lastActive = user[0]?.lastActive;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (lastActive) {
      const lastActiveDate = new Date(lastActive);
      lastActiveDate.setHours(0, 0, 0, 0);
      if (lastActiveDate.getDate() === today.getDate()) return;
    }

    await db
      .update(users)
      .set({ lastActive: new Date() })
      .where(eq(users.id, session.user.id));
  });

  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
