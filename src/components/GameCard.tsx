import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        loading="lazy"
        objectFit={"cover"}
        height={{ md: "200px" }}
      />
      <CardBody>
        <Heading fontSize={"2xl"} height={"60px"}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
