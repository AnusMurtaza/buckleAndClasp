import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().required("Password is required"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
});
export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  c_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

export const signUpSchema = Yup.object({
  first_name: Yup.string().required("The field is required"),
  last_name: Yup.string().required("The field is required"),
  name: Yup.string().required("The field is required"),
  email: Yup.string().email().required("Please Enter Your Email"),
  phone_number: Yup.string()
    .matches(/^\d{11}$/, "Invalid phone number (11 digits required)")
    .required("The field is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  c_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

export const BannerSchema = Yup.object({
  image: Yup.string().required("Please Upload image"),
});
export const updateBannerSchema = Yup.object({
  image: Yup.string(),
});
export const mainCategorySchema = Yup.object({
  name: Yup.string().required("Please enter banner name"),
  // active:Yup.string().required("Please select the status"),
  image: Yup.string().required("Please Upload image"),
});
export const updateMainCategorySchema = Yup.object({
  name: Yup.string().required("Please enter banner name"),
  // active:Yup.string().required("Please select the status"),
  image: Yup.string(),
});

export const SubCategorySchema = Yup.object({
  name: Yup.string().required("Please enter name"),
  main_cat_id: Yup.string().required("Please select main category"),
  // image: Yup.string().required("Please Upload image"),
});
export const updateSubCategorySchema = Yup.object({
  name: Yup.string().required("Please enter name"),
  main_cat_id: Yup.string().required("Please select main category"),
  // image: Yup.string(),
});

export const ProductSchema = Yup.object({
  title: Yup.string().required("The field is required"),
  name: Yup.string().required("The field is required"),
  description: Yup.string().required("The field is required"),
  price: Yup.string().required("The field is required"),
  main_cat_id: Yup.string().required("The field is required"),
  sub_cat_id: Yup.string().required("The field is required"),
  color: Yup.string().required("Please select main category"),
  // image: Yup.string().required("Please Upload image"),
  image: Yup.array().required("Image is required"),
});
export const updateProductSchema = Yup.object({
  title: Yup.string().required("The field is required"),
  name: Yup.string().required("The field is required"),
  description: Yup.string().required("The field is required"),
  price: Yup.string().required("The field is required"),
  main_cat_id: Yup.string().required("The field is required"),
  sub_cat_id: Yup.string().required("The field is required"),
  // color: Yup.string().required("Please select main category"),
  // image: Yup.string().required("Please Upload image"),
});

export const contactUsSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  message: Yup.string().required("Please Enter Your Message"),
});

export const updateAccountSchema = Yup.object({
  email: Yup.string().email().required("The field is required"),
  first_name: Yup.string().required("The field is required"),
  last_name: Yup.string().required("The field is required"),
  name: Yup.string().required("The field is required"),
});

export const checkoutSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone_number: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  appartment: Yup.string(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  zip_code: Yup.string().required("ZIP code is required"),
  state: Yup.string().required("State is required"),
  same_shipping: Yup.boolean(),
});
