import React from 'react'
import { useParams } from 'react-router-dom'

const Catch = () => {
    const {vari} = useParams()
    const {col1} = useParams()
    const {col2} = useParams()


  return (
    <div>
        {isNaN(vari) ? <h1 style={{color: col1, backgroundColor: col2}}>The word is: {vari}</h1> : <h1 style={{color: col1, backgroundColor: col2}}>The number is: {vari}</h1>}
    </div>
  )
}

export default Catch