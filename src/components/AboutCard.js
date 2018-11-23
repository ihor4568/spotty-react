import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  media: {
    minHeight: 200
  },
  title: {
    textAlign: "center",
    padding: "1rem 0 1rem 0"
  },
  link: {
    textDecoration: "none"
  }
};

function AboutCard(props) {
  const { classes } = props;
  return (
    <a className={classes.link} href={"https://github.com/" + props.person}>
      <Card>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={"https://github.com/" + props.person + ".png?size=400"}
            />
            <Typography className={classes.title} component="h2" variant="h5">
              {props.person}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.string.isRequired
};

export default withStyles(styles)(AboutCard);
