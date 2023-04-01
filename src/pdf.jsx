import React, {Fragment, useRef} from "react";
import ReactToPrint from 'react-to-print';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import PrintIcon from '@mui/icons-material/Print';

class ComponentToPrint extends React.Component {
    render() {    
    const totalFinal = this.props.selectedExams.map((exam) => exam.Valor * exam.cantidad).reduce((acc, val) => acc + val, 0);

      return (
          <TableContainer>
            <Grid sx={{textAlign: "center", margin: "25px"}}><h1>Cotización</h1></Grid>
            <Table size="small" >
            <TableHead >
                <TableRow >
                <TableCell sx={{ fontWeight:"bold" }}>Código</TableCell>
                <TableCell sx={{ fontWeight:"bold" }}>Examen</TableCell>
                <TableCell sx={{ fontWeight:"bold" }}>Valor</TableCell>
                <TableCell sx={{ fontWeight:"bold" }}>Cantidad</TableCell>
                <TableCell sx={{ fontWeight:"bold" }}>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.selectedExams.map((exam, i) => (
                <TableRow key={i}>
                    <TableCell>{exam.Codigo}</TableCell>
                    <TableCell>{exam.Examen}</TableCell>
                    <TableCell>$ {exam.Valor}</TableCell>
                    <TableCell >{exam.cantidad}</TableCell>
                    <TableCell>$ {exam.Valor * exam.cantidad}</TableCell>
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
}

const Pdf = (props) => {
    const componentRef = useRef();

    return (
        <Fragment>
          {props.selectedExams.length > 0 && (
          <ReactToPrint
            trigger={() => (
              <Grid container alignItems="center" direction="row" justifyContent="center">
                <Fab variant="extended" color="primary" aria-label="add" sx={{height: '40px', boxShadow:0, m:2}} >
                  <PrintIcon sx={{ mr: 1 }}/>Imprimir
                </Fab>
              </Grid>
            )}
            content={() => componentRef.current}
          />
          )}
          <div style={{display: 'none'}}>
              <ComponentToPrint selectedExams={props.selectedExams} ref={componentRef} />
          </div>
        </Fragment>
    );
};


export default Pdf;