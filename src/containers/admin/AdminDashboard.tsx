import React from 'react';
import { useState } from 'react';
import { Drawer, Button, Group, Navbar, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
    return {
        navbar: {
          backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background,
        },
    };

});



const AdminDashboard = () => {
    const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar} children={undefined}  />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
         <Group position="center">
        <Button onClick={() => setOpened(true)}>Nav</Button>
      </Group>

      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Side Nav</Button>
      </Group>
    </>
  );
}
export default AdminDashboard;