"use client"
import React, { useState } from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

//   const dispatch= useDispatch();
//   const {currentUser}= useSelector(state=>state.user);
const [currentUser, setCurrentUser]= useState(true);

  return (
    <Navbar className='border-b-2 bg-sparkRed'>
      <Link href='#' className='self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white'>
        <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
         SparkLeo
        </span>
        Test
      </Link>
      <form>
        <TextInput
        type='text'
        placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        {
          currentUser ? (
            <Dropdown 
            arrowIcon={false} 
            inline 
            label={
            <Avatar alt='user' img={currentUser.profilePicture || "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} rounded/>
            }>
              <Dropdown.Header>
                <span className='block text-sm'>{currentUser.username || "dummy user"}</span>
                <span className='block text-sm font-medium truncate'>{currentUser.email || "placeholder@gmail.com"}</span>
              </Dropdown.Header>
              <Link href="/user/profile">
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider/>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
          ) :
          (
            <Link href="#">
              <Button outline gradientDuoTone='purpleToBlue'>
                Sign In
              </Button>
            </Link>
          )
        }
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse >
          <Navbar.Link  >
            <Link href='#'>Home</Link>
          </Navbar.Link>
          <Navbar.Link >
            <Link href='#'>About</Link>
          </Navbar.Link>
          <Navbar.Link >
            <Link href='#'>Projects</Link>
          </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header