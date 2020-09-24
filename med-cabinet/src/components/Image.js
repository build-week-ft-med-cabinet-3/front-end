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
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${myImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
})(Box);

const MedImg = () => {
  return (
    <Img>
      <FormContainer />
    </Img>
  );
};

export default MedImg;
