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

const RoutineDetails = () => {
  const router = useRouter();
  const routine = {
    workout: [
      {
        id: 1,
        name: 'press banca',
        description: 'to fuerte',
        image: '',
        muscles: ['Pecho', 'Hombros'],
        workoutSettings: [
          {
            name: 'kgs',
            value: 80,
          },
          {
            name: 'reps',
            value: 10,
          },
        ],
      },
      {
        id: 2,
        name: 'sentadilla',
        description: 'piernas gucci',
        image: '',
        muscles: ['Glúteos', 'Abductores', 'Adcutores'],
        workoutSettings: [
          {
            name: 'kgs',
            value: 100,
          },
          {
            name: 'reps',
            value: 20,
          },
        ],
      },
    ],
  };
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
            {routine.workout.map((workout) => (
              <TableRow
                key={workout.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {workout.name}
                </TableCell>
                <TableCell align="left">{workout.description}</TableCell>
                <TableCell align="left">{workout.muscles.map((muscle) => `${muscle} `)}</TableCell>
                <TableCell align="left">
                  {workout.workoutSettings.map(
                    (workoutSetting) => `${workoutSetting.value}${workoutSetting.name} `
                  )}
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
