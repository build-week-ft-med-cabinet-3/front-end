import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import FormTabs from "./FormTabs";

const FormWrapper = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    border: "1px solid black",
  },
})(Box);

const FormContainer = () => {
  return (
    <div>
      <FormWrapper>
        <FormTabs />
      </FormWrapper>
    </div>
  );
};

export default FormContainer;
