import React from 'react'
import styled from 'styled-components'

const zero_to_nine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const SquaresRow = styled.div`
  display: flex;
`

export const SquaresColumn = styled.div`
  flex: 1;
  border-style: solid;
  border-width: thin;
`

export const SquaresGrid = () => {
  return (
    <div className="squares">
      <SquaresRow>
        <SquaresColumn/>
        {zero_to_nine.map((header_number) => (
          <SquaresColumn key={'header' + header_number}>{header_number}</SquaresColumn>
        ))}
      </SquaresRow>

      {zero_to_nine.map((row_number) => (
        <SquaresRow key={row_number}>
          <SquaresColumn key={'firstcol' + row_number}>{row_number}</SquaresColumn>
          {zero_to_nine.map((column_number) => (
            <SquaresColumn key={column_number}></SquaresColumn>
          ))}
        </SquaresRow>
      ))}
    </div>
  )
}
