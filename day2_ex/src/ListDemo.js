import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    <table align="center" border="1">
      <thead>
            <th>Name</th>
            <th>Age</th>
      </thead>
      <tbody>
           {members.map(member => {
               return (
                <tr>
                    <td>{member.name}</td>
                    <td>{member.age}</td>
                </tr>

               );
           })}

      </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4 align="center">All Members</h4>
      <MemberTable members = {props.members}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
};

// Answer to questions : 
// 1) and 2)?: 
//Keys help React identify which items have changed. (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.
//Each item in the array has an id associated with it. Hence, this is the id that is assigned as a key for each item. This is the best approach to assign unique keys for items on a list.
//In this method, the key is a unique string that identifies each item.

//3): 
//In a React component, props are variables passed to it by its parent component.
//State on the other hand is still variables, but directly initialized and managed by the component.
//A state is a variable which exits inside a component, that cannot be accessed and modified outside the component.
//Works very similiar to a variable that is declared inside a function that cannot be accessed outside the scope
//of the function in normal javascript.

//4):
//Must be put in a class component 

//5):
//const [name, setName] = useState(name);