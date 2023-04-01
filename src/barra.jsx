import { useState } from 'react'
import Datos from './EXAMENES.json'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Barra = (props) => {
    const [selectedExam, setSelectedExam] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleClick = () => {
        if (selectedExam) {
          props.handleSelectedExam(selectedExam);
        } else {
          setSnackbarOpen(true);
        }
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    }
 
    const items = Datos.map((x, index) => ({
        id: index,
        cantidad: 1,
        ...x
    }));

    return ( 
        <Box >
            <Grid container spacing={2}>
            <Grid xs={8} md={10}>
                <Autocomplete
                    size="small"
                    value={selectedExam || null}
                    onChange={(event: any, newValue: any) => {
                        setSelectedExam(newValue);
                    }}
                    selectOnFocus
                    blurOnSelect
                    options={items}
                    getOptionLabel={(option) => option.Codigo + ' - ' + option.Examen }
                    renderInput={(params) => <TextField {...params} label="Buscador de exámenes" />}
                    noOptionsText="Sin resultados"
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleClick();
                        }
                    }}
                    openText="Abrir"
                    clearText="Borrar"
                    closeText="Cerrar"
                    clearOnEscape={true}
                />
            </Grid>
            <Grid xs={4} md={2}>
                <Fab variant="extended" color="primary" aria-label="add" sx={{height: '40px', boxShadow:0}} onClick={handleClick}>
                <AddIcon sx={{ mr: 1 }}/> Agregar
                </Fab>
            </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                message="Seleccione examen primero"
                action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
                }
            />
        </Box>
    );
}
 
export default Barra;
