import React from 'react';
import profileIcon from "../../Assets/Icons/download.png"

const ProfileImage = () => {
  return (
    <div className='profile-image-wrapper'>
      <div className='profile-image'>
        <img src={profileIcon} alt="profile-icon" height={150} width={150} />
      </div>
    </div>
  )
}

export default ProfileImage