import React, { useState } from 'react'
import { Heading, PricingDetails, PricingLists, Section } from './supports'
import { arrowDown, smallSphere, stars } from '../assets'
import { LeftLine, RightLine } from './design/Pricing'
import { ScrollParallax } from 'react-just-parallax'

const Pricing = () => {

    const [showDetails, setshowDetails] = useState(true);

    const opendetails = () => {
        if (showDetails) {
            setshowDetails(false);
        } else {
            setshowDetails(true);
        }
    }

    return (
        <Section className='overflow-hidden' id='pricing'>
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <ScrollParallax shouldPause strength={0.09}>
                        <img
                            src={smallSphere}
                            className='relative z-1 mx-auto'
                            width={255}
                            height={255}
                            alt="Sphere"
                        />
                    </ScrollParallax>

                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                        <img
                            src={stars}
                            alt="stars"
                            width={950}
                            height={400}
                            className='w-full animate-pulse'
                        />
                    </div>
                </div>

                <Heading
                    tag='Get started with Brainwave'
                    title='Pay Once Use Forever'
                />

                <div className="relative">
                    <PricingLists />

                    <LeftLine />
                    <RightLine />
                </div>

                <div className='flex justify-center mt-10'>
                    <span className='text-xs md:text-sm font-code font-bold tracking-wider border-b cursor-pointer hidden md:block' onClick={() => (opendetails())}>See the full details {showDetails}</span>
                </div>
                {showDetails && <PricingDetails />}
                <div className={`${showDetails ? 'items-center justify-center p-1 mx-auto rounded-full mt-5 cursor-pointer animate-bounce rotate-90 bg-conic-gradient w-7 h-7' : 'hidden'}`}>
                    <img
                        src={arrowDown}
                        alt="arrow"
                        width={20}
                        height={20}
                        onClick={() => (opendetails())}
                        className='bg-n-8 rounded-full rotate-180'
                    />
                </div>
            </div>


        </Section>
    )
}

export default Pricing