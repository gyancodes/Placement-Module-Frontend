import React from "react";
import { Link } from "react-router-dom";

const ScheduleVisit = () => {
  return (
    <>
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
              Add
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
              Previous
            </Link>
          </div>
        </div>
        <div
          className="card align-items-center justify-content-center"
          style={{ width: "18rem", height: "10rem" }}
        >
          <div className="card-body">
            <a
              href="www"
              className="btn btn-primary"
              style={{ width: "10rem" }}
            >
              Upcoming
            </a>
          </div>
        </div>
        <div
          className="card align-items-center justify-content-center"
          style={{ width: "18rem", height: "10rem" }}
        >
          <div className="card-body">
            <a
              href="www"
              className="btn btn-primary"
              style={{ width: "10rem" }}
            >
              Confirmed
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleVisit;
