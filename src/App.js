import React from 'react'
import settings from './settings'
import Grid from './components/Grid'
import './App.css'

export default class App extends React.PureComponent {
  state = {
    selected: 0,
  }

  // set the currently selected value to the provided index
  handleSquareSelected = idx => {
    this.setState({ selected: idx })
  }

  render() {
    const { selected } = this.state

    return (
      <div className="App">
        <h2>Total Squares: {settings.rows * settings.cols}</h2>
        <h3>Selected: {selected}</h3>
        <Grid
          onSquareSelected={this.handleSquareSelected}
          selectedIdx={selected}
        />
      </div>
    )
  }
}
