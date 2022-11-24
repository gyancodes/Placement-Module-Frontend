import React from 'react'
import { Box } from '@mantine/core';
import { Button } from 'reactstrap';

import { ListGroup, ListGroupItem } from 'reactstrap';

const CompletedVisit = () => {
  return (
    <>
     <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'green' ? theme.colors.green[10] : theme.colors.green[6],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        color: 'white',
        fontSize: '30px'

        // '&:hover': {
        //   backgroundColor:
        //     theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        // },
      })}
    >
      Completed Visits
    </Box>
    <br></br>
    <ListGroup horizontal>
    <ListGroupItem>Cognizant</ListGroupItem>
    <ListGroupItem>10/10/2022</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Details</Button></ListGroupItem>
    </ListGroup>
    </>
  )
}

export default CompletedVisit;