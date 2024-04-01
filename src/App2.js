import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Homepage from './crud/Homepage'
import User from './crud/User'
import './App.css'
import SelectUser from './crud/SelectUser'
const App2 = () => {
  return (
    <Router>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/users' element={<User/>} />
        <Route path='/users/:id' element={<SelectUser/>} />
      </Routes>
    </Router>
  )
}

export default App2