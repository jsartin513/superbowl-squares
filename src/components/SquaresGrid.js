import React from 'react'
import styled from 'styled-components'
import "../App.css"

const zero_to_nine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const SquaresRow = styled.div`
  display: flex;
  height: 30px;
`

export const SquaresColumn = styled.div`
  flex: 1;
  border-style: solid;
  border-width: thin;
  height: 30px;
  width: 30px;
  text-align: center;
`

export const SquaresGrid = (props) => {
  const {squareNames} = props;
  return (
    <div className="squaresGrid">
      <SquaresRow>
        <SquaresColumn/>
        {zero_to_nine.map((header_number) => (
          <SquaresColumn key={'header' + header_number}><span className="headerText">{header_number}</span></SquaresColumn>
        ))}
      </SquaresRow>

      {zero_to_nine.map((row_number) => (
        <SquaresRow key={row_number}>
          <SquaresColumn key={'firstcol' + row_number}><span className="headerText">{row_number}</span></SquaresColumn>
          {zero_to_nine.map((column_number) => (
            <SquaresColumn key={column_number}>{squareNames[10*row_number + column_number]}</SquaresColumn>
          ))}
        </SquaresRow>
      ))}
    </div>
  )
}
