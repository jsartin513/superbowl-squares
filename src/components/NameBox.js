import React, {useState , useEffect} from 'react'

export const NameBox = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    
  }, []);

  const onChange = (e) => {
    console.log(name);
    setName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
  }

  return (
    <div>
      <form onSubmit = {(e) => onSubmit(e)}>
        <input type = "text"
        placeholder = "Name" 
        name = "name" 
        value = {name} 
        onChange = {(e) => onChange(e)} 
        />
      </form>
    </div>
  )
}
