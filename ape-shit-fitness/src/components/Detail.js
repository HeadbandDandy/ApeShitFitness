import React from 'react'
import { Typography, Stack, Button } from '@mui/material'


// bellow contains the images for body sections, target parts, and equipment
import SectionImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ( { exerciseDetail } ) => {
  // destructured element below

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: SectionImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]


  return (
    <Stack gap='40px' sx={{flexDirection: { lg: 'row'}, p: '20px', alignItems:
    'center'}}>
      
      <img src={gifUrl} alt={ name } Loading='lazy' className='detail-image' />

      <Stack sx={{gap: { lg: '35px', xs: '20px'}}}>
        <Typography variant='h4'>
          {name}
        </Typography>
        <Typography variant='h7'>
          {name} {' '} are for the savages! 
          One thing for sure! Doing {name} {' '}
          will target your {target}! Let's Go!



        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' gap='20px' alignItems='center'>
            <Button sx= {{background: 'white', borderRadius: '50%', width: '50px', height: '50px'}}>

              <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}}/>

            </Button>

            <Typography textTransform='capitalize' variant="h6">
              {item.name}
            </Typography>


          </Stack>
        ))}


      </Stack>
      
    </Stack>
  )
}

export default Detail