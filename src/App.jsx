import React from 'react'
import { Header, Hero } from './components'
import ButtonGradient from './assets/svg/ButtonGradient'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App