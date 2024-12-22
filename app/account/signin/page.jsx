"use client"
import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import Image from 'next/image';
import img1 from '@/public/sparkleo.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignIn = () => {

  const [formdata, setFormData]= useState({});
    const [errorMsg, setErrMsg]= useState(null);
    const [loading, setLoading]= useState(null);
  const router= useRouter();

  const handleFormData=(e)=>{
    setFormData({...formdata, [e.target.id]: e.target.value.trim()}); //trim removes white spaces like extra space at begining or end
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if( !formdata.email || !formdata.password){
      return setErrMsg('Please fill out form data.');
    }
    try {
      setLoading(true);
      setErrMsg(null);
      const res= await fetch('http://localhost:5000/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json '},
        body: JSON.stringify(formdata)
      });
      const data= await res.json();
      if(data.success=== false){
        return setErrMsg(data.message);
      }
      setLoading(false);
      if(res.ok){
        router.push('/dashboard');
      }
      setLoading(false);
      setErrMsg(null);
    } catch (error) {
      setLoading(false);
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-between w-full md:w-1/2 bg-white p-8">
        <div className="mt-auto mb-auto md:w-2/4 w-full mx-auto">
          <h1 className="text-4xl leading-none font-semibold mb-6 text-sparkRed text-center md:text-left">Sign In</h1>
          <h1 className="text-sparkGrey text-sm text-center md:text-left">Enter your email and password to sign in!</h1>
          <div class="inline-flex items-center justify-center w-full">
              <hr class="w-1/2 h-px my-8 bg-gray-400 border-0"/>
              <span class="px-3 font-medium text-gray-400 bg-white left-1/2 dark:text-white ">or</span>
              <hr class="w-1/2 h-px my-8 bg-gray-400 border-0"/>
          </div>
          <form className="space-y-4"  onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" value="Email" className="text-sm font-medium text-gray-700" />
              <TextInput
                type="email"
                id="email"
                placeholder="mail@simmmple.com"
                className="mt-1 block w-full"
                onChange={handleFormData}
              />
            </div>
            <div>
              <Label htmlFor="password" value="Password" className="text-sm font-medium text-gray-700" />
              <TextInput
                type="password"
                id="password"
                placeholder=""
                className="mt-1 block w-full"
                onChange={handleFormData}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-sparkRed text-white hover:bg-blue-700"
              disabled={loading}
            >
             {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3 '>Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
            <div className='flex gap-2 mt-3 text-sm'>
            <span className='text-gray-700'>Not registered yet? </span>
            <Link href='/account/signup' className='text-sparkRed font-medium'>Create an Account</Link>
          </div>
          </form>
          {errorMsg && 
            <Alert color='failure' className='mt-3'>
              {errorMsg}
            </Alert>}
        </div>
        <div className="text-sm text-gray-500 mx-auto ">&copy;2023 Spark Drive. All Rights Reserved. </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-sparkRed text-white">
        <div className="flex flex-row my-auto items-center justify-center text-center gap-4">
            <Image
            src={img1}
            alt="Company Logo"
            width={80}
            height={80}
            />
            <div className="text-4xl mt-5 font-medium py-2 px-[5rem] border-4 border-gray-200 rounded-lg">Spark</div>
        </div>
        <div className='w-1/2 mb-auto mt-[-8rem] items-center mx-auto'>
          <div className='flex flex-col py-3 items-center mb-auto border-2 border-gray-200 rounded-lg'>
            <span className='text-[16px] text-gray-300 font-thin px-2'>Learn more about Air Drive on</span> 
              <p className='text-3xl'> 
              Spark.pl
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 pb-4">
          <a href="#" className="text-sm underline hover:text-gray-300">License</a>
          <a href="#" className="text-sm underline hover:text-gray-300">Blog</a>
          <a href="#" className="text-sm underline hover:text-gray-300">About</a>
        </div>
      </div>
    </div>
  )
}

export default SignIn