import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import SchoolIcon from "@material-ui/icons/School";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// import Snackbar from "@material-ui/core/Snackbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";

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
  }
}));

export default function DefaultLayout({ children }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SchoolIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            School App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}

        {children}
      </main>
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
