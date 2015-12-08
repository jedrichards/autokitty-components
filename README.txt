AutoKitty DevCards
==================

An attempt to recreate some of the value of bhauman/devcards using JavaScript, React and hot reloading.

For more background information check https://github.com/bhauman/devcards

Eventually the goal is for this project to supply a library of dumb UI components for use in the main AutoKitty app.

Quick start:
- npm i
- npm run watch
- Open a browser at localhost:3000
- Edit the devcards in index.js

Features:
- Define devcards with a name and Markdown documentation
- Live edit the components within devcards
- Visualises the props being passed into components
- Render devcards to a string for static hosting

Stack:
- Babel
- Browserify
- LiveReactLoad
- React
- Radium
