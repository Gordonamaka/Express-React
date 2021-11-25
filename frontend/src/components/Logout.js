import React from "react";



export default function Logout(props) {


  const logout = props.logout;
  const user = props.user;



  return(
    <div>
      <p>
        <button type="button" onClick={logout}>Logout</button>  
      </p>
    </div>
  )

}