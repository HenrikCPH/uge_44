import React, {useState} from "react";
 
function MemberTable({ members }) {
  const initialMembers = members.initialMembers;
  const mapMembers = initialMembers.map((member) =>
    <li key={member.toString()}>
        {member}
    </li>
    );  
  return (
    <table>
      <thead>Member</thead>
      <tbody>{mapMembers}</tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>{MemberTable(props.members.initialMembers)}</h4>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
