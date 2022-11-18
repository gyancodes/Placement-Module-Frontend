import React from 'react'
import { Box } from '@mantine/core';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


const PreviousVisit = () => {
  return (
    <>
     <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'red' ? theme.colors.red[10] : theme.colors.red[6],
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
      Failed Visits
    </Box>
    <br></br>
    <ListGroup horizontal>
    <ListGroupItem>Company 1</ListGroupItem>
    <ListGroupItem>DD/MM/YYYY</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Re-Schedule</Button></ListGroupItem>
    <ListGroupItem ><Button color= "primary">Cancel</Button></ListGroupItem>
    </ListGroup>

    <ListGroup horizontal>
    <ListGroupItem>Company 2</ListGroupItem>
    <ListGroupItem>DD/MM/YYYY</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Re-Schedule</Button></ListGroupItem>
    <ListGroupItem ><Button color= "primary">Cancel</Button></ListGroupItem>
    </ListGroup>

    <ListGroup horizontal>
    <ListGroupItem>Company 3</ListGroupItem>
    <ListGroupItem>DD/MM/YYYY</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Re-Schedule</Button></ListGroupItem>
    <ListGroupItem ><Button color= "primary">Cancel</Button></ListGroupItem>
    </ListGroup>
    </>
    
    
  )
}

export default PreviousVisit;