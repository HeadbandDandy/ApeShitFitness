import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/gorilla-clipart-strong-16.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', margin: '0px 10px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Raleway"
      fontSize="40px"
      alignItems="flex-start"
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'gold', borderBottom: '3px solid navy' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'gold' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;