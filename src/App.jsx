import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import User from './User';
import CreatUser from './CreatUser';
import UpdateUser from './UpdateUser';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/create" element={<CreatUser/>} />
          <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
