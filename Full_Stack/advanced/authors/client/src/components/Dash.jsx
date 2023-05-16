import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dash = () => {
    const [authors, setAuthors] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then (res => {
                console.log(res.data.authors)
                setAuthors(res.data.authors)
            })
            .catch(err => console.log(err))
    }, [refresh]) 


    const deleteProduct = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then( res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }


  return (
    <div>
        <Link to={'/new'}>Add an author</Link>
        {
            authors.map((author, i) => {
                return(
                    <div>
                        <h3>{author.name}</h3>
                        <Link to={`edit/${author._id}`}><button>Edit</button></Link>
                        <button onClick={(e) => {deleteProduct(author._id)}}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Dash