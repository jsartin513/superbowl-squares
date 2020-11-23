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
    <div><button>Fill Squares!</button></div>
    <br />
      <form onSubmit = {(e) => onSubmit(e)}>
        <input type = "text"
        placeholder = "Name" 
        name = "name" 
        value = {name} 
        onChange = {(e) => onChange(e)} 
        />
      </form>
      <div>
        <ol>
          {
            nameList.map((name) => {
              return <li>{name}</li>
            })
          }
        </ol>
      </div>
    </div>
  )
}
