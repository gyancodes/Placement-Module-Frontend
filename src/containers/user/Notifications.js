import React from 'react'
import { Box } from '@mantine/core';
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import { useState } from 'react';


const Notifications = (args) => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);

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
      })}
    >
      Notifications
    </Box>
    <br />
    <React.StrictMode>
    <ListGroup>
    <ListGroupItem>
    <tag>Alert! Report at Hall No. 6 immediately for pre-placement talk. <br /></tag>
    <br />
      <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>
        Expand
      </Button>
      <Collapse isOpen={isOpen1} {...args}>
        <Card>
          <CardBody>
          Dear Students, 
          Please report at Seminar Hall no. 6, Aryabhatta Building for Dvaya Ribotics campus Now. We will start the pre placement Talk Immediately. 
          
          +Mr. XYZ : Single point of contact for this campus recruitment. 
          
          Thank you. 
          </CardBody>
        </Card>
      </Collapse>
      </ListGroupItem>
      <ListGroupItem>
    <tag>Alert! Report at Hall No. 2 immediately for pre-placement talk. <br /></tag>
    <br />
      <Button color="primary" onClick={toggle2} style={{ marginBottom: '1rem' }}>
        Expand
      </Button>
      <Collapse isOpen={isOpen2} {...args}>
        <Card>
          <CardBody>
          Dear Students, 
          Please report at Seminar Hall no. 6, Aryabhatta Building for Dvaya Ribotics campus Now. We will start the pre placement Talk Immediately. 
          
          +Mr. XYZ : Single point of contact for this campus recruitment. 
          
          Thank you. 
          </CardBody>
        </Card>
      </Collapse>
      </ListGroupItem>
    </ListGroup>
    
    </React.StrictMode>
    </>
  )
}


export default Notifications;
