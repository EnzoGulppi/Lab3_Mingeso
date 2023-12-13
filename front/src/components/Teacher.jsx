import React, { useEffect, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeaderTeacher from './HeaderTeacher';
import axios from 'axios';

function Teacher(){
    const [selectedCareer, setSelectedCareer] = useState('');

    const [careers, setCareers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/careers')
        .then(response => {
            setCareers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleSelect = (event) => {
        setSelectedCareer(event.target.value);
    };

    const navigate = useNavigate();

    const handleCareerSelection = () => {
        navigate('/enterschedules', {state: {selectedCareer}});
    };

    const handleBack = () => {
        navigate('/login'); // Cambia '/login' por la ruta correcta de tu página de login
    };

    return(
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
            <HeaderTeacher/>
        <Container className="d-flex justify-content-center align-items-center" style={{ 
            position: 'absolute', // Posición absoluta para superponer
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh', 
            width: '100vw'
        }}>
            <Container style={{ 
                width: '50rem', 
                borderRadius: '15px', 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
                padding: '20px' // Espaciado interior
            }}>
                    <h1>Departamentos de Ingenierias USACH:</h1>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>Carrera</Form.Label>
                            <Form.Select aria-label="Seleccione su carrera" onChange={handleSelect}>
                                <option>Seleccione su carrera</option>
                                {careers.map((career, index) => (
                                    <option key={index} value={career.career_name}>
                                        {career.career_name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Container className="d-flex justify-content-end">
                            <Button variant="secondary" className="me-2" onClick={handleBack}>
                                Volver
                            </Button>
                            <Button variant="primary" onClick={handleCareerSelection}>
                                Ingresar
                            </Button>
                        </Container>
                        
                    </Form>
                </Container>
            </Container>
            </div>
        </>
    );
}

export default Teacher;