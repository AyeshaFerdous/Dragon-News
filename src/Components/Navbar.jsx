import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
             
              <div>
              <img src={userIcon} alt="" />
              </div>
              <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
              </div>
            
        </div>
    );
};

export default Navbar;