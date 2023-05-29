import React from "react";
import "../../../style/Client.css";

import adove from "../../../assets/Company/adove.png";
import bosch from "../../../assets/Company/Bosch.png";
import byjus from "../../../assets/Company/Byjus.png";
import ashok from "../../../assets/Company/ashok.png";
import deloitte from "../../../assets/Company/Deloitte.png";
import hyundai from "../../../assets/Company/hyundai.png";

const Client = () => {
  return (
    <section className="clients">
      <div className="company-container">
        <img src={adove} alt="" />
        <img src={byjus} alt="" />
        <img src={bosch} alt="" />
        <img src={ashok} alt="" />
        
      </div>
      
    </section>
  );
};

export default Client;
