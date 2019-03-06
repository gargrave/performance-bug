/**
 * The app performs nicely when using the small grid size.
 *
 * However, when switching the grid to the large size,
 *    performance becomes extremely laggy, leaving the app in an unusable state.
 *
 * Let's try to figure out what we can do to get the performance for large size
 *    on par with what we are seeing with the small size.
 */
const small = {
  cols: 20,
  rows: 8,
}

const large = {
  cols: 20,
  rows: 160,
}

// TODO: toggle the comments here so the large grid is the default export
export default small
// export default large
