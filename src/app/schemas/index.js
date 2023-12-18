import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().required('Password is required'),
});


export const signUpSchema = Yup.object({
  name: Yup.string().required('The field is required'),
  email: Yup.string().email().required('Please Enter Your Email'),
  phone_number: Yup.string()
    .matches(/^\d{11}$/, 'Invalid phone number (11 digits required)')
    .required('The field is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

export const mainCategorySchema = Yup.object({
  name:Yup.string().required("Please enter banner name"),
  // active:Yup.string().required("Please select the status"),
  image:Yup.string().required("Please Upload image"),
});

// export const contactUsSchema = Yup.object({
//   email: Yup.string().email().required("The field is required"),
//   name: Yup.string().required('The field is required'),
//   message: Yup.string(),
// });

// export const resetPasswordSchema = Yup.object({
//   old_password: Yup.string().required('Old Password is required'),
//   password: Yup.string().required('New Password is required'),
//   // c_password: Yup.string().required('Password is required')
//   //    .oneOf([Yup.ref('password'), null], 'Passwords must match')
// });


// export const checkoutSchema = Yup.object({
//   address: Yup.string().min(2).max(100).required("Please Enter Your Address"),
//   appartment: Yup.string().required("Please Enter Your Appartment"),
//   country: Yup.string().required("Please Select Your Country"),
//   first_name: Yup.string().required('Please Enter Your First Name'),
//   last_name: Yup.string().min(2).max(30).required('Please Enter Your Last Name'),
//   phone_number: Yup.string().min(10).max(11).required('Please Enter Your Phone'),
//   email: Yup.string().email().required('Please Enter Your Email'),

// });


// export const updateAccountSchema = Yup.object({
//   email: Yup.string().email().required("The field is required"),
//   firstname: Yup.string().required('The field is required'),
//   lastname: Yup.string().required('The field is required'),
//   username: Yup.string().required('The field is required'),
// });


// export const editBillingSchema = Yup.object({
//   firstname: Yup.string().required('The field is required'),
//   lastname: Yup.string().required('The field is required'),
//   email: Yup.string().email().required("The field is required"),
//   phone: Yup.string().required('The field is required'),
//   country_id: Yup.string().required('The field is required'),
//   street_address: Yup.string().required('The field is required'),
//   apartment: Yup.string(),
//   state_id: Yup.string().required('The field is required'),
// });

// export const editShippingSchema = Yup.object({
//   firstname: Yup.string().required('The field is required'),
//   lastname: Yup.string().required('The field is required'),
//   // email: Yup.string().email().required("The field is required"),
//   phone: Yup.string().required('The field is required'),
//   country_id: Yup.string().required('The field is required'),
//   street_address: Yup.string().required('The field is required'),
//   apartment: Yup.string(),
//   state_id: Yup.string().required('The field is required'),
//   city: Yup.string().required('The field is required'),
//   zipcode: Yup.string().required('The field is required'),
// });
// export const contactus = Yup.object({
//   name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
//   email: Yup.string().email().required("Please Enter Your Email"),
//   message: Yup.string().min(2).max(25).required("Please Enter Your Message"),

// });