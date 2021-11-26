import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Stockscreen = () => {
    useEffect(() => {
      axios.get('http://localhost:3001/api/daily')
        .then((data) => {
          console.log("data", data.data);
          setState(data.data);
        })
        .catch((err) => {
          console.log(err);
        }); 
    }, []);

    const [state, setState] = useState([]);

  return(
    <div>
      Home, fufu flakes
       to the moon!!!
    </div>
 )
};

export default Stockscreen;