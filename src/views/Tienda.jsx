import 'bootstrap/dist/css/bootstrap.min.css'
import productosPrueba from '../components/productosPrueba'
import { Row, Col, Container } from 'react-bootstrap'
import Producto from '../components/Producto'

const Tienda = () => {

    const productos = productosPrueba
  /* const [pizzas, setPizzas] = useState([]);
 
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const resp = await fetch('http://localhost:5000/api/pizzas');
    const data = await resp.json();
    setPizzas(data);
    setPizzass(data);
  }; */

  
    return (
        <>
           <Container>
        <Row>
         {productos.map((props) => (
            <Col key = {props} >
                 <Producto 
                    id = {props.id}
                    imagen = {props.img}
                    nombre = {props.name}
                    descripcion1 = {props.desc01}
                    descripcion2 = {props.desc02}
                    precio = {props.price}
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