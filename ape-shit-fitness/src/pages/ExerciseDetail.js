import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

//below imports utilities

import { exerciseOptions, fetchData } from '../utils/fetchData';


//below imports Components needed for detail section
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const { id } = useParams()

// below recalls function everytime the ID changes
useEffect(() => {
  const fetchExercisesData = async () => {
    const exerciseDBUrl = 'https://exercise.db.p.rapiapi.com';

    const youTubeUrl = 'https://youtube-search-and-download.p.rapidpi.com';

    const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,
    exerciseOptions);

    setExerciseDetail(exerciseDetailData)


    //below is the api call for Youtube videos
    const vidOptionsData = await fetchData(`${youTubeUrl}/search?q=${exerciseDetailData.name}`, exerciseOptions)
    setExerciseVideos(vidOptionsData)
  }

  fetchExercisesData();
}, [id])



  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail