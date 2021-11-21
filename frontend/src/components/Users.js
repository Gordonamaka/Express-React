import React, {useState, useEffect} from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users/").then(res => {
      console.log(res)
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => {
        setUsers(jsonRes.usersList)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return ( 
  <div>
    {users.map(user => <li>{user}</li>)}
  </div>
  )
}

export default Users;