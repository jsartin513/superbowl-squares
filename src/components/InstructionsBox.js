import React from 'react'
import "../App.css"

export const InstructionsBox = (props) => {
  return (
    <div className="instructionsBox">
       In this Super Bowl Squares game, instead of choosing squares, just enter names to the right. <br />
       Once you click the <b>"Fill Squares!"</b> button the squares will populate equally and randomly. <br /><br />

       A winner may be selected at the end of each quarter, or at the end of the game. <br />
       To select the winner, take the <b>last</b> digit of each team's score, and find the box that matches both of those!
    </div>
  )
}
