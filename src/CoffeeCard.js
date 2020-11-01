import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";

const CoffeeCard = (props) => {
  const { avatarUrl, title, price, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
