import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be 5 characters long"),
  confirmPassword: yup.string().required("Must confirm Password"),
});
