import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Autocomplete from '@mui/material/Autocomplete';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { flexbox } from '@mui/system';

const RoutineDetails = () => {
  const router = useRouter();
  const [workouts, setWorkouts] = useState<any[]>();

  useEffect(() => {
    const getWorkouts = async () => {
      const res = await fetch(`http://localhost:3333/workout`, {
        method: 'GET',
      });
      const data = await res.json();
      setWorkouts(data);
    };
    getWorkouts();
  }, []);

  const existingWorkouts = [
    { label: 'Press banca' },
    { label: 'Sentadilla' },
    { label: 'Press americano' },
    { label: 'Jalón al pecho' },
    { label: 'Abdominales' },
    { label: 'Curl biceps' },
  ];

  return (
    <>
      <div className={styles.goBack}>
        <Button
          startIcon={<ArrowBackIosIcon />}
          variant="contained"
          onClick={() => router.push('/routines')}
        >
          Volver
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="left">Descripción</TableCell>
              <TableCell align="left">Músculos</TableCell>
              <TableCell align="left">Ajustes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workouts?.map((workout) => (
              <TableRow
                key={workout._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {workout._name}
                </TableCell>
                <TableCell align="left">{workout._description}</TableCell>
                <TableCell align="left">
                  {workout._muscles.map((muscle) => `${muscle.name} `)}
                </TableCell>
                <TableCell align="left">
                  {workout._settings.map((setting) => `${setting._value}${setting._name} `)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: 'bold' }}>Añadir ejercicio</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}>
          <Autocomplete
            disablePortal
            id="workout"
            options={existingWorkouts}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Ejercicio" />}
          />
          <TextField id="settings" label="Ajustes" variant="outlined" color="primary" />
          <div className={styles.saveRoutineButton}>
            <Button variant="contained">Añadir ejercicio a la rutina</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default RoutineDetails;
