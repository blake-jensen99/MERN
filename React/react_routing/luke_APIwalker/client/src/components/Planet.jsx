import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Planet = () => {
    const {int} = useParams()
    const [planetList, setPlanetList] = useState({})

    useEffect(() => {
      fetch(`https://swapi.dev/api/planets/${int}`)
      .then(res => {
        return res.json()
      }).then(res => {
        setPlanetList(res)
        console.log(res.name)
        // console.log(int)
      }).catch(err=> {
        console.log(err);
      });
    }, [int]);



  return (
    <div>
        <h2>{planetList.name}</h2>
        <h4>Terrain: {planetList.terrain}</h4>
        <h4>Population: {planetList.population}</h4>
        <h4>Climate: {planetList.climate}</h4>
        <h4>Gravity: {planetList.gravity}</h4>
    </div>
  )
}

export default Planet