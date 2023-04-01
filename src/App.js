import Barra from './barra.jsx'
import Listado from './Listado'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Pdf from './pdf'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
 
const App = () => {
  const [selectedExams, setSelectedExams] = useState([]);

  const handleSelectedExam = (x) => {
    setSelectedExams([...selectedExams, x]);
  }

  return ( 
    <Box sx={{ maxWidth: 'md' }}>
      <Barra handleSelectedExam={handleSelectedExam}/>
      <Divider sx={{m:2}} variant="middle" />
      <Listado selectedExams={selectedExams} setSelectedExams={setSelectedExams}/>
      <Grid container alignItems="right" direction="row" justifyContent="right">
        <Typography variant="caption" display="block" gutterBottom sx={{color: "gray"}}>
          by <Link href="https://gcabrera.cl/" target="_blank" underline="hover" sx={{color: "gray"}}>Giorgio Cabrera</Link>
        </Typography>
      </Grid>
      <Pdf selectedExams={selectedExams}/>
    </Box>
   );
}


 
export default App;
