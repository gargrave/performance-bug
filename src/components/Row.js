import React from 'react'
import settings from '../settings'
import Square from './Square'

const cols = Array(settings.cols).fill(0)

/**
 * A component to render a single row of squares in the grid
 */
export default class Row extends React.Component {
  /** Returns the index of the first Square contained within this row */
  get minIdx() {
    return this.props.row * settings.cols
  }

  /** Returns the index of the last Square contained within this row */
  get maxIdx() {
    return this.minIdx + settings.cols
  }

  render() {
    const { onSquareSelected, row, selectedIdx } = this.props

    return (
      <div>
        {cols.map((_, colIdx) => {
          const squareIdx = row * settings.cols + colIdx
          return (
            <Square
              idx={squareIdx}
              key={squareIdx}
              onSelected={onSquareSelected}
              selected={squareIdx === selectedIdx}
            />
          )
        })}
      </div>
    )
  }
}
