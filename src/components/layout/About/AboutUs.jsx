import React from "react";
import "../../../style/About.css";
import placement from "../../../assets/images/placement.png"

const AboutUs = () => {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>
                Placement <em>Portal</em>
              </h3>
              <p>
                The Placement Cell plays a crucial role in locating job
                opportunities for under graduates and post graduates passing out
                from the college by keeping in touch with reputed firms and
                industrial establishments.
                <br />
                The placement cell operates round the year to facilitate
                contacts between companies and graduates. The number of students
                placed through the campus interviews is continuously rising.
              </p>
              <a className="cta-btn align-self-start" href="www">
                Get Started
              </a>
            </div>

            <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div className="img">
                <img src={placement} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default AboutUs;
