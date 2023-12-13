import React, { useState } from 'react';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

function Student() {
    const navigate = useNavigate();
    const [rut, setRut] = useState('');
    const [error, setError] = useState('');

    const handleRutChange = (e) => {
        setRut(e.target.value);

        if(error){
            setError('');
        }
    };

    const handleLogin = (rut) => {
        axios.get('http://localhost:8080/students/exists/'+rut)
        .then(response => {
            const exists = response.data;
            if(exists){
                axios.put('http://localhost:8080/students/status/'+rut)
                .then(response => {
                    axios.get('http://localhost:8080/students/get_status/'+rut)
                        .then(response => {
                            const regular = response.data;
                            if(!regular){
                                localStorage.setItem('rut', rut);
                                navigate('/curriculum');
                            }else{
                                alert('Estimado estudiante, usted se encuentra eliminado de la carrera, por lo que no puede acceder a su curriculum');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });
                
            }else{
                setError('Ingrese un RUT válido')
            }
        })
        .catch(error => {
            console.log(error);
            setError('Ingrese un RUT');
        });
    };

    const handleBack = () => {
        navigate('/login'); // Cambia '/login' por la ruta correcta de tu página de login
    };

    return (
        <>
       <div style={{ 
                backgroundImage: 'url("https://assets.eldesconcierto.cl/2022/12/CSQ_2021_09_07_0001-8-1-scaled.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                overflow: 'auto',
                position: 'relative' // Añadido para posicionamiento relativo
            }}>
                <Header />
                <Container className="d-flex justify-content-center align-items-center" style={{ 
                    height: '100vh', 
                    position: 'absolute', // Añadido para posicionamiento absoluto
                    top: 0,
                    left: 0,
                    right: 0
                }}>
                    <Card style={{ width: '60rem', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}> {/* Añadido un fondo semitransparente */}
                        <Card.Body>
                            <Row>
                                <Col md={6} className="d-flex align-items-center justify-content-center">
                                    {/* colocamos la imagen en esta columna */}
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBUcO2z1AxvyR5ihrBU4HbY7qHYGbx0pHEQ&usqp=CAU"
                                        alt="Estudiantes Universitarios"
                                        style={{ maxWidth: '100%', height: 'auto' }} // Asegúrate de que la imagen se ajuste al contenedor
                                    />
                                </Col>
                                <Col md={6}>
                            <Form>
                                <Form.Group className="mb-4">
                                    <h1>RUT Estudiante</h1>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Ingrese su RUT" 
                                        value={rut} 
                                        onChange={handleRutChange}
                                        isInvalid={!!error} />
                                    <Form.Control.Feedback type="invalid">
                                        {error}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Container className="d-flex justify-content-center mt-4"> {/* Ajuste de margen superior */}
                                    <Button variant="secondary" onClick={handleBack} className="mx-3">
                                        Volver
                                    </Button>
                                    <Button variant="primary" onClick={() => handleLogin(rut)} className="mx-3">
                                        Ingresar
                                    </Button>
                                </Container>
                            </Form>
                        </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
        
    );
}

export default Student;
