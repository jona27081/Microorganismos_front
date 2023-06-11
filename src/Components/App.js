import { Route, Routes } from "react-router-dom";
import '../Styles/App.css';
import Menu from './Menu';
import RegistroMicroorganismo from './RegistroMicroorganismos';
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <><Menu />
    <div className='container'>
      <Routes>
        <Route exact path="/addmic" element={<RegistroMicroorganismo />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div></>
  );
}

export default App;
