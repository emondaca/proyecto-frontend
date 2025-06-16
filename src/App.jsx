
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Tienda from './views/Tienda'
import Carrito from './views/carrito'
import Perfil from './views/Perfil'
import CarritoProvider from './context/CarritoProvider'
import ClientProvider from './context/ClientProvider'
import TokenProvider from './context/TokenProvider'
import NavBar from './components/NavBar'
import Blog from './views/Blog'

function App() {

  return (
    <>
      <ClientProvider><TokenProvider><CarritoProvider>
        <NavBar></NavBar>
        <Routes>
          <Route
            path= "/"
            element= { <Home></Home> }
          />
          <Route
            path= "/login"
            element= { <Login></Login> }
          />
          <Route
            path= "/register"
            element= { <Register></Register> }
          />
          <Route
            path= "/tienda"
            element= { <Tienda></Tienda> }
          />
          <Route
            path= "/carrito"
            element= { <Carrito></Carrito> }
          /> 
          <Route
            path= "/perfil"
            element= { <Perfil></Perfil> }
          />
           <Route
            path= "/blog"
            element= { <Blog></Blog> }
          />
        </Routes>
      </CarritoProvider></TokenProvider></ClientProvider>
    </>
  )
}

export default App

