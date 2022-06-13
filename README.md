# Ensolvers Coding Challenge

A Notes CRUD Single Page Application.

I chose to make this SPA with [Create React App](https://github.com/facebook/create-react-app).

All the Notes are located in the browser's local storage with a unique Id that I generate with the [uuid](https://www.npmjs.com/package/uuid) library, and they get accessed via a custom hook I made for it.

I chose to use [react-boostrap](https://www.npmjs.com/package/react-bootstrap) components library to accelerate my development process and because it was suggested. Normally, I work with TailwindCSS, but it usually requires some extra configurations that I don't need for this project.\
In Addition, i added [react-icons](https://www.npmjs.com/package/react-icons) to make the application a little more appealing to the eye.

Lastly, since this PWA has multiple views, I added [react-router-dom](https://www.npmjs.com/package/react-router-dom) to switch between views with a multiple page look & feel, while still being an SPA, so its advantages and behavior remain.

## To run de app:
First, to compile and run the application you need to download its dependencies using `npm i` or `npm install`
After that, and as i'm using CRA, you can use it's default commands:

- **`npm start`** to run the app in the development mode.
- **`npm run build`** to build app for production in an optimized build folder.