import {
  Group,
  Box,
  createStyles,
  TextInput,
  PasswordInput,
  InputBase,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Paper } from "@material-ui/core";


import "./style.css"
const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Montserrat, sans-serif, ${theme.fontFamily}`,
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
  },

  label: {
    fontFamily: `Montserrat, sans-serif,${theme.fontFamily}`,
  },
}));

const SignUp = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      department: {
        value: "computer science",
        label: "Computer Science",
      },
      registrationNumber: "",
    },
    validate: {
      name: (value) => (value.length > 0 ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 8 ? null : "Password must be at least 8 characters long",
      registrationNumber: (value) => (value.length > 0 ? null : "Required"),
    },
  });

  return (
    <>
    <div className="signupform">

    
      <Box
        maw={400}
        mx="auto"
        my="auto"
        mt={20}
        sx={(theme) => ({
          paddingTop: 20,
          paddingBottom: 40,
          borderRadius: 40,
        })}
      >
        <Paper elevation={16} >
          <Group position="center">
            <h1 className={classes.title}>Student Register</h1>
          </Group>
          <Group position="center">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Box mt="md" w={300}>
                <TextInput
                  withAsterisk
                  label="Name"
                  className={classes.label}
                  labelProps={{ style: { color: "black" } }}
                  placeholder="Full Name"
                  {...form.getInputProps("name")}
                />
                <TextInput
                  withAsterisk
                  label="Email address"
                  className={classes.label}
                  labelProps={{ style: { color: "black" } }}
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  withAsterisk
                  label="Password"
                  className={classes.label}
                  labelProps={{ style: { color: "black" } }}
                  placeholder="Password"
                  {...form.getInputProps("password")}
                ></PasswordInput>

                <InputBase
                  withAsterisk
                  component="select"
                  label="Department"
                  className={classes.label}
                  labelProps={{ style: { color: "black" } }}
                  placeholder="Department"
                  {...form.getInputProps("department")}
                >
                  <option value="computer science">Computer Science</option>
                  <option value="Civil">Civil</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Electrical">Electrical</option>
                </InputBase>
                <TextInput
                  withAsterisk
                  label="Registration Number"
                  className={classes.label}
                  labelProps={{ style: { color: "black" } }}
                  placeholder="Registration Number"
                  {...form.getInputProps("registrationNumber")}
                />
              </Box>
              <Group position="center">
                <Box mt="md">
                  <Button color="primary" type="submit" w={300} mt={20} mb={40}>
                    Register
                  </Button>
                </Box>
              </Group>
            </form>
          </Group>
        </Paper>
      </Box>
      </div>
    </>
  );
};

export default SignUp;
