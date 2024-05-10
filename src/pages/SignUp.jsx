import React from 'react'
import {Button, Label} from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Signup = () => {

  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row w-96 md:w-full md:items-center justify-center gap-5'>
      <div className='flex flex-col item-center justify-center flex-1'>
      <Link to="/" className='self-center whitespace-nowrap font-bold dark:text-white text-4xl'>
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Med</span>
            Lock
        </Link>
        <p className='tet-sm mt-5'>
        Here, you can post your philosophy to enlighten people and also you can get enlighten by reading other's philosophy.</p>
      </div>


      <div className='flex-1'>
      <form className='flex flex-col gap-5'>
        
        <div className=''>
          <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username'></TextInput>
        </div>
        <div className=''>
          <Label value='Your email' />
            <TextInput type='email' placeholder='name@company.com' id='email'>
            </TextInput>
        </div>
        <div className=''>
          <Label value='Your password' />
            <TextInput type='password' placeholder='Password' id='password'>
            </TextInput>
        </div>
        <Button gradientDuoTone='purpleToPink' type='submit'>
          Sign Up
        </Button>
      </form>
      <div className='mt-5'>
        <span>Have an account?</span>
        <Link to='/sign-in'className='ml-2 font-semibold text-blue-700'>
        Sign In</Link>
      </div>
     
      </div>
      
    </div>
    
    </div>
  )
}

export default Signup