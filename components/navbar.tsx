import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

export default function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2 '>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                src='/logo.png'
                alt='Panensia Logo'
                width={118}
                height={18}
                className='object-contain' />
            </Link>

            <div className='mx-auto flex justify-between'>
                <CustomButton
                title='Home'
                btnType='button'
                containerStyles='bg-white min-w-[100px]'></CustomButton>
                <CustomButton
                title='Articles'
                btnType='button'
                containerStyles='bg-white min-w-[100px]'></CustomButton>
                <CustomButton
                title='Cart'
                btnType='button'
                containerStyles='bg-white min-w-[100px]'></CustomButton>
            </div>
            <CustomButton
            title='Sign Up'
            btnType='button'
            containerStyles='border-solid border-2 text-brown rounded-full bg-white min-w-[100px] mr-5'></CustomButton>
            <CustomButton
            title='Log In'
            btnType='button'
            containerStyles='bg-brown text-white border-solid border-2 rounded-full min-w-[100px]'></CustomButton>
        </nav>
    </header>
  )
}
