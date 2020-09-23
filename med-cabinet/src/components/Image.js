import React from "react";
import myImage from "../assets/CAN.jpg";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Header from "./Header";
import { Autocomplete } from "@material-ui/lab";

const Img = withStyles({
  root: {
    display: "flex",
    backgroundImage: `url(${myImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "center",
    height: "100vh",
    width: "100%",
  },
})(Box);

const MedImg = () => {
  return (
    <Img>
      <Header />
    </Img>
  );
};

export default MedImg;
