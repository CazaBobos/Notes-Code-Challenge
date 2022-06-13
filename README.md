# Ensolvers Coding Challenge

A Notes CRUD Single Page Application.

I chose to make this SPA with [Create React App](https://github.com/facebook/create-react-app).

All the Notes and their categories are located in the browser's local storage with a unique Id that I generate with the [uuid](https://www.npmjs.com/package/uuid) library, and they get accessed via a custom hook I made for it. For state management, I'm simply using Context API, as libraries like Redux can be considered overkill for theese applications.

I chose to use [react-boostrap](https://www.npmjs.com/package/react-bootstrap) components library to accelerate my development process and because it was suggested. Normally, I work with TailwindCSS, but it usually requires some extra configurations that I don't need for this project.\
In Addition, i added [react-icons](https://www.npmjs.com/package/react-icons) to make the application a little more appealing to the eye.

Lastly, since this PWA has multiple views, I added [react-router-dom](https://www.npmjs.com/package/react-router-dom) to switch between views with a multiple page look & feel, while still being an SPA, so its advantages and behavior remain.

I also added a login/logout feature to the project. 
I would normally make validations on a server, but since this app is completely client-sided and because of how this feature is implemented, it's really easy to hack into de app.

You can use the following data (without the quotes, considering case sensitivity) to access to the app:

    USERNAME = "Default_Username"
    PASSWORD = "Default_Password" 

IMPORTANT: At the moment I made this project, I was using node 16.14.1 and npm 8.5.0. It could, but I can't guarantee this will work properly with older versions.

## To run de app:
You can test this app in development mode just by running **`npm run safe-start`**. This will automatically download needed dependencies (wich might take some time) and then execute the application.

OR, if you want to have more control, you can execute independent instructions:

First, to compile and run the application you need to download its dependencies using `npm i` or `npm install`
After that, and as i'm using CRA, you can use it's default commands:

- **`npm start`** to run the app in the development mode.
- **`npm run build`** to build app for production in an optimized build folder.

You can access this project's deployed production version at
[Netlify](https://notes-challenge-app.netlify.app).\
Note that you will not be able to write URLs manually in production, as routing is handled client-side and being an SPA, it doesn't have pages, but rather views.
