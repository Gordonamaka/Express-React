import React, { useState, useEffect } from 'react'
import axios from 'axios';

const StockPredict = props => {
    useEffect(() => {
      axios.get('http://localhost:3001/api/stock-predict')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home, fufu flakes
      <p>{state}
      to the moon!!!</p>
    </div>
 )
};

export default StockPredict;