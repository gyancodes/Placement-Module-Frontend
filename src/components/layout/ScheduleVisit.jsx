import React from "react";

const ScheduleVisit = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
    <div className="card align-items-center justify-content-center"  style={{width: "18rem",height:"10rem"}}>
          <div className="card-body">
            <a href="www" className="btn btn-primary" style={{width: "10rem"}}>Add</a>
          </div>
      </div>
      <div className="card align-items-center justify-content-center"  style={{width: "18rem",height:"10rem"}}>
          <div className="card-body">
            <a href="www" className="btn btn-primary" style={{width: "10rem"}}>Previous</a>
          </div>
      </div>
      <div className="card align-items-center justify-content-center"  style={{width: "18rem",height:"10rem"}}>
          <div className="card-body">
            <a href="www" className="btn btn-primary" style={{width: "10rem"}}>Upcoming</a>
          </div>
      </div>
      <div className="card align-items-center justify-content-center"  style={{width: "18rem",height:"10rem"}}>
          <div className="card-body">
            <a href="www" className="btn btn-primary" style={{width: "10rem"}}>Confirmed</a>
          </div>
      </div>

    </div>
      
    </>
  );
};

export default ScheduleVisit;
