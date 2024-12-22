"use client"
import React, { useState } from 'react';
import {Alert, Button, TextInput} from 'flowbite-react';
import Link from 'next/link';

const Profile = () => {
    const [imageFileUrl , setImageFileUri]= useState(null);
    const [currentUser , setCurrentUser]= useState(null);

  return (
    <div className='w-full max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 text-black'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <div 
          className='self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer' >
          <img 
            src={imageFileUrl || "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} 
            alt=''  
            className='rounded-full w-full h-full border-8 object-cover border-[lightgray]'
          />
        </div>
        <TextInput type='text' id='username' placeholder='username' defaultValue={ "Mishkat"}/>
        <TextInput type='email' id='email' placeholder='email' defaultValue={ "mishkat@gmail.com"}/>
        <TextInput type='password' id='password' placeholder='password'/>
        <Button type='submit' gradientDuoTone='purpleToBlue' outline onClick={(e)=>{e.preventDefault()}}>
          Update
        </Button>
      </form>
      <div className='flex justify-between mt-5 text-red-400'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
      <div className='flex gap-2 mt-3  text-lg'>
        <span className='text-gray-700 '>Visit dashboard?</span>
        <Link href='/dashboard' className='text-sparkRed font-medium '>Dashboard</Link>
      </div>
    </div>
  )
}

export default Profile