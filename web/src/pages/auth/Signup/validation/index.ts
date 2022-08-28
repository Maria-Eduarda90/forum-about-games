import * as yup from "yup";

export const validationsSignUp = {
  name: yup
    .string()
    .required("Preencha o campo name")
    .min(3, "Minimo de 3 caracteres.")
    .max(200, "Maximo de 200 caracteres"),

  email: yup
    .string()
    .required("Preencha o campo e-mail")
    .email("Preencha um e-mail valido")
    .max(200, "Maximo 200 caracteres"),
  password: yup
    .string()
    .required("Preencha o campo senha")
    .min(8, "Minimo de 8 caracteres")
    .max(200, "Maximo de 200 caracteres"),
};
