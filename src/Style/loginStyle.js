import { Button, Card, Grid, Link, TextField, Typography } from "@mui/material";

export const StyleGrid = (props) => (
  <Grid
    {...props}
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "93vh",
    }}
  />
);
export const StyleImage = (props) => (
  <img
    {...props}
    style={{
      height: "120px",
      width: "179px",
    }}
  />
);
export const StyleHash = (props) => (
  <Typography
    {...props}
    style={{
      fontWeight: "700",
      fontSize: "24px",
      color: "#FFFFFF",
    }}
  />
);
export const StylePowered = (props) => (
  <Typography
    {...props}
    style={{
      fontWeight: "700",
      fontSize: "12px",
      color: "#FFFFFF",
    }}
  />
);
export const StyleCard = (props) => (
  <Card
    {...props}
    style={{
      borderRadius: "20px",
      backgroundColor: "#F4F3F3",
      width: "240px",
      height: "235px",
      border: "4px solid #BDBDBD",
      padding: "30px",
    }}
  />
);
export const StyleTextField = (props) => (
  <TextField
    {...props}
    style={{
      borderRadius: "20px",
      backgroundColor: "#F6F6F6",
      border: "1px solid #828282",
      fontWeight: "bold",
      paddingLeft: "10px",
      width: "190px",
      textAlign: "center",
    }}
  />
);
export const StyleLogin = (props) => (
  <Typography
    {...props}
    style={{
      fontSize: "24px",
      fontWeight: "700",
      color: "#301B52",
      textAlign: "center",
      marginBottom: "2vh",
    }}
  />
);
export const StyleForgot = (props) => (
  <Link
    {...props}
    style={{
      fontSize: "12px",
      fontWeight: "700",
      fontFamily: "sans-serif",
      textDecoration: "none",
      marginLeft: "2vh",
    }}
  />
);
export const StyleLoginButton = ({backgroundColor, ...props}) => (
    <Button
      {...props}
      style={{
        textTransform:"capitalize",
        borderRadius:"20px",
        backgroundColor: backgroundColor ? "#DB0916" : "#301B52",
        fontWeight:"700",
        fontSize:"12px",
        marginLeft:"2vh",
        width:"87px"
      }}
    />
  );