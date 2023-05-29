import React from "react";
import userService from "../../services/user.service";
import { generateShowHourMinuteSecond } from "antd/lib/time-picker";

const admin_profile = () => {
    const ROOT_URL = "";
    if(userService.getAdminBoard){
        console.log(userService);
    }else{
        generateShowHourMinuteSecond("MODERATO")
    }

  return (
    <>
      <div>admin_profile</div>
    </>
  );
};

export default admin_profile;