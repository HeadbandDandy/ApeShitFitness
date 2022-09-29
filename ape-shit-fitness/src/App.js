// this page will contain all the necessary content needed to run and display the application



import React from 'react'

//modules below import routes/router for react
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';


//below imports the stylsheet
import './App.css'

//below imports components and pages to display  in DOM
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//below contains the application export
//within the application export holds the NavBar

export const App = () => {
  return (
    //   below also ensures that application is responsive on large screen devices
    <Box width ='400px' sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
         {/* below contains route paths needed for API's */}
        <Route path='/' element={<Home />} />
        <Route path='/exercise/id:' element={<ExerciseDetail />} />

        </Routes>
        <Footer/>
        </Box>
  )
}


export default App