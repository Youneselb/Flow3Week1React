import React, {useState} from "react";

const NameForm = () => {
  const [name,setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(name);
  };


 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}