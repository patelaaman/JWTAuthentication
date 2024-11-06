
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'

function App() {
 

  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout></Layout>}>
               <Route index element={<Login></Login>}></Route>
               <Route path="login" element={<Login></Login>}></Route>
               <Route path="registration" element={<Registration></Registration>}></Route>
               <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
             </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
