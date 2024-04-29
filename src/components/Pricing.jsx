import React from 'react'
import { Heading, PricingLists, Section } from './supports'
import { smallSphere, stars } from '../assets'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
    return (
        <Section className='overflow-hidden' id='pricing'>
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere}
                        className='relative z-1'
                        width={255}
                        height={255}
                        alt="Sphere"
                    />

                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                        <img
                            src={stars}
                            alt="stars"
                            width={950}
                            height={400}
                            className='w-full'
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
                    <a href="/pricing" className='text-xs font-code font-bold tracking-wider border-b'>See the full details</a>
                </div>
            </div>

        </Section>
    )
}

export default Pricing