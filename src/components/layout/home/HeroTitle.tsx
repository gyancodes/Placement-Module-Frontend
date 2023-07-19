import React from "react";
import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Image,
} from "@mantine/core";
import { Link } from "react-router-dom";
import heroimg from "../../../assets/images/interview.png";
import "../../../style/HeroTitle.css";
import Client from "../ClientSec/Client";
// import FeatureSec from "./FeatureSec";

const BREAKPOINT = "@media (max-width: 755px)";

const img = heroimg;
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    boxSizing: "border-box",
    paddingTop: 20,
  },

  inner: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 500,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
  
}));

export function HeroTitle() {
  const { classes } = useStyles();

  return (
    <>
    <div className={classes.wrapper}>
      <div
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
     
      >
        {/* <Image radius="md" src={img} alt="placementcell" className="vert-move"/> */}
        <img src={img} alt="" className="vert-move" />
      </div>
      <Container size={900} className={classes.inner}>
        <h1 className={classes.title}>
          Welcome To
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            {" "}
            Placement Cell
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          We Will Support You In Your Entire Placement Journey.
        </Text>

        <Group className={classes.controls}>
          <Link to="/">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Get Started
            </Button>
          </Link>
          {/* <Link to="/login">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Sign In
            </Button>
          </Link>

          <Link to="/signin">
            <Button
              component="a"
              size="xl"
              variant="default"
              className={classes.control}
            >
              Register
            </Button>
          </Link> */}
        </Group>
      </Container>

      <Group>
        <Image />
      </Group>
      {/* <div
        style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
        className={classes.hiddenImage}
      >
        <Image radius="md" src={img} alt="Random unsplash image" />
      </div> */}
      {/* <FeatureSec/> */}
    </div>
    <Client/>
    </>
  );
}
