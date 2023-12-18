import { Fragment } from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error && <Text>{error}</Text>}
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3 }}
            padding={"10px"}
            spacing={10}
          >
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </SimpleGrid>
        </>
      )}
    </Fragment>
  );
};

export default GameGrid;
