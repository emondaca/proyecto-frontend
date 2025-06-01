import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import { Image, ListGroup, Button, Container, ListGroupItem } from 'react-bootstrap'
import { CarritoContext, TokenContext } from '../context/Context'

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

  var total = 0;
  {productosCarro.map((props) => (
        total += props.count*props.price
  ))}

  /*checkout*/
  const handlePagar = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch("http://localhost:5000/api/checkouts", {
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
    };
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
        <Button variant="dark" className='mx-3 mb-3' disabled = {!tokenPresente} onClick={ handlePagar }>Pagar</Button>
        <h3>{ tokenPresente ? "" : "Se requiere autenticación para realizar la compra"} </h3>
        </Container>
            </>
    )
}

export default Carrito