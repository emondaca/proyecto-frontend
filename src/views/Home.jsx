import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Image } from 'react-bootstrap'
import '../assets/css/Home.css'


const Home = () => {

    return (
        <>
            
            <Container id = "home">
                <Row>
                    <Col>
                        <Image id="logo" src="/img/logo.jpg" fluid/>
                   </Col>
                </Row>
                
              
            </Container>
        </>
    )
}

export default Home