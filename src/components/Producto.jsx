import { useContext, useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { CarritoContext} from '../context/Context'



const Producto = (props)=> {
  const { productosCarro, setProductosCarro } = useContext(CarritoContext)

  const [id, setId] =useState();
  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();
  const [descripcion1, setDescripcion1] = useState();
  const [descripcion2, setDescripcion2] = useState();
  const [precio, setPrecio] = useState();

  useEffect(() => {
    setId(props.id)
    setImagen(props.imagen);
    setNombre(props.nombre);
    setDescripcion1(props.descripcion1);
    setDescripcion2(props.descripcion2);
    setPrecio(props.precio)
  }, []);

  const navigate = useNavigate();
  
  const handleAgregar = () => {
    var indexOfProducto = productosCarro.map(producto => producto.id).indexOf(props.id);

   if (indexOfProducto  >= 0) {
      productosCarro[indexOfProducto.count++]
    }
    else {
      productosCarro.push({id: props.id, img: props.imagen, name: props.nombre, price: props.precio, count: 1});
    };
    setProductosCarro([...productosCarro])
  }


return (
    <>
     <Card >
        <Card.Img variant="top" src= {imagen} />
        <Card.Body>
          <Card.Title> <h4><strong>{nombre}</strong></h4></Card.Title>
          <Card.Text>
            <h6>{descripcion1}</h6>
          </Card.Text>
          <Card.Text className = "text-center">
              <hr></hr>
              <h4>{ descripcion2 }</h4>
              <hr></hr>
              <h2>Precio: $<span >{precio}</span></h2>
          </Card.Text>
          <Container fluid = "true">
            <Row className = "mx-4">
              <Col>
                <Card.Link><Button type= "checkbox" variant = "outline-secondary" onClick={() => navigate(`/pizza/${props.id}`)}>Ver Más 👀</Button></Card.Link>
              </Col>
              <Col className = "text-end">
                <Card.Link><Button variant="dark" onClick={() => handleAgregar()}>Añadir 🛒</Button></Card.Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>

  )
}

export default Producto