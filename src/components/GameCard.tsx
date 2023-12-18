import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        boxShadow: "lg",
      }}
      overflow={"hidden"}
    >
      <Img
        src={game.background_image}
        alt={game.name}
        loading="lazy"
        objectFit={"cover"}
        height={{ md: "200px" }}
        borderRadius={5}
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>

        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
