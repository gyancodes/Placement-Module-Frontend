import { Group, Box, Button } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";






const ScheduleVisit = () => {
  return (

    <>
    <div>
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
      Schedule Visit
    </Box>
    </div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card align-items-center justify-content-center"
          style={{ width: "18rem", height: "10rem" }}
        >
          <div className="card-body">
            <Link
              to="/placement_dept/addform"
              className="btn btn-primary"
              style={{ width: "10rem" }}

            >
              Add Visit
            </Link>
          </div>
        </div>
        <div
          className="card align-items-center justify-content-center"
          style={{ width: "18rem", height: "10rem" }}
        >
          <div className="card-body">
          <Link
              to="/placement_dept/previousvisit"
              className="btn btn-primary"
              style={{ width: "10rem" }}

            >
              Failed Visit
            </Link>
          </div>
        </div>
        <div
          className="card align-items-center justify-content-center"
          style={{ width: "18rem", height: "10rem" }}
        >
          <div className="card-body">
          <Link
              to="/placement_dept/upcomingvisit"
              className="btn btn-primary"
              style={{ width: "10rem" }}

            >
              Upcoming Visit
            </Link>
          </div>
        </div>
        <div
          className="card align-items-center justify-content-center"
          style={{ width: "18rem", height: "10rem" }}
        >
          <div className="card-body">
          <Link
              to="/placement_dept/completedvisit"
              className="btn btn-primary"
              style={{ width: "10rem" }}

            >
              Completed Visit
            </Link>
          </div>
        </div>
      </div>

      {/* <Group >
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>




      </Group> */}
    </>
  );
};

export default ScheduleVisit;
