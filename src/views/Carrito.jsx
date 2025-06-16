import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import { Image, ListGroup, Button, Container, ListGroupItem, Row, Col } from 'react-bootstrap'
import { CarritoContext, TokenContext } from '../context/Context'
import { ENDPOINT } from '../config/constants'
import axios from 'axios'

const Carrito = () => {
  const {productosCarro, setProductosCarro} = useContext(CarritoContext);
  const {tokenPresente} = useContext(TokenContext)

  const handleAgregar = (indice) => {
    productosCarro[indice].count++;
    setProductosCarro([...productosCarro]);
  }

  const handleQuitar = (indice) => {
    productosCarro[indice].count--;
    setProductosCarro([...productosCarro.filter((producto) => producto.count > 0)]);
  }

  const handleGuardarCarrito = async () => {
    const token = localStorage.getItem('token');
    const carrito = productosCarro.map(prod => {
      return {
        id: prod.id,
        cantidad: prod.count
      }
    })
    await axios.post(ENDPOINT.carrito, carrito ,{headers: {Authorization: `Bearer ${token}`} });
  }

  var total = 0;
    {productosCarro.map((prod) => ( total += prod.count*prod.price))}


  /*checkout*/
  const handlePagar = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    /*if (token) {
      const response = await fetch("http://localhost:3000/api/checkouts", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
          productosCarro,
          }),
      });
      const data = await response.json();
      if (data.message == "Checkout successful") {
        alert(data.user.email + ":     " + "Su compra ha sido exitosa");
      } else {
        alert("Ha ocurrido un error, intente de nuevo en unos minutos");
      }
    };*/
  };

    return (
        <>
            <Container className='mt-5'>
              <h3 className='mx-3'>Detalles del Pedido:</h3>

              {productosCarro.map((producto, indice) => (
                  <ListGroup key={indice} horizontal className='my-2 w-50 align-items-center border-0'>
                  <ListGroup.Item className='border-0 w-50'>
                      <Image src= { producto.img} className='h-25 w-100'></Image></ListGroup.Item>
                  <ListGroup.Item className='border-0 w-100'><h4>{producto.name}</h4></ListGroup.Item>
                  <ListGroup.Item className='border-0 w-25'><h4>${producto.price}</h4></ListGroup.Item>
                  <ListGroup.Item className='border-0'><Button variant="outline-danger" onClick={() => handleQuitar(indice)}><h1>-</h1></Button></ListGroup.Item>
                  <ListGroupItem className='border-0'><h4>{producto.count}</h4></ListGroupItem>
                  <ListGroup.Item className='border-0'><Button variant="outline-info" onClick={() => handleAgregar(indice)}><h1>+</h1></Button></ListGroup.Item>
                  </ListGroup>
              ))}

              <h2 className='mx-3 my-4'><b>Total: ${total}</b></h2>
              <Row>
                <Col>
                  <Button variant="dark" className='mx-3 mb-3' disabled = {!tokenPresente} onClick={ handlePagar }>Pagar</Button>
                  <h4>{ tokenPresente ? "" : "Se requiere autenticación para realizar la compra"} </h4>
                </Col>
                <Col>
                  <Button variant="dark" className='mx-3 mb-3' disabled = {!tokenPresente} onClick={() => handleGuardarCarrito(productosCarro) }>Guardar Carrito</Button>
                  <h4>{ tokenPresente ? "" : "Se requiere autenticación para guardar carrito"} </h4>
                </Col>
              </Row>
              </Container>
            </>
    )
}

export default Carrito
