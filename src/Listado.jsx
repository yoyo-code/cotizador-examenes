import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

const Listado = (props) => {
    const handleChange = (index, value) => {
        const updatedExams = [...props.selectedExams];
        updatedExams[index].cantidad = value;
        props.setSelectedExams(updatedExams);
    };
    
    const handleDeleteClick = (index) => {
        props.selectedExams.splice(index,1)
        props.setSelectedExams([...props.selectedExams])
    }

    const totalFinal = props.selectedExams.map((exam) => exam.Valor * exam.cantidad).reduce((acc, val) => acc + val, 0);

    return ( 
        <TableContainer component={Paper}>
        <Table size="small" >
          <TableHead >
            <TableRow >
              <TableCell sx={{ fontWeight:"bold" }}>Código</TableCell>
              <TableCell sx={{ fontWeight:"bold" }}>Examen</TableCell>
              <TableCell sx={{ fontWeight:"bold" }}>Valor</TableCell>
              <TableCell sx={{ fontWeight:"bold" }}>Cantidad</TableCell>
              <TableCell sx={{ fontWeight:"bold" }}>Total</TableCell>
              <TableCell sx={{ fontWeight:"bold" }}>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.selectedExams.map((exam, i) => (
              <TableRow key={i}>
                <TableCell>{exam.Codigo}</TableCell>
                <TableCell>{exam.Examen}</TableCell>
                <TableCell>$ {exam.Valor}</TableCell>
                <TableCell >
                    <FormControl size="small" variant="standard" sx={{ m: 1 }}>
                        <Select
                            value={exam.cantidad}
                            onChange={(event) => handleChange(i, event.target.value)}
                            label="1"
                        >
                        <MenuItem value={1}>
                            <em>1</em>
                        </MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                </TableCell>
                <TableCell>$ {exam.Valor * exam.cantidad}</TableCell>
                <TableCell>
                    <Tooltip title="Eliminar exámen" placement="top">
                        <IconButton size="small" aria-label="delete" onClick={() => handleDeleteClick(i)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell>Total final:</TableCell>
              <TableCell>$ {totalFinal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
 
export default Listado;