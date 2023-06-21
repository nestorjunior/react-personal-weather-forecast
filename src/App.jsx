import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderPage from './components/HeaderPage'
import NavbarPage from './components/NavbarPage'

import FormLogin from './pages/FormLogin'
import FormSignup from './pages/FormSignup'

const App = () => {

  return (
    <>
      <HeaderPage />
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<FormLogin />} />
          <Route path='/signup' element={<FormSignup />} />
        </Routes>
        <NavbarPage />
      </BrowserRouter>

      
    </>
  )
}

export default App
