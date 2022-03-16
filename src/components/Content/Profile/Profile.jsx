import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({customStore}) => {
  const profileIcon = customStore.profilePage.profile_icon;
  return (
    <main className={`${classes.content}`}>
      <ProfileInfo banner={customStore.profilePage.profile_banner} icon={profileIcon} desc={customStore.profilePage.profile_description}/>
      <MyPosts customStore={customStore} icon={profileIcon}/>
    </main>
  );
}


export default Profile;