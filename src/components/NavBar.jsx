import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { CarritoContext, TokenContext } from '../context/Context'
import { useContext } from 'react';


const NavBar = () => {
    const { tokenPresente, setTokenPresente } = useContext(TokenContext);
    const { productosCarro } = useContext(CarritoContext);
    var total_count = 0;
    {productosCarro.map((props) => (
          total_count += props.count
        ))
    }
    const setActiveClass = ({isActive}) => (isActive ? "active-nav" : undefined)

    setTokenPresente((localStorage.getItem("token") != 'null') ? true : false)

    const getProfile = () => {
        
    }

    const handleLogout = () => {
      localStorage.setItem("token", null)
      setTokenPresente((localStorage.getItem("token") != 'null') ? true : false)
    }
  return (
    <>
      <Navbar  bg="light" data-bs-theme="light">
        <Container id= 'navbar' ClassName= "py-0">
          <Navbar.Brand id='navbar_brand'>MOV Creaciones</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className= {setActiveClass} to= "/">
              <Button type= "checkbox" variant = "secondary" className="mx-2">Home</Button>
            </NavLink>
            <NavLink className= {setActiveClass} to= "/blog">
              <Button type= "checkbox" variant = "secondary" className="mx-2">Blog</Button>
            </NavLink>
            <NavLink className= {setActiveClass} to= "/tienda">
              <Button type= "checkbox" variant = "secondary" className="mx-2">Tienda</Button>
            </NavLink>
            <NavLink className= {setActiveClass} to= "/contacto">
              <Button type= "checkbox" variant = "secondary" className="mx-2">Contáctenos</Button>
            </NavLink>
          </Nav>

          <Nav className="ms-auto">
            <NavLink className= {setActiveClass} to= "/login">
              <Button type= "checkbox" variant = "primary" className="mx-2" onClick={ handleLogout }>
                {tokenPresente ? '🔓 Logout' : '🔐Login'}
              </Button>
            </NavLink>
            <NavLink className= {setActiveClass} to= { tokenPresente ? "/perfil" : "/register" }>
              <Button type= "checkbox" variant = "primary" className="mx-2" onClick={ getProfile} >
                {tokenPresente ? '🔓 Perfil' : '🔐Registrate'}
              </Button>
            </NavLink>
            <NavLink className= {setActiveClass} to= "/carrito">
              <Button type= "checkbox" variant = "primary" className="mx-2">
              Carrito 🛒 {(total_count > 0) ? total_count : ''}
              </Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar