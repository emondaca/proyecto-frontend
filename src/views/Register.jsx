import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constants.js'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container, Stack } from 'react-bootstrap';
import '../assets/css/Register.css'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const initialForm = {
  email: '',
  password: '',
  rol: 'Seleccione un rol',
  lenguage: 'Seleccione un Lenguage'
}

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(initialForm)

  const handleUser = (event) => setUser({ ...user, [event.target.name]: event.target.value })

  const handleForm = (event) => {
    event.preventDefault()

    if (
      !user.email.trim() ||
      !user.password.trim() ||
      user.rol === 'Seleccione un rol' ||
      user.lenguage === 'Seleccione un Lenguage'
    ) {
      return window.alert('Todos los campos son obligatorias.')
    }

    if (!emailRegex.test(user.email)) {
      return window.alert('El formato del email no es correcto!')
    }

    axios.post(ENDPOINT.users, user)
      .then(() => {
        window.alert('Usuario registrado con éxito 😀.')
        navigate('/login')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        window.alert(`${data.message} 🙁.`)
      })
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      navigate('/perfil')
    }
  }, [navigate])

  return (
    <Stack id = 'register' className='mx-auto'>
    <Container id = "formulario" className='mx-auto my-auto'>
      <Form>
        <Form.Group className="mb-3" controlId="formGridNombres">
          <Form.Label>Nombres</Form.Label>
          <Form.Control placeholder="Nombres" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridApellidoPaterno">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control type="ApellidoPaterno" placeholder="Apellido Paterno" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellidoMaterno">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="ApellidoMaterno" placeholder="Apellido Materno" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCorreoElectronico">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="CorreoElectronico" placeholder="Correo Electrónico" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTlelefono">
            <Form.Label>Número Telefónico</Form.Label>
            <Form.Control type="Teléfono" placeholder="Número Telefónico" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Repita el Password</Form.Label>
            <Form.Control type="Password" placeholder="Repita el Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="Dirección" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridRegion">
            <Form.Label>Región</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
    </Stack>
  );
}
   
   /*<form onSubmit={handleForm} className='col-10 col-sm-6 col-md-3 m-auto mt-5'>
      <h1>Registrar nuevo usuario</h1>
      <hr />
      <div className='form-group mt-1 '>
        <label>Email address</label>
        <input
          value={user.email}
          onChange={handleUser}
          type='email'
          name='email'
          className='form-control'
          placeholder='Enter email'
        />
      </div>
      <div className='form-group mt-1 '>
        <label>Password</label>
        <input
          value={user.password}
          onChange={handleUser}
          type='password'
          name='password'
          className='form-control'
          placeholder='Password'
        />
      </div>
      <div className='form-group mt-1 '>
        <label>Rol</label>
        <select
          defaultValue={user.rol}
          onChange={handleUser}
          name='rol'
          className='form-select'
        >
          <option disabled>Seleccione un rol</option>
          <option value='Full Stack Developer'>Full Stack Developer</option>
          <option value='Frontend Developer'>Frontend Developer</option>
          <option value='Backend Developer'>Backend Developer</option>
        </select>
      </div>
      <div className='form-group mt-1'>
        <label>Lenguage</label>
        <select
          defaultValue={user.lenguage}
          onChange={handleUser}
          name='lenguage'
          className='form-select'
        >
          <option disabled>Seleccione un Lenguage</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='Python'>Python</option>
          <option value='Ruby'>Ruby</option>
        </select>
      </div>
      <button type='submit' className='btn btn-light mt-3'>Registrarme</button>
    </form>
  )
}*/

export default Register
