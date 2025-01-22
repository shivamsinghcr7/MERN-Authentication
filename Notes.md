# MERN-AUTHENTICAION APPLICATION
 - using Reactjs, Expressjs, Mongodb, Nodejs, JWT token

## STARTING PACKAGES
npm init - package.json created
npm install 
    - express = for webframework
    - dotenv = for loading environment variable from `.env` file
    - mongoose = for interacting mongodb database
    - bcryptjs = for password hashing
    - jsonwebtoken = for JWT token authentication
    - cookie-parser= for saving tokens in http only cookie
    - -D nodemon = prevents restarting the server everytime we make a change (-D = installing as Dev  dependency)
    - -D concurrently - used to run both client and server at the same time. (install in root dir)
    - @reduxjs/toolkit - For state management
    - react-redux - It is a bridge which allows to user redux with react.

- Package.json ==> "type": "module", ==> for importing easily.

## ROUTES
- POST : /api/users - Register a user
- POST : /api/users/auth - Authenticate a user and get token
- POST : /api/users/logout - Logout user and clear cookies
- GET  : /api/users/profile - Get user profile
- PUT  : /api/users/profile - Update user profile

## POINTS TO PONDER
- mongoose server returns a promise i.e. `async-await` is used to wait until the response is recieved.
- AsyncHandler - wraps around  `async-await` function and handles the errors/custom errors.

## MONGO DB Credential
- Username : shivamsingh7
- Password : @Capslock7

## STORE 
- ReduxDev Tool - Chrome Extention
- Configure Store
- Create Slices - Slices are place where we can keep certain peices of state and as well as reducer that take in actions.
- Here We'll create 2 slices 
    - Auth Slice
        - deal with local stuff
        - take user-data and put it in local storage and auth state
        - NOT tokken ( Tokken is stored in http-only cookie ) 
        - logout - it will destroyed from local storage.
    - User API Slice
        - Here we make backend request to register, login, authenticate, update profile

- Action- When we make a call it is called `action`.
- Reducer - When action changes the state it is called `reducer` 

## NOTE
- When making a call for regular function `useDispatch()` is used.
- But in case of mutation call it is not required.