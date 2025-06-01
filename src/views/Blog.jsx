import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Image } from 'react-bootstrap'

const Blog = () => {


    return(
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="justify-center">
                        <Image src='/img/trabajadores.png' />
                        <h1> Pagina en desarrollo</h1>
                        <h2>Pronto tendremos aquí los mejores tips de manualidades, arte, y vida sana de nuestros colaboradores y nuestros usuarios</h2>
                    </Col>
                </Row>
            </Container>

        </>

    )
}

export default Blog