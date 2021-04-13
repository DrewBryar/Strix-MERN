import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default () => {
    const [message, setMessage ] = useState("not loaded yet...");

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(response => {
                setMessage(response.data.message)
            })
    }, [])

    return(
        <div>
            <h2>The backend is {message}</h2>
        </div>
    )
}