import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "@material-ui/core";
import SignUp from "./SignUp";
import Login from "./Login";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const FormTabs = () => {
  const [tab, setTab] = useState("1");

  const onChange = (event, newValue) => {
    setTab(newValue);
  };

  const TabsWrapper = withStyles({
    root: {
      border: "10px solid red",
    },
  });

  return (
    <div>
      <TabContext value={tab}>
        <TabList onChange={onChange}>
          <Tab label="Login" value="1" />
          <Tab label="Sign up" value="2" />
        </TabList>
        <TabPanel value="1">
          <Login />
        </TabPanel>
        <TabPanel value="2">
          <SignUp />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default FormTabs;
