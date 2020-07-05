import React from "react";
import AppBar from "@material-ui/core/AppBar";

import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link as RouterLink } from "react-router-dom";

import SchoolIcon from "@material-ui/icons/School";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

import CopyrightComponent from "../../common/copyright/Copyright.component";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
    // position: "relative",
    // top: "auto",
    // bottom: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}));

export default function DefaultLayout({ children }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={RouterLink}
            to="/"
          >
            {/* <MenuIcon /> */}
            <SchoolIcon />
          </IconButton>
          {/* <SchoolIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit">
            School Monitor
          </Typography>
          <div className={classes.grow} />
          <IconButton
            color="inherit"
            aria-label="menu"
            component={RouterLink}
            to="/"
          >
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" component={RouterLink} to="/">
            <ContactPhoneIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={RouterLink}
            to="/login"
            // startIcon={<AccountCircleIcon />}
          >
            {/* Login */}
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <CopyrightComponent />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
