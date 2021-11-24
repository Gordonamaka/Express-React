import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = props => {
    useEffect(() => {
      axios.get('http://localhost:3001')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home, fufu flakes
      <p>{state}
      HAHAHAHAHAHAHAHAHAHA! We lit!!!</p>
    </div>
 )
};

export default Home;