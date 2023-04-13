import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', gap:'1rem'}}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Log In</NavLink>
            <NavLink to={'/register'}>Register</NavLink>

        </div>
    );
};

export default Header;