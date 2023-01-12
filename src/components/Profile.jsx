import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Profile = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="profile">
      <div className="image">
        <div className="circle"></div>
      </div>

      <div className="name">
        <div className="nickname">fr0st</div>
        <div className="handle">@rachid_03</div>
      </div>

      <div onClick={toggle}>
        {show === false ? (
          <MenuIcon fontSize="large" className="menu" />
        ) : (
          <div className="log-out">Log Out</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
