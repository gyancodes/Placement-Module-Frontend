import { Box, Group, Button, TextInput, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import "../../style/loginform.css";
import { Paper } from "@material-ui/core";
const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Montserrat, sans-serif, ${theme.fontFamily}`,
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 10,
  },

  label: {
    fontFamily: `Montserrat, sans-serif,${theme.fontFamily}`,
  },
}));

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 8 ? null : "Password must be at least 8 characters long",
    },
  });
  const { classes } = useStyles();

  return (
    <>
      <div className="formbody">
        <Box
          maw={400}
          mx="auto"
          mt="auto"
          h={495}
          sx={(theme) => ({
            borderRadius: 20,
          })}
        >
          <Paper elevation={16} >
            <Group position="center">
              <h1 className={classes.title}>Student Login</h1>
            </Group>

            <Group position="center">
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Box mt="md" w={300}>
                  <TextInput
                    withAsterisk
                    label="Email address"
                    className={classes.label}
                    labelProps={{ style: { color: "black" } }}
                    placeholder="your@gmail.com"
                    {...form.getInputProps("email")}
                  />

                  <TextInput
                    withAsterisk
                    label="Password"
                    className={classes.label}
                    labelProps={{ style: { color: "blacka" } }}
                    placeholder="enter your password"
                    {...form.getInputProps("password")}
                  />
                </Box>

                <Group position="center">
                  <Box mt="md" mb={40}>
                    <Button
                      color="primary"
                      type="submit"
                      w={300}
                      mt={20}
                      sx={(theme) => ({})}
                    >
                      Login
                    </Button>
                  </Box>
                </Group>

                {/* <Box mt={3}>
            <input
              type="email"
              placeholder="Email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
            />
          </Box>
          <Box mt={3}>
            <input
              type="password"
              placeholder="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
            />
          </Box>
          <Box mt={3}>
            <button type="submit">Login</button>
          </Box> */}
              </form>
            </Group>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default LoginForm;
