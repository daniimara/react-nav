import React from "react";
import { Link } from "react-router-dom";
import PlayerAPI from "../../mockData/playerMock";
import { Container, Grid, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    player: {
      padding: "10px 0px"
    }
  })
);

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column">
        {PlayerAPI.all().map((p) => (
          <Grid item key={`player-${p.number}`} className={classes.player}>
            <Link to={`/roster/detail?id=${p.number}`}>{p.name}</Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FullRoster;
