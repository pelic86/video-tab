import { Fragment } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error && <Text>{error}</Text>}
          <ul>
            {games.map(game => (
              <li key={game.id}>{game.id}</li>
            ))}
          </ul>
        </>
      )}
    </Fragment>
  );
};

export default GameGrid;
