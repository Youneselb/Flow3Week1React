import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;
  
  const createTableBody = persons => {
    let mappedPersons = persons.map(person => {
      return <tr key={person.id}>
        <td>{person.age}</td>
        <td>{person.name}</td>
        <td>{person.gender}</td>
        <td>{person.email}</td>
        <td>
          <button onClick={() => {deletePerson(person)}}>Delete</button>
        </td>
        <td>
          <button onClick={() => {editPerson(person)}}>Edit</button>
        </td>
        </tr>
    });
    return mappedPersons;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {createTableBody(persons)}
        </tbody>
      </table>
      
      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}