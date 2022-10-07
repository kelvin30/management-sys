
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
       <h3 className="m-3 d-flex justify-content-center">
       React App
       </h3>
       <Navigation/>

        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/department' element={<Department/>} />
          <Route path='/employee' element={<Employee/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
