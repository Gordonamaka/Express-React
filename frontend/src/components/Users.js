import React, {useState, useEffect} from "react";

function Users(props) {
 
  const user = props.user

  // Possibly show list of Watchlist stocks
  return ( 
  <div>
    <p className="UserInfo">
    <div>Email: {user.email}</div>
    <div>First Name: {user.first_name}  </div>
    <div>Last Name: {user.last_name}  </div>
    <div>Username: {user.usernmae}  </div>
    </p>
  </div>
  )
}

export default Users;