import React from 'react'
import settings from '../settings'
import Row from './Row'

const rows = Array(settings.rows).fill(0)

/**
 * A component to render a full grid of squares
 */
const Grid = ({ onSquareSelected, selectedIdx }) => (
  <div className="grid">
    {rows.map((_, rowIdx) => (
      <Row
        key={rowIdx}
        onSquareSelected={onSquareSelected}
        row={rowIdx}
        selectedIdx={selectedIdx}
      />
    ))}
  </div>
)

export default Grid
