import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import People from "./components/People";
import Planet from "./components/Planet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Obi from "./components/Obi";

function App() {
  const [select, setSelect] = useState('planet')
  const [id, setId] = useState(0)
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (select === "planet" &&  id < 11 && id > 0){
      navigate('/planet/'+ id);
    }
    else if (select === "people" &&  id < 11 && id > 0) {
      navigate('/people/' + id)
    }
    else {
      navigate('/obi')
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <label htmlFor="drop">Search for:</label>
          <select onChange={(e) => setSelect(e.target.value)} name="drop" id="drop">
            <option value="planet">Planet</option>
            <option value="people">People</option>
          </select>
          <label htmlFor="id">ID:</label>
          <input onChange={(e) => setId(e.target.value)} type="number" name="id" id="id" />
          <button type="submit">Search</button>
        </form>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/planet/:int" element={<Planet/>} />
        <Route path="/people/:int" element={<People/>} />
        <Route path="/obi" element={<Obi/>} />

      </Routes> 
    </div>
  );
}

export default App;
