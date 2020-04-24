import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather Data
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarComponent;
