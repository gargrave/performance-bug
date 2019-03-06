import React from 'react'
import classNames from 'classnames'

/**
 * A component to display a single square in the grid.
 *
 * Applies a conditional class based on whether it is currently selected,
 * and handles calling a callback to select itself.
 */
const Square = ({ idx, onSelected, selected }) => (
  <div
    className={classNames('square', { selected })}
    onMouseOver={() => onSelected(idx)}
  />
)

export default Square
