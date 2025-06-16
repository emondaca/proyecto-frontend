import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import productosPrueba from '../components/productosPrueba'*/;
import { Row, Col, Container } from 'react-bootstrap';
import Producto from '../components/Producto';
import { useEffect, useState } from 'react';
import { ENDPOINT } from '../config/constants';

const Tienda = () => {

    /*const productos = productosPrueba*/
  const [productos, setProductos] = useState([]);
 
  useEffect(() => {
    consultarProductos();
  }, []);

  const consultarProductos = async () => {
    
    try {
      const resp = await axios.get(ENDPOINT.tienda);
      /*const data = await resp.json();*/
      const data = resp.data;
      /*console.log(data);*/
      setProductos(data);
      console.log(productos);
    } catch (error) {
        console.error('Error:', error)
    }
  };

  
    return (
        <>
           <Container>
        <Row>
         {productos.map((props) => (
            <Col key = {props} >
                 <Producto 
                    id = {props.id}
                    imagen = {props.imagen}
                    nombre = {props.nombre}
                    descripcion1 = {props.descripcion1}
                    descripcion2 = {props.descripcion2}
                    precio = {props.precio}
                >
                </Producto>
            </Col>

        ))}
           
        </Row>
        </Container>

        </>
    )
}

export default Tienda