
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import PageNotFound from './Pages/PageNotFound'

function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='*' element={<Navigate to={'/'}/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
