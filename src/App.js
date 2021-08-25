import User from './components/User/User';
import React, {useState}  from 'react';
import { useEffect } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res=>res.json())
    .then(data=>setUsers(data.results))
  }, [])
  return (
<div>
<h1>Team Builder</h1>
    {
      users.map(user => <User user={user}></User>)
    }
</div>
  );
}

export default App;
