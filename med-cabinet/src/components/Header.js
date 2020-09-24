import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import myImage from "../assets/CAN.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "	#228B22",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: "#228B22",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#228B22",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h3" noWrap>
            MedSwap
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
