import GameList from "@/components/GameList";
import GameOverview from "@/components/GameOverview";
import { sampleGames } from "@/constants";

const Home = async () => {
  return (
    <>
      <GameOverview {...sampleGames[0]} />
      <GameList
        title="Trending Games"
        games={sampleGames}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
