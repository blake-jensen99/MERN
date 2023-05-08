import React from 'react'
import { useParams, Link , useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

const People = () => {
  const {int} = useParams()
  const [personList, setPersonList] = useState([])
  const [home, setHome] = useState("")
  const [numH, setNumH] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${int}`)
    .then(res => {
      return res.json()
    }).then(res => {
      getHome(res)
      console.log(res.name)
      // console.log(int)
      setPersonList(res)
    }).catch(err=> {
      console.log(err);
    });
  }, [int]);

  const getHome = (res) => {
    let num
    if (res.homeworld.includes('1/')){
      num = 1 
    }
    else if (res.homeworld.includes('2/')){
      num = 2 
    }
    else if (res.homeworld.includes('3/')){
      num = 3 
    }
    else if (res.homeworld.includes('4/')){
      num = 4 
    }
    else if (res.homeworld.includes('5/')){
      num = 5 
    }
    else if (res.homeworld.includes('6/')){
      num = 6 
    }
    else if (res.homeworld.includes('7/')){
      num = 7 
    }
    else if (res.homeworld.includes('8/')){
      num = 8 
    }
    else if (res.homeworld.includes('9/')){
      num = 9 
    }
    else if (res.homeworld.includes('10/')) {
      num = 10
    }
    else {
      num = 11
    }
    console.log(num + "i am num")
    return setNumH(num)
  }


  useEffect(() => {
    fetch(personList.homeworld)
    .then(resu => {
      return resu.json()
    }).then(resu => {
      // console.log(resu.name)
      setHome(resu.name)
      console.log(home) 
    }).catch(err=> {
      console.log(err);
    });
  }, [getHome]); 


  const check = () => {
    if (numH == 11){
      navigate('/obi')
    }
  }


  


return (
  <div>
      <h2>{personList.name}</h2>
      <h4>Height: {personList.height}</h4>
      <h4>Mass: {personList.mass}</h4>
      <h4>Birth Year: {personList.birth_year}</h4>
      <h4>Eye Color: {personList.eye_color}</h4>
      {numH < 11 ? <h4>Homeworld: <Link to={'/planet/' + numH}>{home}</Link></h4> : <h4>Homeworld: <Link to={'/obi'}>{home}</Link></h4>}
  </div>
)
}
export default People







