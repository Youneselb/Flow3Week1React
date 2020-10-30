import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";


function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const interval = setInterval( e=> apiFacade.getPersons(setPersons), 3000);
    return function clenaup() {
      clearInterval(interval);
    }
  });

  const addPersonCallback = data => {
    persons.push(data);
    setPersons([...persons]);
  };
  
  const editPersonCallback = (data) => {
    let filtered = persons.filter(p => p.id !== data.id);
    filtered.push(data);
    setPersons([...filtered]);
  }

  const storeAddEditPerson = (person) => {
    person.id === "" ? 
      apiFacade.addEditPerson(person, addPersonCallback) :
      apiFacade.addEditPerson(person, editPersonCallback);
  };

  const deletePerson = (person) => {
    apiFacade.deletePerson(person.id);
    let index = persons.indexOf(person);
    persons.splice(index,1);
    setPersons([...persons]);
    //Call this from the AllPerson control with the id for the person to delete
  }

  const editPerson = (person) => {
    setPersonToAddEdit(person);
    //Call thisfrom the AllPerson control with the  person to edit
    //Set the state variable personToAddEdit with this person (a clone) to make the new value flow down via props
  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
            emptyPerson={emptyPerson}
          />
        </div>
      </div>
    </div>
  );
}
export default App;