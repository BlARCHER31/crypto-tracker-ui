import React from 'react'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'

const TechStack = () => {
  const size = 36
  return (
    <div>
      <p className='title'>Tech Stack</p>
      <div className='grid-1x2'>
        <span className='icons'>
          <p className='sub-heading'>Backend</p>
          <SiJavascript size={size} />
          <FaNodeJs size={size} />
          <SiExpress size={size} />
        </span>

        <p>
          The backend of this application was written in JavaScript with NodeJs.
          For Routing purposes I used the popular NPM Express and for the HTTP
          requests I again used Axios.
        </p>
      </div>
      <div className='grid-1x2'>
        <span className='icons'>
          <p className='sub-heading'>Frontend</p>
          <FaReact size={size} />
          <FaHtml5 size={size} />
          <FaCss3 size={size} />
        </span>

        <p className='description'>
          The FrontEnd of the Project is built with ReactJs. Coupled with React,
          there is plenty of HTML, JSX, and CSS.
        </p>
      </div>
      <div className='grid-1x2'>
        <span className='icons'>
          <p className='sub-heading'>DataBase</p>
          <SiMongodb size={size} />
        </span>
        <p className='description'>
          For the database I used MongoDB. I chose this because of my previous
          experience and I wanted to learn it more in depth. In the backend I
          used the NPM Mongoose to connect and make different calls to the
          database.
        </p>
      </div>
    </div>
  )
}

export default TechStack
