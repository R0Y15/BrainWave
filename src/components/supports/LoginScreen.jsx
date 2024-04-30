import React from 'react'
import { Button } from './'

const LoginScreen = ({ type }) => {

    return (
        <>
            <div className='w-full h-[70rem]'>
                <div className='container relative top-[5rem] bg-n-8 opacity-100 z-1 p-15 rounded-2xl'>
                    <h3 className='h3 relative mx-auto text-center border-b border-n-4 w-full mb-[5.5rem]'>{type}</h3>

                    <div className='relative px-[10rem] w-[70rem] mx-auto'>
                        <form className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-5'>
                                <label htmlFor='email' className='h5'>Email</label>
                                <input type='email' name='email' id='email' className='bg-n-6 h-[3.5rem] p-5 rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <label htmlFor='password' className='h5'>Password</label>
                                <input type='password' name='password' id='password' className='bg-n-6 h-[3.5rem] p-5 rounded-xl' />
                            </div>

                            <div className='flex flex-col items-center justify-center mt-5'>
                                <Button children={type} className='mb-5' />
                                <div className="flex flex-row">
                                    <p className='body-2 tracking-wider mb-2 cursor-pointer'>Forgot Password?</p>
                                    <p>&nbsp;/&nbsp;</p>
                                    <p className='body-2 tracking-wider cursor-pointer' >New Account </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginScreen