import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import app from '../../firebase/firebase.config';


const Register = () => {
    const [email, setEmail] = useState();
    const auth = getAuth(app)

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error =>{
            console.error(error) 
        } )
        
    }

    const handleEmailChange = (event) => {
            // console.log(event.target.value)
            setEmail(event.target.value)
    }
    
    const handlePasswordBlur = (event) => {
           
            // console.log(event.target.value);
    }
    
    

    return (
        <Card style={{ width: '20rem', float: 'right' }}>
        <Card.Body>
        <Card.Title style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', color: '#007bff'}}>Please Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Label style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem', fontSize: '1rem', color: '#007bff', transition: 'color 0.2s ease-in-out' }}
  onMouseEnter={(e) => e.target.style.color = '#6c757d'}
  onMouseLeave={(e) => e.target.style.color = '#007bff'}
>
  Email address
</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Label style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem', fontSize: '1rem', color: '#007bff', transition: 'color 0.2s ease-in-out' }}
  onMouseEnter={(e) => e.target.style.color = '#6c757d'}
  onMouseLeave={(e) => e.target.style.color = '#007bff'}
>
  Email address
</Form.Label>
            <Form.Control type="password" placeholder="Password should be more than 6 characters" onBlur={handlePasswordBlur} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>
  Register
</Button>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button variant="light" style={{ margin: '.5rem' }}>
    <FaGoogle style={{ marginRight: '.5rem' }} />
    Register with Google
  </Button>
  <Button variant="light" style={{ margin: '.5rem' }}>
    <FaGithub style={{ marginRight: '.5rem' }} />
    Register with GitHub
  </Button>
  <Button variant="light" style={{ margin: '.5rem' }}>
    <FaTwitter style={{ marginRight: '.5rem' }} />
    Register with Twitter
  </Button>
  <Button variant="light" style={{ margin: '.5rem' }}>
    <FaLinkedin style={{ marginRight: '.5rem' }} />
    Register with LinkedIn
  </Button>
</div>

          </Form>
        </Card.Body>
      </Card>
    );
};

export default Register;