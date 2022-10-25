import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material';




// below contains our dynamic gif display that is set with a dynamic url link

const ExerciseCard = ({ exercise }) => {
  return (

    <Link
      className='exercise-card'
      to={`/exercise/${exercise.id}`}
    >

      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button sx={{ml: '21px', color: "white", background:"gold", fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {exercise.bodyPart}

        </Button>
        <Button sx={{ml: '21px', color: "white", background:"blue", fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {exercise.target}

        </Button>


      </Stack>
      <Typography ml='21px' color='black' fontWeight='bold' mt='11px' 
      pb="10px" textTransform='capitalize' fontSize='18px'>
        {exercise.name}
      </Typography> 

    </Link>

  )
}

export default ExerciseCard