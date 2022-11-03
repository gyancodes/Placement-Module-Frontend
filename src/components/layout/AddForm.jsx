import React from "react";
import {
  createStyles,
  Select,
  TextInput,
  Container,
  Indicator,
  Space,
  Textarea,
  Button,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const useStyles = createStyles((theme) => ({
  // root: {
  //   position: "relative",
  // },
  // input: {
  //   height: "auto",
  //   paddingTop: 18,
  // },
  // label: {
  //   position: "relative",
  //   pointerEvents: "none",
  //   fontSize: theme.fontSizes.xs,
  //   paddingLeft: theme.spacing.sm,
  //   paddingTop: theme.spacing.sm / 2,
  //   zIndex: 1,
  // },
}));

const AddForm = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container size="xs" px="xs" className={classes}>
        <TextInput
          placeholder="Google"
          label="Company Name"
          withAsterisk
          radius="xs"
          size="md"
          required
        />
        <Space h="md" />
        <TextInput
          placeholder="Bangalore"
          label="Company Address"
          withAsterisk
          radius="xs"
          size="md"
          required
        />
        <Space h="md" />
        <DatePicker
          placeholder="Pick date"
          label="Visit Date"
          withAsterisk
          size="md"
          required
          renderDay={(date) => {
            const day = date.getDate();
            return (
              <Indicator size={6} color="red" offset={8} disabled={day !== 20}>
                <div>{day}</div>
              </Indicator>
            );
          }}
        />
        <Space h="md" />
        <Select
          // style={{ marginTop: 20, zIndex: 2 }}
          data={["Airways", "Roadways", "Railway"]}
          placeholder="Pick one"
          label="Mode of Travel"
          size="md"
          withAsterisk
          required
          // classNames={classes}
        />
        <Space h="md" />
        <Textarea
          placeholder="Your comment"
          label="Your comment"
          radius="xs"
          size="md"
          withAsterisk
          required
        />
        <Space h="md" />
        <Button  size="md">
          Submit
        </Button>

        {/* <TextInput
          label="Company Name"
          placeholder="Google"
          classNames={classes}
        />
        <TextInput
          label="Company Address"
          placeholder="Bangalore,India"
          classNames={classes}
        /> */}
        {/* <DatePicker
          style={{ marginTop: 20 }}
          label="Visit Date"
          placeholder="Date of Meeting"
          classNames={classes}
          clearable={false}
        /> */}
        {/* <Select
          style={{ marginTop: 20, zIndex: 2 }}
          data={["Airways", "Roadways", "Railway"]}
          placeholder="Pick one"
          label="Mode of Travel"
          classNames={classes}
        /> */}
      </Container>
    </>
  );
};

export default AddForm;
