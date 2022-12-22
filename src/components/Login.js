import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { login } from "../services/loginService";
import {  Cookies } from "react-cookie";

const cookies = new Cookies();
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        password: "",
        email: "",
      },
      loginFormError: {
        emailError: false,
        passwordError: false,
      },
      loginFormValidation: {
        emailValidation: false,
        passwordValidaion: false,
      },
      setOpen: false,
      open: false,
      toastSeverity: "success",
      toastMessage: "",
      redirect: true,
      
    };
  }
  onInputChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      loginForm: { ...this.state.loginForm, [name]: value },
    });
    this.checkValidation(name, value);
  };
  checkValidation = (name, value) => {
    var validation = this.state.loginFormValidation;
    var error = this.state.loginFormError;
    switch (name) {
      case "email":
        if (value !== "") {
          error.emailError = false;
          validation.emailValidation = "";
        } else {
          error.emailError = true;
          validation.emailValidation = "Email is required";
        }
        break;
      case "password":
        if (value !== "") {
          error.passwordError = false;
          validation.passwordValidaion = "";
        } else {
          error.passwordError = true;
          validation.passwordValidaion = "Password is required";
        }
        break;
      default:
        break;
    }
    this.setState({ loginFormValidation: validation, loginFormError: error });
  };
  onLogin = (event) => {
    event.preventDefault();
    login(this.state.loginForm.email, this.state.loginForm.password)
      .then((data) => {
        if (data) {
          if (data.statusCode === 401 || data.statusCode === 503) {
            this.setState({
              toastSeverity: "error",
              toastMessage: "Entered wrong credentials",
            });
          } else {

    cookies.set('email', data.email, {
      path: '/',
      sameSite: 'Strict'
    });
    cookies.set('candidateId', data.candidateId, {
      path: '/',
      sameSite: 'Strict'
    });
    cookies.set('userId', data.userId, {
      path: '/',
      sameSite: 'Strict'
    });
    sessionStorage.setItem('principal role', data.roles[0].roleIdentifier);

    const tokenStr = data.jwtToken;
    cookies.set('token', tokenStr, {
      path: '/',
      sameSite: 'Strict'
    });

            this.setState({
              toastSeverity: "success",
              toastMessage: "Logged in successfully",
            });
            window.location = "/dashboard";
          }
          this.setState({ setOpen: true });
        
        }
      })
      .catch((err) => {
        this.setState({ setOpen: true });
       
      });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ setOpen: false });
  };
  render() {
    const inputField = {
      marginTop: "30px",
    };
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          // style={{ minHeight: '100vh' }}
          style={{ backgroundColor: "beige" }}
        >
          <Grid
            item
            xs={5}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Card sx={{ minWidth: 400, minHeight: 300 }} variant="outlined">
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontSize: 16 }}
                  // color="text.secondary"
                  textAlign="center"
                  gutterBottom
                >
                  Login to Onboard!
                </Typography>
                <div>
                  <TextField
                    style={inputField}
                    fullWidth
                    label="Email Id"
                    variant="outlined"
                    name="email"
                    onChange={this.onInputChange}
                    error={this.state.loginFormError.emailError}
                    helperText={this.state.loginFormValidation.emailValidation}
                    required
                  />
                </div>
                <div>
                  <TextField
                    style={inputField}
                    fullWidth
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    onChange={this.onInputChange}
                    error={this.state.loginFormError.passwordError}
                    helperText={
                      this.state.loginFormValidation.passwordValidaion
                    }
                    required
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  style={{ margin: "10px" }}
                  onClick={this.onLogin}
                >
                  Login
                </Button>
              </CardActions>
              <CardActions>
                <Button>Forgot Password</Button>
              </CardActions>
            </Card>
          </Grid>
          <Snackbar
            open={this.state.setOpen}
            autoHideDuration={6000}
            onClose={this.handleClose}
            // message=""
            // action={action}
          >
            <Alert
              onClose={this.handleClose}
              severity={this.state.toastSeverity}
              sx={{ width: "100%" }}
              variant="filled"
            >
              {this.state.toastMessage}
            </Alert>
          </Snackbar>
        </Grid>
      </>
    );
  }
}
export default Login;
