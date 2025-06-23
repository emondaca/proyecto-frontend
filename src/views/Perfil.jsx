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

const initialForm = {
  nombres: '',
  apellido_paterno: '',
  apellido_materno: '',
  email: '',
  telefono: '',
  rut: '',
  fecha_nacimiento: '01/01/9999',
  password: '',
  direccion: '',
  ciudad: '',
  region: '',
  codigo_postal: ''
  
}

const Perfil = () => {
  const [client, setClient] = useState(initialForm)

  const handleClient = () => {}
  console.log(client)
  const handleForm = () => {}


  const traerPerfil = async () => {
    const token = localStorage.getItem("token")
    try {
    const resp = await axios.get(ENDPOINT.perfil, {headers: {Authorization: `Bearer ${token}`} })
      const data = resp.data.perfil
      setClient(data)
      console.log(data)
    } catch (error) {
        console.error('Error:', error)
    }
  }

  useEffect(() => {
    traerPerfil()
  }, [])

  return (
    <>
      <Stack id = 'register' className='mx-auto mt-0'>
      <Container id = "formulario" className='mx-auto my-auto'>
        <div id="form_title">
          <h1 className='mx-auto mb-0'>Tus Datos</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formGridNombres">
            <Form.Label>Nombres</Form.Label>
            <Form.Control 
              type='text'
              placeholder= {`${client.nombres}`}
              name='nombres'
              onChange={handleClient}
            />
          </Form.Group>
          
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridApellidoPaterno">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="ApellidoPaterno"
                placeholder= {`${client.apellido_paterno}`}
                name="apellido_paterno"
                onChange={handleClient} 
              /> 
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellidoMaterno">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control 
                type="apellido_materno"
                placeholder={`${client.apellido_materno}`}
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
                placeholder={`${client.email}`} 
                name= "email"
                onChange={handleClient}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTlelefono">
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control 
              type="Teléfono" 
              placeholder={`${client.telefono}`}
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
                placeholder={`${client.rut}`}
                name="rut"
                onChange={handleClient}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFechaNacimiento">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control 
                type="date" 
                placeholder={`${client.fecha_nacimiento}`}
                name="fecha_nacimiento" 
              />
            </Form.Group>
          </Row>

          
        </Form>
      </Container>
      </Stack>
    </>
  );
}

export default Perfil
