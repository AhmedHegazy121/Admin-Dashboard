import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

// 1. Setup initial form values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

// 2. Setup validation regex and schema
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userScheme = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

// 3. Main Form Component
const UserForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box sx={{ m: "20px" }}>
      <Header title="Create User" subtitle="Create a New User Profile" />

      <Formik
        initialValues={initialValues}
        validationSchema={userScheme}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <Box
            sx={{
              display: "grid",
              gap: "30px",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <FormikTextField
              name="firstName"
              label="First Name"
              variant="filled"
              sx={{ gridColumn: "span 2" }}
            />
            <FormikTextField
              name="lastName"
              label="Last Name"
              variant="filled"
              sx={{ gridColumn: "span 2" }}
            />
            <FormikTextField
              name="email"
              label="Email"
              type="email"
              variant="filled"
              sx={{ gridColumn: "span 4" }}
            />
            <FormikTextField
              name="contact"
              label="Contact Number"
              variant="filled"
              sx={{ gridColumn: "span 4" }}
            />
            <FormikTextField
              name="address1"
              label="Address 1"
              variant="filled"
              sx={{ gridColumn: "span 4" }}
            />
            <FormikTextField
              name="address2"
              label="Address 2"
              variant="filled"
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "end", mt: "20px" }}>
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

const FormikTextField = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...otherProps}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
    />
  );
};

export default UserForm;
