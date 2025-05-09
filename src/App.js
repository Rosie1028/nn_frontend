import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BootstrapTextarea from './BootstrapTextArea';
import Footer from './components/Footer';
 
function App() {
  return (
    <div className="App">
      <Container fluid>
        <br/>
        <Row>
          <Col sm="2">
          </Col>
          <Col sm="6">
           <h2 className='App-header'>Sumarizador de noticias &#127464;&#127482;</h2>
          </Col>
          
        </Row>
        <br/>
        <Row>
        <Col sm="2">
        </Col>
        <Col>
        <BootstrapTextarea/>
        
        </Col>
        <Col sm="2">
        </Col>
        </Row>
        <br/><br/><br/>
        <Row>
          <Footer/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
