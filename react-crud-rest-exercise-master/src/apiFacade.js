import AllPersons from "./components/AllPersons";

let URL = "http://localhost:3456/api";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  function getPersons(callback) {
    fetch(URL).then(handleHttpErrors).then(data => callback(data));  
  }

  function addEditPerson(person, callback) {
    if(person.id === "") {
      // ADD the person
      let options = makeOptions("POST", person);
      fetch(URL,options).then(handleHttpErrors).then(data => callback(data));
    } else {
      let options = makeOptions("PUT", person);
      fetch(URL+"/"+person.id,options).then(handleHttpErrors).then(data => callback(data));
    }
  }

  function deletePerson(id) {
    console.log(id);
    let options = makeOptions("DELETE");
    fetch(URL+"/"+id,options);
  }
  
  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}
export default apiFacade();