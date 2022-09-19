import * as Yup from "yup";

const onlyNumberRegex = /^[0-9\b]+$/;
const phoneNumberRegex = /^(09)[0-9\b]+$/;

const fullName = Yup.string().required("FullName is required");

const email = Yup.string()
  .email("Invalid email")
  .max(50, "Email length is too long")
  .required("Email is required");

const phoneNumber = Yup.string()
  .matches(onlyNumberRegex, "Enter only numbers")
  .typeError("Enter your phone number")
  .min(10, "Phone number length has at least 10 numbers")
  .required("Phone number is required");

const favoritePokemonId = Yup.number()
  .min(1, "Min value is 151")
  .max(151, "Max value is 151")
  .required("Favorite pokemon is required");

const description = Yup.string().required("Description is required");

export const applicationSchema = Yup.object({
  fullName,
  email,
  phoneNumber,
  favoritePokemonId,
  description,
});
