import { Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const AddRoutineForm = () => {
  const [newRoutineName, setNewRoutineName] = useState('');
  const [newRoutineWorkout1, setNewRoutineWorkout1] = useState('');
  const [newRoutineSettings1, setNewRoutineSettings1] = useState('');
  const [newRoutineWorkout2, setNewRoutineWorkout2] = useState('');
  const [newRoutineSettings2, setNewRoutineSettings2] = useState('');

  const workouts = [
    { label: 'Press de banca', muscle: 'Pectoral' },
    { label: 'Sentadillas', muscle: 'Pierna' },
    { label: 'Jalón al pecho', muscle: 'Espalda' },
    { label: 'Curl de biceps', muscle: 'Biceps' },
    { label: 'Abdominales', muscle: 'Abdominales' },
    { label: 'Press americano', muscle: 'Hombros' },
    { label: 'Extensión de triceps', muscle: 'Triceps' },
  ];

  const createRoutine = () => {
    const newRoutine = {
      routine: {
        id: crypto.randomUUID(),
        name: newRoutineName,
        workouts: [
          {
            id: crypto.randomUUID(),
            name: newRoutineWorkout1,
            description: '-',
            muscles: [
              {
                name: workouts.find((w) => w.label === newRoutineWorkout1)?.muscle,
              },
            ],
            settings: [
              {
                name: newRoutineSettings1,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: newRoutineWorkout2,
            description: '-',
            muscles: [
              {
                name: workouts.find((w) => w.label === newRoutineWorkout2)?.muscle,
              },
            ],
            settings: [
              {
                name: newRoutineSettings2,
              },
            ],
          },
        ],
      },
    };
    const postRoutine = async () => {
      const res = await fetch(`https://workoutly-api.aulasoftwarelibre.uco.es/routine`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newRoutine),
      });
      const data = await res.json();
    };
    postRoutine();
  };

  return (
    <Accordion sx={{ m: 4 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontWeight: 'bold' }}>Añadir rutina</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}>
        <Grid container justifyContent={'center'}>
          <Grid container justifyContent={'center'} item xs={12} sm={6} md={3}>
            <TextField
              id="name"
              label="Nombre"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineName(e.target.value)}
            />
          </Grid>
        </Grid>
        <hr />
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <TextField
              id="workout1"
              label="Ejercicio"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineWorkout1(e.target.value)}
            />
            <TextField
              id="settings1"
              label="Ajustes"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineSettings1(e.target.value)}
            />
          </Grid>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <TextField
              id="workout2"
              label="Ejercicio"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineWorkout2(e.target.value)}
            />
            <TextField
              id="settings2"
              label="Ajustes"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineSettings2(e.target.value)}
            />
          </Grid>
        </Grid>
        <div className={styles.saveRoutineButton}>
          <Button variant="contained" onClick={createRoutine}>
            Crear rutina
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddRoutineForm;
