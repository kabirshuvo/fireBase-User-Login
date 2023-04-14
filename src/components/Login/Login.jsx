import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
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
        </div>
    );
};

export default Login;