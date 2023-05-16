import React from 'react'
import { Link } from 'react-router-dom'

const None = () => {
  return (
    <div>
        <h3>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h3>
        <Link to={'/new'}>Add an author</Link>
        <br />
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default None