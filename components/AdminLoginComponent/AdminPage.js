import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Style/styles";
import Copyright from "./Foot/Footer";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../GraphQL/MutationLogin";
import {
  emailRegex,
  passRegex,
  handleKeyDown,
} from "./Validations/ValidateLogin";

const AdminPage = () => {
    const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidPass, setIsValidPass] = useState(false);
  const [messagePass, setMessagePass] = useState("");

  const loginUser = async () => {
    try {
      const data = await login({
        variables: {
          email: email,
          password: password,
        },
      });
      const req = JSON.stringify(data.data.login);
      if (data) {
        console.log(req);
        localStorage.setItem("myAdmin", req);
        window.location.replace('/Dashboard');
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
    if (error) {
      console.log(error);
    }
  };

  const validateEmail = (event) => {
    const em = event.target.value;
    if (emailRegex.test(em)) {
      setIsValid(true);
      setMessage("");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email");
    }

    if (em === "") {
      setIsActive(false);
    }
  };

  const validatePassword = (event) => {
    const pass = event.target.value;
    if (passRegex.test(pass)) {
      setIsValidPass(true);
      setIsActive(true);
      setMessagePass("");
    } else {
      setIsValidPass(false);
      setIsActive(false);
      setMessagePass("Please enter a valid Password");
    }
  };

  const [login, { error }] = useMutation(LOGIN_MUTATION);

  const LoginButton = (props) => {
    return (
      <Button
        onClick={loginUser}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
    );
  };

  const NullButton = (props) => {
    return <h1></h1>;
  };

  const CondicionalButton = (props) => {
    const isLogin = props.isLogin;
    if (isLogin) {
      return <LoginButton />;
    } else {
      return <NullButton />;
    }
  };

  if (global.window) {
    localStorage.removeItem("myLogin");
    localStorage.clear();
    var loginSession = localStorage.getItem("myLogin");
    console.log(loginSession);
    if (loginSession === null) {
      console.log('There is no token');
    } else {
      console.log('there is a token');
    }
  }

    return (
        <div>
            <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome Admin
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onKeyDown={handleKeyDown}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            onChange={validateEmail}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <div className={`message ${isValid ? "success" : "error"}`}>
            {" "}
            {message}{" "}
          </div>
          <TextField
            onKeyDown={handleKeyDown}
            onChange={validatePassword}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <div className={`message ${isValidPass ? "success" : "error"}`}>
            {" "}
            {messagePass}{" "}
          </div>
          <CondicionalButton isLogin={isActive} />
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
        </div>
    )
}

export default AdminPage
