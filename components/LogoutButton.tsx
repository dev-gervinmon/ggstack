"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const LogoutButton = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      signOut();
    }}
    className="mb-10"
  >
    <Button type="submit">Logout</Button>
  </form>
);

export default LogoutButton;
