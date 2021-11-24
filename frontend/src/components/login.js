import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Login = props => {
  useEffect(() => {
    axios.get('http://localhost:3001/api/login')
      .then((res) => {
        console.log("data", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      }); 
  }, []);

  const [state, setState] = useState([]);

return(
  <div>
    Home, 
    {setState}
  </div>
)
};

export default Login;