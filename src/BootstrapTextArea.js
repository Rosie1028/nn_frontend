import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SummaryBox from './SummaryBox'
import { Spinner } from 'react-bootstrap';
import axios from 'axios'
import './App.css';
 
 export default function BootstrapTextArea(){
    const [article, setArticle] = useState(null)
    const [result, setResult] = useState(null)

   
    const handleClick = async () => {
         try{
            setResult('Model is loading...')
             const response = await axios({
                 method: 'post',
                 url: 'http://127.0.0.1:8000/',
                 headers: {
                     "Content-type": "application/json"},
                 data: {
                    new:article,    
                    }
                });
                let result = response.data
                console.log(result)
                setResult(result)
               
            }catch(e){
                console.log(e)
            }
    }


    const handleArticleChange = event =>{
        setArticle(event.target.value);
        console.log(event.target.value)
        setResult(null)
    }

        return( 
                <Form>
                    <Row>
                    <Form.Group className="mb-3" controlId="textAreaGroup">
                        <Form.Control as="textarea" rows={15} name="input_new" onChange={handleArticleChange} spellCheck="false" 
                        placeholder="Empieza escribiendo o pega tu noticia aquí" />
                    </Form.Group>
                    </Row>
                    <Row>
                        <Col sm="1">
                         <Button className="summarize" variant="primary" type="button" size="md" onClick={handleClick}  active>
                           Resumir
                         </Button>
                        </Col>
                        <Col sm="2">
                         <Button className="delete" variant="primary" type="button" size="md" active>
                           Eliminar todo
                         </Button>
                        </Col>
                    
                    
                        
                    </Row>
               
                <p className="alert alert-success mt-4" id="summarize" placeholder='El resumen se mostrará aquí'>{result}</p>
                </Form>
        ) 
}
 