import User from './components/User/User';
import React, {useState}  from 'react';
import { useEffect } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res=>res.json())
    .then(data=>setUsers(data.results))
  }, [])
  const addMember = (name) => {
      setTeam([...team,name])
  }
  return (
<div>
<h1>Team Builder</h1>
<ul>
  {
    team.map((m,idx) => <li key={idx}> {m} </li>)
  }
</ul>
    {
      users.map(user => <User user={user} addMember={addMember}></User>)
    }
</div>
  );
}

export default App;
