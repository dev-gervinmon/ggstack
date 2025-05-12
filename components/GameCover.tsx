import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import GameCoverSvg from "./GameCoverSvg";

type GameCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<GameCoverVariant, string> = {
  extraSmall: "game-cover_extra_small",
  small: "game-cover_small",
  medium: "game-cover_medium",
  regular: "game-cover_regular",
  wide: "game-cover_wide",
};

interface Props {
  className?: string;
  variant?: GameCoverVariant;
  coverColor: string;
  coverImage: string;
}

const GameCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <GameCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverImage}
          alt="Game cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default GameCover;
