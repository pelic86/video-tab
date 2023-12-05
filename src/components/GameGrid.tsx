import { useEffect, useState, Fragment } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
}

interface FetchGamesResponese {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponese>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  }, []);

  return (
    <Fragment>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.id}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default GameGrid;
