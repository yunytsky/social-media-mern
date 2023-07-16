import * as yup from "yup";

const loginSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().required()
});

const signupSchema = yup.object().shape({
   email: yup.string().email().required("Required"),
   firstname: yup.string().max(15, "Must be less than 15 characters").required("Required"),
   lastname: yup.string().max(30, "Must be less than 30 characters").required("Required"),
   username: yup.string().max(30, "Must be less than 30 characters").required("Required"),
   password: yup.string().min(5, "Provide minimum 5 characters").required("Required"),
   confirmation: yup.string().required("Required").oneOf([yup.ref("password"), null], "Password doesn't match"),
   country: yup.string(),
   city: yup.string(),
   birthday: yup.date().required("Required"),
   about: yup.string().max(250, "Must be less than 250 characters"),
   sex: yup.string().required("Required")
});

const verificationSchema = yup.object().shape({
   code: yup.number().max(6).required()
});

const postSchema = yup.object().shape({
   text: yup.string().max(1000, "Must be less than 1000 characters"),
})

export {loginSchema, signupSchema};