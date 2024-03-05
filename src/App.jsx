import React from 'react'
// import FindCoder from "./Component/FindCoder"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Explore from './Component/Explore'
// import Dev from './Component/Dev'
// import Hire from './Component/Hire'
// import Challange from './Component/Challange'
import Home from  "./CRUD/Home"
import User from './CRUD/User'
import Createuser from './CRUD/Createuser'
import Edit from './CRUD/Edit'
// import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <FindCoder/>
        <Routes>
          <Route element={<Explore/>} path='/explore'/>
          <Route element={<Hire/>} path='/abc'/>
          <Route element={<Dev/>} path='/xyz'/>
          <Route element={<Challange/>} path='/challange'/>         
        </Routes>
        </BrowserRouter> */}
<BrowserRouter>
<Home/>
<Routes>
  <Route  element={<Createuser/>} path='/' ></Route>
  <Route element={<User/>} path='/user'></Route>
  <Route element={<Edit/>} path='/edit/:id'></Route>
</Routes>

</BrowserRouter>
       
    </div>
  )
}

export default App