import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Catch from "./components/Catch";
import { useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/:vari" element={<Catch/>} />
        <Route path="/:vari/:col1" element={<Catch/>} />
        <Route path="/:vari/:col1/:col2" element={<Catch/>} />
      </Routes> 
    </div>
  );
}

export default App;
