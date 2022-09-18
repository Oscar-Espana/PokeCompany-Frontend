import { FC } from "react";
import NextLink from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { ISmallPokemon } from "../../interfaces";

interface Props {
  pokemon: ISmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <NextLink href={`/pokemon/${pokemon.id}`} passHref prefetch={false}>
          <Link sx={{ position: "relative" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={pokemon.name}
                width="100%"
                height={250}
                sx={{ objectFit: "contain", p: 2, pb: 3 }}
              />
            </CardActionArea>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "black",
                opacity: 0.55,
              }}
            >
              <Typography
                py={1}
                px={2}
                textTransform="capitalize"
                color="white"
                fontWeight={400}
              >
                {pokemon.name}
              </Typography>
            </Box>
          </Link>
        </NextLink>
      </Card>
    </Grid>
  );
};
