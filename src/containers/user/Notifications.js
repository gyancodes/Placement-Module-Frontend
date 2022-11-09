import React from 'react'
import { Box } from '@mantine/core';


const Notifications = () => {
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
      })}
    >
      Notifications
    </Box>
    </>
  )
}

export default Notifications