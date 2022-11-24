import React from 'react'
import { Box } from '@mantine/core';
import { ListGroup, ListGroupItem} from 'reactstrap';
import { Button, Container } from 'reactstrap';


const UpcomingVisit = () => {
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
      Upcoming Visits
    </Box>
    <Container size="xs" px="xs">
    <br></br>
    <ListGroup horizontal>
    <ListGroupItem >Mindtree </ListGroupItem>
    <ListGroupItem>12/03/2023</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Edit</Button></ListGroupItem>    
    <ListGroupItem ><Button color= "primary">Re-Schedule</Button></ListGroupItem>
    <ListGroupItem ><Button color= "primary">Cancel</Button></ListGroupItem>
    </ListGroup>

    <ListGroup horizontal>
    <ListGroupItem>Spotify </ListGroupItem>
    <ListGroupItem>03/04/2023</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Edit</Button></ListGroupItem>    
    <ListGroupItem ><Button color= "primary">Re-Schedule</Button></ListGroupItem>
    <ListGroupItem ><Button color= "primary">Cancel</Button></ListGroupItem>
    </ListGroup>

    <ListGroup horizontal>
    <ListGroupItem>Cisco </ListGroupItem>
    <ListGroupItem>02/02/2023</ListGroupItem>
    <ListGroupItem ><Button color= "primary">Edit</Button></ListGroupItem>    
    <ListGroupItem ><Button color= "primary">Re-Schedule</Button></ListGroupItem>
    <ListGroupItem ><Button color= "primary">Cancel</Button></ListGroupItem>
    </ListGroup>
    </Container>
    </>
    
  )
}

export default UpcomingVisit;