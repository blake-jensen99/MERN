import React, { useState } from 'react'

const Pokemon = () => {
    const [listP, setListP] = useState([])
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            setListP(response.results)
        }).catch(err=>{
            console.log(err);
        });
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