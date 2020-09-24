import { withStyles } from "@material-ui/styles";
import React from "react";
import FormContainer from "./FormContainer";
import { Box } from "@material-ui/core";
import MedImg from "./Image";
import Header from "./Header";

const HomeWrapper = withStyles({
  root: {
    display: "flex",
  },
})(Box);

const Home = () => {
  return (
    <div>
      <Header />
      <HomeWrapper>
        <MedImg />
      </HomeWrapper>
    </div>
  );
};

export default Home;
