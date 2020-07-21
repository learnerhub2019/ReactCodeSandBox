import React, { useState } from "react";
import { Checkbox, CssBaseline, Link, Grid, Box, Typography, Avatar, Button, TextField, makeStyles, Container, FormControlLabel } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import authAction from "../../../actions/authActions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function LoginComponent() {

  const classes = useStyles();
  const [form, setState] = useState({
    email: '',
    password: ''
  });

  const onUpdateField = e => {
    e.preventDefault();
    setState({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  const onFormSubmit = e => {
    e.preventDefault();

    console.dir(form);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.username}
            onChange={onUpdateField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={onUpdateField}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

const mapDispatchToProps = () => ({
  signIn: (email, password) => authAction.login(email, password)
});

export default connect(null, mapDispatchToProps)(LoginComponent);