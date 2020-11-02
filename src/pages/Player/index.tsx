import React, { FC } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import useParams from "../../hooks/useParams";
import PlayerAPI from "../../mockData/playerMock";
import { Player } from "../../types";

const useStyles = makeStyles(() =>
  createStyles({
    notFound: {
      padding: "30px 0px"
    },
    linkBack: {
      fontSize: 12
    }
  })
);

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
interface PlayerProps {
  player?: Player;
}

export const PlayerInfo: FC<PlayerProps> = ({ player }) => {
  const classes = useStyles();
  if (!player) {
    return (
      <Container className={classes.notFound}>
        <Typography variant="body1" align="center">
          Sorry, but the player was not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h3">
            {`${player.name} (#${player.number})`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{`Position: ${player.position}`}</Typography>
        </Grid>
        <Grid item className={classes.linkBack}>
          <Link to="/roster">
            <ArrowBackIosIcon className={classes.linkBack} />
            Back
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default () => {
  const params = useParams({
    id: ""
  });

  const player = PlayerAPI.get(Number(params.id));

  return <PlayerInfo player={player} />;
};
