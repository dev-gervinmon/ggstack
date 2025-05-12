import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import GameCover from "./GameCover";

const GameOverview = ({
  title,
  developer,
  genre,
  rating,
  copies_sold,
  current_active_players,
  description,
  color,
  cover,
}: Game) => {
  return (
    <section className="game-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="game-info">
          <p>
            By <span className="font-semibold text-light-200">{developer}</span>
          </p>

          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="game-copies">
          <p>
            Total Copies Sold: <span>{copies_sold}</span>
          </p>
          <p>
            Current Active Players: <span>{current_active_players}</span>
          </p>
        </div>

        <p className="game-description">{description}</p>

        <Button className="game-overview_btn">
          <Image src="/icons/game.svg" alt="game" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">
            Add to Wishlist
          </p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <GameCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <GameCover variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameOverview;
