import React from 'react'

const HomePage = () => {
  return (
    <div>
      <p>About the Project</p>
      <p>
        While this app does not look like a lot, there was a ton of work
        involved under the hood. Both of the frontend and backend of this
        project offered plenty road blocks(I like to call them 'learning
        opportunities'), but more on all of that later. This is a Crypto
        Portfolio tracker. The basic idea of it is to have a central point to
        track your current crypto assets and to find various prices. All you
        have to do is register to get started. There is no trading offered on
        the application just a nice central viewpoint of how current assets are
        doing and how much yours are worth.
      </p>
      <p>Takeaways</p>
      <p>
        I learned a ton doing this project from start to finish. There are still
        so many features I want to add and refactoring and code clean-up I want
        to do, but I have it in a good place to display everything I have
        learned. I started this project with the backend. I began with a basic
        server and basic routing. I used the Coinbase API and UPHold API to get
        current price data for crypto currencies. Both Coinbase and UPHold offer
        a vast amount of data that I hope to dive in to more as I add new
        features to the App.
      </p>
      <p>
        For the database I chose MongoDB. Through various tutorials throughout
        my self guided journey, I was already familiar with MongoDB so I chose
        it as my database. I have used React as my frontend in
        previous projects but this one came with a new challenge.
      </p>
      <p>
        I have used React in the pass with Class Components and because of that
        began this project with the same style. Midway through I began to learn
        and read about the new React Hooks. I decided to implement those into
        the project along with the old style to display both avenues and
        approaches. As I add new features and fixes I plan on Refactoring the
        code and changing it all over to stateless functional components. So
        overall I believe this is a very well balanced project that shows
        frontend to backend to database communications.
      </p>
      <p>
        This was my first project working with Authentication. I use a JSON Web
        Token to communicate with the server for logging in and registering
        users. To do this properly I spent hours going over documentation on
        authentication.
      </p>
      <p></p>
      <p>Tech Stack</p>
      <p>Backend</p>
      <p>
        The backend of this application was written in JavaScript with NodeJs.
        For Routing purposes I used the popular NPM Express and for the HTTP
        requests I again used Axios.
      </p>
      <p>Frontend</p>
      <p>
        The FrontEnd of the Project is built with ReactJs. For routing and
        navigation I used NPM React-Router-Dom.
      </p>
      <p>DataBase</p>
      <p>
        For the database I used MongoDB. I chose this because of my previous
        experience and I wanted to learn it more in depth. In the backend I used
        the NPM Mongoose to connect and make different calls to the database.
      </p>
      <p>Thank You</p>
      <p>
        Thank you so much for stopping by and I hope this project will be a good
        showcase for my software abilities. I also hope you use it and play
        around with it. I am always open to critiques and suggestions on how to
        improve this application and my code.
      </p>
    </div>
  )
}

export default HomePage
