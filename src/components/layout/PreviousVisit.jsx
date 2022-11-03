import React from 'react'
import { Box } from '@mantine/core';


const PreviousVisit = () => {
  return (
    <>
     <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'red' ? theme.colors.red[10] : theme.colors.red[6],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
        color: 'white',
        fontSize: '30px'

        // '&:hover': {
        //   backgroundColor:
        //     theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        // },
      })}
    >
      Previous Visits
    </Box>
    </>
  )
}

export default PreviousVisit