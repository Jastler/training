import * as yup from "yup";

export const getValidationSchema = (isRegister: boolean) => {
  return yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string().when("password", (_password, schema) => {
      return isRegister
        ? schema
            .required("Confirm Password is required")
            .oneOf([yup.ref("password")], "Passwords must match")
        : schema.notRequired();
    }),
  });
};
