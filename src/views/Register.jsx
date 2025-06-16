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
  telefono: '',
  nombres: '',
  apellido_paterno: '',
  apellido_materno: '',
  rut: '',
  fecha_nacimiento: '01/01/9999'
}

const Register = () => {
  const navigate = useNavigate()
  const [client, setClient] = useState(initialForm)

  const handleClient = (event) => setClient({ ...client, [event.target.name]: event.target.value })
  console.log(client)
  const handleForm = (event) => {
    event.preventDefault()

    if (
      !client.email.trim() ||
      !client.password.trim()
    ) {
      return window.alert('Todos los campos son obligatorias.')
    }

    if (!emailRegex.test(client.email)) {
      return window.alert('El formato del email no es correcto!')
    }

    axios.post(ENDPOINT.registrar, client)
      .then(() => {
        window.alert('Cliente registrado con éxito 😀.')
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
    <h1 className='mx-auto pb-0 mb-0 mt-5' >Registrate</h1>
    <Container id = "formulario" className='mx-auto my-auto mt-4'>
      <Form onSubmit={handleForm}>

        <Form.Group className="mb-3" controlId="formGridNombres">
          <Form.Label>Nombres</Form.Label>
          <Form.Control 
            type='text'
            placeholder="Nombres" 
            name='nombres'
            onChange={handleClient}
          />
        </Form.Group>
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridApellidoPaterno">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control
              type="ApellidoPaterno"
              placeholder="Apellido Paterno"
              name="apellido_paterno"
              onChange={handleClient} 
            /> 
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellidoMaterno">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control 
              type="apellido_materno"
              placeholder="Apellido Materno" 
              name="apellido_materno"
              onChange={handleClient}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCorreoElectronico">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control 
              type="CorreoElectronico" 
              placeholder="Correo Electrónico" 
              name= "email"
              onChange={handleClient}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTlelefono">
            <Form.Label>Número Telefónico</Form.Label>
            <Form.Control 
            type="Teléfono" 
            placeholder="Número Telefónico" 
            name="telefono"
            onChange={handleClient}
          />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRut">
            <Form.Label>RUT</Form.Label>
            <Form.Control
              type="text" 
              placeholder="RUT" 
              name="rut"
              onChange={handleClient}
              />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFechaNacimiento">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control 
              type="date" 
              placeholder="Fecha de Nacimiento"
              name="fecha_nacimiento" />
              onChange={handleClient}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password" 
              placeholder="Password" 
              name="password"
              onChange={handleClient}
              />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Repita el Password</Form.Label>
            <Form.Control 
              type="Password" 
              placeholder="Repita el Password"
              name="password_rep" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Dirección" 
            name="dirección"
            onChange={handleClient}
            />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Ciudad" 
              name='ciudad'
              onChange={handleClient}
              />
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
