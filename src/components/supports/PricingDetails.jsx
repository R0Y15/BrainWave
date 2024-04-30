import React from 'react'
import { Button } from './'
import { pricingDetails } from '../../constants'
import { check, curve } from '../../assets'

const PricingDetails = () => {

    return (
        <>
            <div className='w-full'>
                <div className='container relative bg-n-8 opacity-100 z-1 p-15 rounded-2xl duration-200 ease-in-out'>
                    <h3 className='h3 relative mx-auto text-center border-b border-n-4 w-full mb-[5.5rem]'>Experience the pinnacle of AI with our Premium Plan</h3>

                    <div className='relative px-[10rem] w-[70rem] mx-auto'>
                        <ul>
                            {pricingDetails.map((detail) => (
                                <li key={detail.id} className=' border border-n-5 rounded-2xl mb-2 p-2 hover:border-n-4 cursor-default'>
                                    <div className='mb-[1rem]'>
                                        <div className='flex flex-row gap-2'>
                                            <img
                                                src={check}
                                                alt="check"
                                                width={20}
                                                height={20}
                                            />
                                            <h5 className='h5'>{detail.title}</h5>
                                        </div>
                                        <span className='border-b border-n-1 h-1 w-full' />
                                        <p className='body-2'>{detail.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h5 className='h5 mt-10 text-center uppercase'>Join the AI revolution today with our Premium Plan and experience the
                        <span className="inline-block relative">
                            &nbsp;future
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="curve"
                            />
                        </span>
                    </h5>
                </div>

            </div>
        </>
    )
}

export default PricingDetails