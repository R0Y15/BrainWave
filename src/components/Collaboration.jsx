import React, { useState } from 'react'
import { Section, Button } from './supports'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import { LeftCurve, RightCurve } from './design/Collaboration'

const Collaboration = () => {
  const [clickStatus, setClickStatus] = useState(true);

  const handleClick = () => {
    if (clickStatus) {
      setClickStatus(false);
    } else {
      setClickStatus(true);
    }
  };

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className='h2 mb-4 md:mb-8'>AI Chat Application</h2>

          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((content, idx) => (
              <li className='mb-3 py-3' key={idx}>
                <div className="flex item-center">
                  <img
                    src={check}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <h6 className='body-2 ml-5'>{content.title}</h6>
                </div>
                {content.text && (
                  <p className="body-2 mt-3 text-n-4">
                    {content.text}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <Button children='Try It Now' onClick={handleClick} />
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[32rem] lg:mx-auto'>
            {collabText}
          </p>

          <div className="relative left-1/2 lg:-top-[3.6rem] flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                  <img
                    src={brainwaveSymbol}
                    alt="brainwaveSymbol"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            <ul className={`relative -left-[11rem] ease-in-out ${clickStatus ? 'animate-spin-slow' : 'animate-spin'}`}>
              {collabApps.map((app, idx) => (
                <li key={idx} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${idx * 45}`}>
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-15 rounded-xl`}>
                    <img
                      className='m-auto'
                      src={app.icon}
                      alt="app"
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>

          {!clickStatus && (
            <p className={`body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[32rem] lg:mx-auto text-center ${!clickStatus ? "transition-opacity opacity-100 duration-[2000ms]" : ""}`}>
              Setting Up Things For You...
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Collaboration