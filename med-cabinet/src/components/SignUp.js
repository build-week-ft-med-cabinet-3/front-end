import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import schema from "../utilities/schema";
import axios from "axios";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const defaultErrors = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);
  const [register, setRegister] = useState("");

  const returnUser = () => {
    delete values.confirmPassword;
    axios
      .post("https://medswap.herokuapp.com/api/auth/register", values)
      .then((res) => {
        console.log(res.data);
        setRegister(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
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

  const onSubmit = (evt) => {
    evt.preventDefault();
    delete values.confirmPassword;
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="email"
        label="Email"
        variant="filled"
        onChange={onChange}
        value={values.email}
        error={errors.email === "" ? false : true}
      />{" "}
      <br />
      <TextField
        name="password"
        variant="filled"
        type="Password"
        label="Password"
        required
        onChange={onChange}
        value={values.password}
        error={errors.password === "" ? false : true}
      />{" "}
      <br />
      <TextField
        name="confirmPassword"
        variant="filled"
        type="Password"
        label="Confirm-Password"
        required
        placeholder="Re-enter your password"
        onChange={onChange}
        value={values.confirmPassword}
        error={errors.confirmPassword === "" ? false : true}
      />
      <br />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="1999-09-25"
        InputLabelProps={{
          shrink: true,
        }}
      />{" "}
      <br />
      <Button onClick={returnUser} variant="contained" color="primary">
        SIGN UP!
      </Button>
    </form>
  );
};

export default SignUp;
