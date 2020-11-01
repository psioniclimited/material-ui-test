import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";
import coffeeMaker from "./constant";

const Content = () => {
  const getCoffeeCard = (coffeeMakerobj) => {
    return (
      <Grid item xs={4}>
        <CoffeeCard {...coffeeMakerobj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeeMaker.map((coffeeMakerobj) => getCoffeeCard(coffeeMakerobj))}
    </Grid>
  );
};

export default Content;
