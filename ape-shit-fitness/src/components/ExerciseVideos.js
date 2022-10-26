import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {

// below contains an if statement for if no videos are found
if(!exerciseVideos.length) return 'Loading...'



  return (
    <Box sx={{marginTop: {lg: '220px', xs: '30px'}}} p='20px'>
      <Typography variant='h4' mb='25px'>
      Check out these videos to learn how to do <span style={{color: 'gold'}}> {name} </span>
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' 
      sx={{
        flexDirection: {lg: 'row'},
        gap: {lg: '110px', xs: '0'}
      }}
      // below contains the array of videos...max of 4 per exercise
      >
        {exerciseVideos?.slice(0,4).map((item, index) => (
          <a
          key={index}
          className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          >

          {/* below gets Image for thumbnail from Rapid API */}
          <img src={item.video.thumbnails[0].url} alt={item.video.title} />

          </a>
        ))}
       
      </Stack>

    </Box>
  )
}

export default ExerciseVideos