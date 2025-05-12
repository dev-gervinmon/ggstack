import Link from "next/link";
import React from "react";
import GameCover from "./GameCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const GameCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isOwnedGame = false,
}: Game) => (
  <li className={cn(isOwnedGame && "xs:w-52 w-full")}>
    <Link
      href={`/games/${id}`}
      className={cn(isOwnedGame && "w-full flex flex-col items-center")}
    >
      <GameCover coverColor={color} coverImage={cover} />

      <div className={cn("mt-4", !isOwnedGame && "xs:max-w-40 max-w-28")}>
        <p className="game-title">{title}</p>
        <p className="game-genre">{genre}</p>
      </div>

      {isOwnedGame && (
        <div className="mt-3 w-full">
          <div className="game-owned">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-200">11 days left to return</p>
          </div>

          <Button className="game-btn">Download receipt</Button>
        </div>
      )}
    </Link>
  </li>
);

export default GameCard;
