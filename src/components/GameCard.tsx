import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Img } from "@chakra-ui/react";

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
        // width="100%"
        borderRadius={5}
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
