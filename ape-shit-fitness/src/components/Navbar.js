// NavBar...self explanatory add and subtract as needed





import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


//below contains the ape logo
import Logo from '../assets/images/ape-png-1.png'

const Navbar = () => {
  return (
    <Stack 
    direction='row'
    justifyContent={'space-around'}
    sx={{gap: {sm:'122px', xs:'40px'}, mt: {sm:'32px', xs:'20px'}, justifyContent:'none'}} px='20px'>
        <Link to='/'>
        <img src={Logo} alt='logo' style={{width: '100px', height: '100px', margin: '0 20px'}}/>
        </Link>
        <Stack
        direction = 'row'
        gap='40px'
        fontSize={'24px'}
        alignItems='flex-end'>
            {/* Text decorations below, !copy and paste to keep formatting similar! */}
            <Link to ='/' style={{textDecoration:'none', color:'blue'}}>Home</Link> 
            <a href='#exercises' style={{
                textDecoration: 'none', color: 'gold'
            }}>Exercises</a>
        </Stack>
    </Stack>
    
  )
}

export default Navbar