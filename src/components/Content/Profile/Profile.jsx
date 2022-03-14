import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({customStore}) => (
  <main className={`${ classes.content }`}>
    <ProfileInfo banner={customStore.profilePage.profile_banner}/>
    <MyPosts customStore={customStore}/>
  </main>
);


export default Profile;