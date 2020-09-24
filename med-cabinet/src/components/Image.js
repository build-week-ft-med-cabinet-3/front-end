import React from "react";
import myImage from "../assets/CAN.jpg";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Header from "./Header";
import { Autocomplete } from "@material-ui/lab";
import Footer from "./Footer";
import FormContainer from "./FormContainer";

const Img = withStyles({
  root: {
    backgroundImage: `url(${myImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
  },
})(Box);

const MedImg = () => {
  return (
    <Img>
      <Header />
      <FormContainer />
    </Img>
  );
};

export default MedImg;
