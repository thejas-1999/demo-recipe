
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import CreateRecipe from './pages/CreateRecipe'
import SaveRecipe from './pages/SaveRecipe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import loginImage from './assets/login.jpg'
import registerImage from './assets/register.jpg'


function App() {
 

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register'element={<div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{backgroundImage: `url(${registerImage})`}}><Register /></div>} />
          <Route path='/login' element={<div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{backgroundImage: `url(${loginImage})`}}><Login /></div>} />
          
          
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/save-recipe' element={<SaveRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
