import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Hotlist = props => {
    useEffect(() => {
      axios.get('http://localhost:3001/api/hotlist')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home, fufu flakes
      <p>{state}
      going hot as hell</p>
    </div>
 )
};

export default Hotlist;