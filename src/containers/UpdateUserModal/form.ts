import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  picture: Yup.string().nullable(),
});

export const initialValues = {
  name: "",
  email: "",
  picture: "",
};
