import GameList from "@/components/GameList";
import { Button } from "@/components/ui/button";
import { sampleGames } from "@/constants";
import { signOut } from "@/auth";
import React from "react";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      <GameList title="Owned Games" games={sampleGames} />
    </>
  );
};

export default Page;
