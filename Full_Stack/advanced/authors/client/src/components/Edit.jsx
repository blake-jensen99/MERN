import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setName(res.data.author.name)
        })
        .catch((err) => nav('/none'))
    }, [])

    const updateAuthor = e => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => nav('/'))
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
        <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
            </p>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Edit