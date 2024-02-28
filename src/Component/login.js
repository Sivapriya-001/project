import {
  Grid,
} from "@mui/material";
import React from "react";
import Image from "../assets/bird.svg";
import {
  StyleGrid,
  StyleHash,
  StylePowered,
  StyleImage,
  StyleCard,
  StyleTextField,
  StyleLogin,
  StyleForgot,
  StyleLoginButton,
} from "../Style/loginStyle";

const Login = ({ backgroundColor }) => {
  return (
    <div>
      <StyleGrid container>
        <Grid item textAlign="center" lg="6" md="3" xs="12">
          <StyleImage src={Image} alt="Bird Image" />
          <StyleHash variant="h4">Hash Tech</StyleHash>
          <StylePowered variant="subtitle1">
            Powered By C# Ui Academy
          </StylePowered>
        </Grid>
        <Grid
          item
          lg="6"
          md="3"
          xs="12"
          sm="9"
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StyleCard>
            <StyleLogin>LOGIN</StyleLogin>
            <Grid item mb={2} ml={2}>
              <StyleTextField
                type="text"
                placeholder="User Name"
                variant="standard"
                InputProps={{ disableUnderline: true }}
              ></StyleTextField>
            </Grid>
            <Grid item mb={2} ml={2}>
              <StyleTextField
                type="Password"
                placeholder="Password"
                variant="standard"
                InputProps={{ disableUnderline: true }}
              ></StyleTextField>
            </Grid>
            <Grid item mb={2}>
              <StyleForgot>Forgot Password?</StyleForgot>
            </Grid>
            <Grid container>
              <Grid item lg="6">
                <StyleLoginButton variant="contained">Login</StyleLoginButton>
              </Grid>
              <Grid item lg="6">
                <StyleLoginButton backgroundColor variant="contained">
                  Signup
                </StyleLoginButton>
              </Grid>
            </Grid>
          </StyleCard>
        </Grid>
      </StyleGrid>
    </div>
  );
};

export default Login;
