import React from 'react';
import Navbar from '@/components/Navbar';

const ProfileLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default ProfileLayout