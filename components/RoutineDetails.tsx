import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

  console.log(workouts);

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
      <div className={styles.saveRoutineButton}>
        <Button variant="contained">Guardar rutina</Button>
      </div>
    </>
  );
};

export default RoutineDetails;
