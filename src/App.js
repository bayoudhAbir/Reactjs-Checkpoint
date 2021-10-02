import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Container, Navbar, Nav, Form, FormGroup,FormCheck,FormLabel, Button,Row,Col} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>Welcome To Pizza House</h1>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#nosspecialite">Nos specialité</Nav.Link>
        <Nav.Link href="#Menujour">Menu de jour</Nav.Link>
        <Nav.Link href="#Nosplats">Nos plats</Nav.Link>
      </Nav>
      </Container>
    </Navbar>      
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://static.wixstatic.com/media/11062b_ca99c4551db74d8d8649d44de60e0de4~mv2.jpg/v1/fill/w_640,h_368,al_c,q_80,usm_0.66_1.00_0.01/11062b_ca99c4551db74d8d8649d44de60e0de4~mv2.webp"
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Pizza 4 frommage</h3>
          <p>Sauce crémée, sauce tomate, mozzarella, chèvre, gorgonzola, grana ....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQEnjXnZ3y2iVg/company-background_10000/0/1578513809188?e=2159024400&v=beta&t=WcsFNzmmbalIlcgkwJrbSY1KLdNIxpRlfs1vCvjpR28"
          alt="Second slide"
        />

        <Carousel.Caption className="caption">
          
          <h3>Pizza au champignon</h3>
          <p>Sauce crémée, sauce tomate, mozzarella, chèvre, champignon, lègume.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://catering.symphony.tn/wp-content/uploads/2021/07/PIZZA-FRUIT-DE-MER.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3>Pizza au fruit de mer</h3>
          <p>Sauce crémée, sauce tomate, mozzarella, crevette, moulle, calamar, cerevette royale</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>
          <Col>
            <Form>
              <h2>Inscrez-vous</h2>
             <Form.Group className="mb-3">
                <Form.Label> First Name</Form.Label>
                <Form.Control placeholder="First name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last name" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Envoyez
              </Button>
            </Form>
          </Col>
          <Col> 
              <Form>
              <h2>Avis Clients</h2>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />                
                </Form.Group>

              <div className="mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Etes-vous satisfait?</Form.Label>
                   <div>
                    <Form.Check
                      inline
                      label="Non"
                      name="group1"
                      type={'radio'}
                      
                    />                
                    <Form.Check
                      inline
                      label="oui"
                      name="group1"
                      type={'radio'}
                      
                    />
                    </div>
                </Form.Group>
                                    
                </div>
                <Button variant="primary" type="submit">
                  Envoyez
                </Button>
              </Form>
          </Col>
        </Row>
    </Container>
  </div>
  );
}

export default App;
