import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = props => {
    useEffect(() => {
      axios.get('/api/homepage')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home, fufu flakes
      <p>{state}</p>
    </div>
 )
};

export default Home;