import React, {useState } from 'react'
import "../App.css"

export const NameBox = (props) => {
  const confirmNames = () => {
    props.confirmNameList(nameList);
  }

  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameList.findIndex((nl) => nl === name) === -1) {
      setNameList([name, ...nameList]);
      setName("");
    }
  }

  return (
    <div className="nameBox">
    <div className="btn">
      <button disabled={nameList.length < 2 } onClick={() => confirmNames()}> Fill Squares!</button>
    </div>
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
              return <li key={name} className="singleName">{name}</li>
            })
          }
        </ol>
      </div>
    </div>
  )
}
