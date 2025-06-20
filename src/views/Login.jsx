import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CarritoContext, TokenContext } from '../context/Context'
import { ENDPOINT } from '../config/constants.js'
import { useContext } from 'react'
import { ClientContext } from '../context/Context'
import axios from 'axios';

const Login = () => {
  
  const { email, setEmail, password, setPassword } = useContext(ClientContext)
  const { setTokenPresente } = useContext(TokenContext) 
  const { setProductosCarro } = useContext(CarritoContext)
  
  /* Login */
  
      const getToken = async (e) => {
          e.preventDefault()
          const response = await fetch(ENDPOINT.login, {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },

              body: JSON.stringify({
              email,
              password,
              }),
          })
          const data = await response.json()
          alert(data?.error || data.message);
          localStorage.setItem("token", data.token);
          const token = localStorage.getItem("token")
          setTokenPresente((token != 'null') ? true : false)

          if (token) {
            try {
            const resp = await axios.get(ENDPOINT.carrito, {headers: {Authorization: `Bearer ${token}`} })
            const data = resp.data
            setProductosCarro(data)
            } catch (error) {
              console.log('Error:', error)
            }
          }
      }

  return (
    <Form className = "mb-5">
      <h1 className= "mb-3 mx-5"><b>Login</b></h1>
      <Form.Group className="mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <input type="email" placeholder="Enter your email" id = 'email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input type="password" placeholder="Enter your password" 
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit" onClick = {getToken}>
        Login
      </Button>
    </Form>
  )
}

export default Login