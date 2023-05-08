import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [listP, setListP] = useState([])
    const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response=> {
        setListP(response.data.results)
        // console.log(response.data.results)
    })
    }
    


  return (
    <div>
        <button onClick={() => fetchPokemon()}>Fetch Pokemon</button>
        {
            listP.map((p) => {
                return (
                    <div>
                        <ul>
                            <li>{p.name}</li>
                        </ul>
                    </div>
                )
            }) 
        }
    </div>
  )
}

export default Pokemon