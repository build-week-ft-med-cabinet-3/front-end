import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import schema from "../utilities/schema";
import axios from "axios";

const defaultValues = {
  email: "",
  password: "",
};

const defaultErrors = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);
  const [login, setLogin] = useState("");

  const returnUser = () => {
    axios
      .post("https://medswap.herokuapp.com/api/auth/login", values)
      .then((res) => {
        console.log(res.data);
        setLogin(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setValues(defaultValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.message });
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  return (
    <form>
      <TextField
        name="email"
        variant="filled"
        type="email"
        label="Email"
        onChange={onChange}
        error={errors.email === "" ? false : true}
        value={values.email}
      />
      <TextField
        name="password"
        variant="filled"
        type="Password"
        label="Password"
        onChange={onChange}
        error={errors.password === "" ? false : true}
        value={values.password}
      />{" "}
      <br />
      <Button onClick={returnUser} variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default Login;
