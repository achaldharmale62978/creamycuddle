import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Layout/Home';
import Aboutus from './component/Layout/Aboutus';
import Contactus from './component/Layout/Contactus';

function App() {
  return (
    <div className="App">

      {/* github link :: https://github.com/achaldharmale62978/creamycuddle */}
      {/* creamycuddle */}

      {/*  <Navbar/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
