import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "./Foot/Footer";
import useStyles from "./Style/styles";
import { CREATE_USER_MUTATION } from "../../GraphQL/Mutation";
import { useMutation } from "@apollo/client";
import {
  emailRegex,
  passRegex,
  nameRegex,
  lastRegex,
  handleKeyDown,
  handleKeyDownFnLn,
} from "./Validations/ValidateRegister";

const RegisterForm = () => {
  const classes = useStyles();
  let fn;
  let ln;
  let em;
  let pass;

  const [isActive, setIsActive] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ActivefirstName, setActiveFirstName] = useState(false);
  const [ActivelastName, setActiveLastName] = useState(true);
  const [Activeemail, setActiveEmail] = useState(true);
  const [Activepassword, setActivePassword] = useState(true);

  const [isValidName, setIsValidName] = useState(false);
  const [messageName, setMessageName] = useState("");
  const [isValidLastname, setIsValidLastname] = useState(false);
  const [messageLastname, setMessageLastname] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [messageEmail, setMessageEmail] = useState("");
  const [isValidPass, setIsValidPass] = useState(false);
  const [messagePass, setMessagePass] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = async () => {
    try {
      const data = await createUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      });
      console.log(data);
      if (data) {
        window.location.replace('/Login');
      } else {
        window.location.replace('/Signup');
      }
    } catch (error) {
      console.log(error);
    }
    if (error) {
      console.log(error);
    }
  };

  const validateFirstName = (event) => {
    fn = event.target.value;
    if (nameRegex.test(fn)) {
      setIsValidName(true);
      setMessageName("");
    } else {
      setIsValidName(false);
      setMessageName("Your name is invalid");
    }

    if (isValidName) {
      setActiveLastName(false);
    } else {
      setActiveLastName(true);
    }

    if (fn === "") {
      setIsActive(false);
    }
  };

  const validateLastName = (event) => {
    ln = event.target.value;
    if (lastRegex.test(ln)) {
      setIsValidLastname(true);
      setMessageLastname("");
    } else {
      setIsValidLastname(false);
      setMessageLastname("Your Lastname is invalid");
    }

    if (isValidLastname === true) {
      setActiveFirstName(false);
    } else {
      setActiveFirstName(true);
    }

    if (isValidLastname === true && isValidName === true) {
      setActiveEmail(false);
    } else {
      setActiveEmail(true);
    }

    if (ln === "") {
      setIsActive(false);
    }
  };

  const validateEmail = (event) => {
    em = event.target.value;
    if (emailRegex.test(em)) {
      setIsValidEmail(true);
      setMessageEmail("");
    } else {
      setIsValidEmail(false);
      setMessageEmail("Your email is invalid");
    }

    if (isValidEmail) {
      setActivePassword(false);
    } else {
      setIsActive(false);
      setActivePassword(true);
    }

    if (em == !2) {
      setIsActive(false);
    }
  };

  const validatePassword = (event) => {
    pass = event.target.value;
    if (passRegex.test(pass)) {
      setIsValidPass(true);
      setMessagePass("");
    } else {
      setIsValidPass(false);
      setMessagePass("Please enter a valid Password");
    }

    if (isValidPass) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (pass === "") {
      setIsActive(false);
    }
  };

  const RegisterButton = (props) => {
    return (
      <Button
        onClick={addUser}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
    );
  };

  const NullButton = (props) => {
    return <h1></h1>;
  };

  const CondicionalButton = (props) => {
    const isRegister = props.isRegister;
    if (isRegister) {
      return <RegisterButton />;
    } else {
      return <NullButton />;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onKeyDown={handleKeyDownFnLn}
                onInput={(e) => {
                  setFirstName(e.target.value);
                }}
                onChange={validateFirstName}
                disabled={ActivefirstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <div className={`message ${isValidName ? "success" : "error"}`}>
                {messageName}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled={ActivelastName}
                onKeyDown={handleKeyDownFnLn}
                onInput={(e) => {
                  setLastName(e.target.value);
                }}
                onChange={validateLastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                autoFocus
              />
              <div
                className={`message ${isValidLastname ? "success" : "error"}`}
              >
                {messageLastname}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled={Activeemail}
                onKeyDown={handleKeyDown}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                onChange={validateEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <div className={`message ${isValidEmail ? "success" : "error"}`}>
                {messageEmail}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled={Activepassword}
                onKeyDown={handleKeyDown}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                onChange={validatePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
              />
              <div className={`message ${isValidPass ? "success" : "error"}`}>
                {messagePass}
              </div>
            </Grid>
          </Grid>
          <CondicionalButton isRegister={isActive} />
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default RegisterForm;
