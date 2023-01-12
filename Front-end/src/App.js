import './App.css';
import React from 'react'
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

const App = () => {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/update/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>

    </>
  )


}

export default App;



