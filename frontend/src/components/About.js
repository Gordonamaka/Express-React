import React, { useState, useEffect } from 'react'
import axios from 'axios';

const About = props => {
    useEffect(() => {
      axios.get('http://localhost:3001/api/about')
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

export default About;