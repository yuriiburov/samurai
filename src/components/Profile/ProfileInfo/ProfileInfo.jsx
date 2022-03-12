import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({banner}) => {
  return (
    <>
      <div>
        <img className={classes.banner} src={banner}/>
      </div>
      <div className={classes.descriptionBlock}>ava + desc</div>
    </>
  );
};

export default ProfileInfo;