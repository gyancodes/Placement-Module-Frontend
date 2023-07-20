import { createStyles } from '@mantine/core'
import React from 'react'


const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 40,
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


}))

const FeatureSec = () => {

    const {classes} = useStyles();

  return (
    <>
    <section>
        <h1 className={classes.title}>Feature</h1>
    </section>
    
    </>
  )
}

export default FeatureSec