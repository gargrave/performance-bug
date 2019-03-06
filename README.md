# Let's Troubleshoot a Performance Bug

## Intro

This app does the following:

- Renders a grid of squares based on the width/height as specified in `src/settings.js`
- Highlights the currently-selected square with an alternate color
  - In this case, squares are selected on mouse over

To run the app:

- Run `yarn` or `npm i` to install dependencies
- Run `yarn start` or `npm start` to fire it up
- Visit `http://localhost:3000` in your browser!

## Some Notes

- There are no trick questions here. This is simply a recreation of a fairly common performance issue in React.
- Assume we cannot edit `src/App.js`, so we need to implement a solution in our own components.
- No CSS changes should be necessary--just JS/React stuff.
  - (`classNames` is a lib that makes it easy to conditionally apply CSS classes without a lot of additional code; you can completely disregard this when you see it in a few components.)

## TODO

- Play with the app with the default settings.
  - Notice that the "hightlighting" performance is nice and tight with a small number of squares.
- Go into `src/settings.js`, and toggle the default export to the `large` version.
  - (Just uncomment `export default large` and comment out `export default small`)
- Save/refresh, and now notice that the performance in hightlighting squares is pretty laggy.
- Let's work together to troubleshoot this and figure out how we can get good performance, even at the larger size.
  - Bear in mind, there is not necessarily only one "correct" solution to this.
  - The most important thing here is not to finish implementing a full solution, but more just to work together in diagnosing the issue and brainstorming potential fixes.

## Links

You can also access this exercise [here at CodeSandbox](https://codesandbox.io/s/x94818v05p), if you prefer to edit in-browser. (It is set to fork on edit, so feel free to hack to your heart's content.)
