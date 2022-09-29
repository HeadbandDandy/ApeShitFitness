import React from 'react'


//below adds styling...typography add styling to 
import { Box, Stack, Typography, Button } from '@mui/material';
import { fontSize } from '@mui/system';
import '../App.css';
import HeroBannerImage from '../assets/images/gorilla-clipart-strong-16.png'



const HeroBanner = () => {
  return (
    <Box
    sx={{mt:{lg:'212px', xs:'70px'},
    ml: {sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color='blue' fontWeight={'600'} fontSize='26px'>

        Welcome to the Ape Club

        </Typography>
        <Typography className="ape-shit"
        fontWeight={800}>
            Get Ready to go <br/> Ape S%@#!
        </Typography>
        <Typography fontSize={'22px'}>
            Ready to OPTIMIZE your build? <br/> Do as the Apes Do!
        </Typography>
        <Button variant='contained' color='primary'
        href='#exercises'>
        Check Out These Exercises!
        </Button>
        <img src={HeroBannerImage} alt='banner'
        className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner