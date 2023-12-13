import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function LoginPage() {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        if (role === 'estudiante') {
            navigate('/estudiante'); // Asegúrate de tener esta ruta configurada en tu enrutador
        } else {
            navigate('/docente');
        }
    };

    return (
        <>
        <div style={{ 
        backgroundImage: 'url("https://assets.eldesconcierto.cl/2022/12/CSQ_2021_09_07_0001-8-1-scaled.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'auto'
    }}>
        <Header />
        <h1 className='d-flex justify-content-center align-items-center' style={{ 
            height: '30vh', 
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
        }}>
            Seleccione como desea ingresar
        </h1>
        <Container className="d-flex justify-content-around align-items-center" style={{ height: '40vh' }}> {/* Ajustado para flexbox horizontal */}
            <Card style={{ width: '25rem', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' , padding: '10px'}}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7NKtp5Pg2X10leilJoRA1eO5Vfq1p-MnfQ&usqp=CAU" /> {/* Reemplaza con la URL de la imagen para Docente */}
                <Card.Body>
                    <Card.Title>Docente Universitario</Card.Title>
                    <Button variant="secondary" onClick={() => handleRoleSelection('docente')}>
                        Seleccionar
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '25rem', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>
                <Card.Img variant="top" src="https://previews.123rf.com/images/nonwarit/nonwarit1606/nonwarit160600320/58489693-los-amigos-y-la-educaci%C3%B3n-el-grupo-de-estudiantes-universitarios-estudiando.jpg" /> {/* Reemplaza con la URL de la imagen para Estudiante */}
                <Card.Body>
                    <Card.Title>Estudiante Universitario</Card.Title>
                    <Button variant="primary" onClick={() => handleRoleSelection('estudiante')}>
                        Seleccionar
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
            
        </>
    );
}

export default LoginPage;
