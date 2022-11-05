import React from 'react';
import { createStyles, Container, Text, Button, Group, Image } from '@mantine/core';
import { Link } from "react-router-dom";
import heroimg from "../../../assets/images/heroimg.svg";
import { ClassNames } from '@emotion/react';
// import { GithubIcon } from '@mantine/ds';

const BREAKPOINT = '@media (max-width: 755px)';

const img = heroimg;
const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: "center",
        position: 'relative',
        boxSizing: 'border-box',
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    },

    
    inner: {

        position: 'relative',
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
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

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
    hiddenImage: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
          },
    }
}));

export function HeroTitle() {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        Placement Made Easy
                    </Text>{' '}
                </h1>

                <Text className={classes.description} color="dimmed">
                    The Placement Cell at CUTM is a concept in its own form. It has the
                    following structure comprising of three important parts viz. the
                    placement office comprising of the Manager (Placements) and placement
                    secretary, the faculty members and finally the student representatives
                    from each stream. The structure aims at touching all the aspects
                    required for the smooth functioning of placement process.
                </Text>

                <Group className={classes.controls}>

                    <Link to="/login">
                        <Button
                            size="xl"
                            className={classes.control}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                        >
                            Sign In
                        </Button>
                    </Link>



                    <Link to="/signin">
                        <Button
                            component="a"
                            href="https://github.com/mantinedev/mantine"
                            size="xl"
                            variant="default"
                            className={classes.control}
                        // leftIcon={<GithubIcon size={20} />}
                        >
                            Register
                        </Button>
                    </Link>
                </Group>
               
            </Container>

            <Group>
                <Image>

                </Image>
            </Group>
            <div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }} className={classes.hiddenImage}>
                    <Image
                        radius="md"
                        src={img}
                        alt="Random unsplash image"
                    />
                </div>
        </div>
    );
}