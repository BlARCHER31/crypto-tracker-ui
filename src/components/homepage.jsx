import React from 'react'
import About from './about'
import Hero from './hero'

const HomePage = () => {
  return (
    <div className='about'>
      <Hero />
      <div className='container'>
        <About />
        <p className='heading'>Tech Stack</p>
        <p className='sub-heading'>Backend</p>
        <p>
          The backend of this application was written in JavaScript with NodeJs.
          For Routing purposes I used the popular NPM Express and for the HTTP
          requests I again used Axios.
        </p>
        <p className='sub-heading'>Frontend</p>
        <p className='description'>
          The FrontEnd of the Project is built with ReactJs. For routing and
          navigation I used NPM React-Router-Dom.
        </p>
        <p className='sub-heading'>DataBase</p>
        <p className='description'>
          For the database I used MongoDB. I chose this because of my previous
          experience and I wanted to learn it more in depth. In the backend I
          used the NPM Mongoose to connect and make different calls to the
          database.
        </p>
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
