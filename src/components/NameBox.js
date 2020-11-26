import React, {useState } from 'react'
import "../App.css"

export const NameBox = () => {
  const [name, setName] = useState("");
  const [nameList,setNameList] = useState([]);

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setNameList([name, ...nameList]);
    setName("");
  }

  return (
    <div className="nameBox">
    <div className="btn"><button>Fill Squares!</button></div>
    <br />
      <form
        className = "nameInput" 
        onSubmit = {(e) => onSubmit(e)}>
          <input type = "text"
          placeholder = "Name" 
          name = "name" 
          value = {name} 
          onChange = {(e) => onChange(e)} 
          />
      </form>
      <div className="nameList">
        <ol>
          {
            nameList.map((name) => {
              return <li className="singleName">{name}</li>
            })
          }
        </ol>
      </div>
    </div>
  )
}
