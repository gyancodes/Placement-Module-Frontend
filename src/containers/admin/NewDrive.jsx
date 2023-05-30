import {
  Button,
  Container,
  TextInput,
  Textarea,
  createStyles,
} from "@mantine/core";
import React, { useState } from "react";

const useStyles = createStyles((theme) => ({
  conainer: {},
}));

const NewDrive = () => {
  const { classes, theme } = useStyles();
  const [copmanyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [ctc, setCtc] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Container
        className={classes.conainer}
        sx={{ padding: 0, marginLeft: 100 }}
      >
        <h1>Create a new Drive</h1>

        <Container
          size="xs"
          sx={{
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div>
            {" "}
            <TextInput
              placeholder="Company Name"
              required
              maxLength={20}
              radius="xs"
              size="md"
              value={copmanyName}
              onChange={(event) => setCompanyName(event.currentTarget.value)}
            ></TextInput>
          </div>

          <div>
            <TextInput
              placeholder="Role"
              required
              maxLength={20}
              radius="xs"
              size="md"
              value={role}
              onChange={(event) => setRole(event.currentTarget.value)}
            ></TextInput>
          </div>

          <div>
            <TextInput
              placeholder="CTC"
              required
              maxLength={20}
              radius="xs"
              size="md"
              value={ctc}
              onChange={(event) => setCtc(event.currentTarget.value)}
            ></TextInput>
          </div>
          <div>
            <Textarea
              required
              placeholder="Description"
              size="md"
              radius="xs"
              autosize
              minRows={10}
              value={description}
              onChange={(event) => setDescription(event.currentTarget.value)}
            ></Textarea>
          </div>
          <Button>Create</Button>
        </Container>
      </Container>
    </>
  );
};

export default NewDrive;
