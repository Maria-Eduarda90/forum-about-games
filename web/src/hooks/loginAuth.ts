import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { validationsLogin } from "../pages/auth/Login/validation";
import { useNavigate } from "react-router-dom";

export const loginAuth = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    onSubmit: async (values) => {
      try {
        const data = {
          email: values.email,
          password: values.password,
        };
        console.log("data: ", data);

        const response = await context.userSignIn(data);
        console.log("response: ", response);

        if (response) {
          navigate("/home");
          return;
        }
      } catch (err) {
        alert("email ou senha incorreto");
      }
    },
    validationSchema: Yup.object(validationsLogin),
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
  });

  return formik;
};
