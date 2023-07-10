import * as yup from "yup";

const loginSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().required()
});

const signupSchema = yup.object().shape({
   email: yup.string().email().required("Required"),
   firstName: yup.string().max(15, "Must be less than 15 characters").required("Required"),
   lastName: yup.string().max(30, "Must be less than 30 characters").required("Required"),
   username: yup.string().max(30, "Must be less than 30 characters").required("Required"),
   password: yup.string().min(5, "Provide minimum 5 characters").required("Required"),
   confirmPassword: yup.string().required("Required").oneOf([yup.ref("password")]),
   country: yup.string(),
   town: yup.string(),
   birthday: yup.date().required("Required"),
   aboutMe: yup.string().max(250, "Must be less than 250 characters"),
   sex: yup.string().required("Required")
});

const verificationSchema = yup.object().shape({
   code: yup.number().max(6).required()
});

export {loginSchema, signupSchema};