import React from 'react'
import { Box } from '@mantine/core';


const UpcomingVisit = () => {
  return (
    <>
     <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'green' ? theme.colors.green[10] : theme.colors.green[6],
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
      Upcoming Visits
    </Box>
    </>
  )
}

export default UpcomingVisit;