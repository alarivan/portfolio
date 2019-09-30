import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required"),
})

export type ContactFormValues = {
  email: string
  name: string
  message: string
}

export const initialValues = {
  email: "",
  name: "",
  message: "",
}
