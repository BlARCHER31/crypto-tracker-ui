import React from 'react'
import About from './about'
import Hero from './hero'
import TechStack from './techstak'

const HomePage = () => {
  return (
    <div className='about'>
      <Hero />
      <div className='container'>
        <TechStack />
        <About />
        <p className='heading'>Thank You</p>
        <p className='description'>
          Thank you so much for stopping by and I hope this project will be a
          good showcase for my software abilities. I also hope you use it and
          play around with it. I am always open to critiques and suggestions on
          how to improve this application and my code.
        </p>
      </div>
    </div>
  )
}

export default HomePage
