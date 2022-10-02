import React, {useState, useEffect}  from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
// Below will use the state to allow actions

const [search, setSearch] = useState('')


const handleSearch = async () => {
    if(search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

        console.log(exercisesData)
    }
}


    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
          <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            These Exercises Are <br /> For Your Inner Beast 
          </Typography>
          <Box position="relative" mb="72px">
            <TextField
              height="76px"
              sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '6px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '90px' }}
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Browse Exercises!"
              type="text"
            />
            <Button className="search-btn" sx={{ bgcolor: '#02295B', color: '#02295BA1', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' }, onClick:{handleSearch}}}>
              Search
            </Button>
          </Box>
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            {/* <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
          </Box>
        </Stack>
      );
    };
    

export default SearchExercises