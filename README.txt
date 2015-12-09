AutoKitty DevCards
==================

An attempt to recreate some of the value of bhauman/devcards using JavaScript, React and hot reloading.

For more background information check
https://github.com/bhauman/devcards

Eventually the goal is for this project to supply a library of dumb UI components for use in the main AutoKitty app.

Quick start:
- npm i
- npm run watch
- Open a browser at localhost:3000
- Edit the cards in index.js

Features:
- Live edit the devcards and components
- Define devcards with an optional name and documentation
- Visualise props passed to components
- Devcards can be rendered to a string for server side rendering
- Devcards can render either React Component classes or arbitrary trees of composed ReactElements

Stack:
- Babel
- Browserify
- LiveReactLoad
- React
- Radium

Future features:
- Visualse callbacks being invoked, e.g. onClick
- Render more target types? What makes sense?
- Visualise component state?
- Visualise state external to a devcard? i.e. pass a state atom
- Define tests, and visualise results in devcards? What sort of tests?
- Can we make the devcards lib more lib-like and hot-reloading implementation agnostic?
