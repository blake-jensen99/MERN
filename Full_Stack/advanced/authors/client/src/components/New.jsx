import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const New = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const nav = useNavigate()


    const formHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author', {name})
            .then(res=> nav('/'))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  
        
    }


  return (
    <div>
        <form onSubmit={formHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
    </div>
  )
}
