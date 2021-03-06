import { Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const AddRoutineForm = () => {
  const [newRoutineName, setNewRoutineName] = useState('');
  const [newRoutineSettings1, setNewRoutineSettings1] = useState('');
  const [newRoutineSettings2, setNewRoutineSettings2] = useState('');
  const [newRoutineSettings3, setNewRoutineSettings3] = useState('');
  const [newRoutineSettings4, setNewRoutineSettings4] = useState('');
  const [newRoutineDescription1, setNewRoutineDescription1] = useState('');
  const [newRoutineDescription2, setNewRoutineDescription2] = useState('');
  const [newRoutineDescription3, setNewRoutineDescription3] = useState('');
  const [newRoutineDescription4, setNewRoutineDescription4] = useState('');

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
    const newRoutineWorkout1 = document.getElementById('workout1')!.value;
    const newRoutineWorkout2 = document.getElementById('workout2')!.value;
    const newRoutineWorkout3 = document.getElementById('workout3')!.value;
    const newRoutineWorkout4 = document.getElementById('workout4')!.value;
    const newRoutine = {
      routine: {
        id: crypto.randomUUID(),
        name: newRoutineName,
        workouts: [
          {
            id: crypto.randomUUID(),
            name: newRoutineWorkout1,
            description: newRoutineDescription1,
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
            description: newRoutineDescription2,
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
          {
            id: crypto.randomUUID(),
            name: newRoutineWorkout3,
            description: newRoutineDescription3,
            muscles: [
              {
                name: workouts.find((w) => w.label === newRoutineWorkout3)?.muscle,
              },
            ],
            settings: [
              {
                name: newRoutineSettings3,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: newRoutineWorkout4,
            description: newRoutineDescription4,
            muscles: [
              {
                name: workouts.find((w) => w.label === newRoutineWorkout4)?.muscle,
              },
            ],
            settings: [
              {
                name: newRoutineSettings4,
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
      const data = await res.text();
      return data;
    };
    postRoutine();
  };

  return (
    <Accordion sx={{ mr: 0, ml: 0, mt: 4 }}>
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
            <Autocomplete
              disablePortal
              id="workout1"
              options={workouts}
              sx={{ width: 260 }}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField
              id="description1"
              label="Descripción"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineDescription1(e.target.value)}
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
            <Autocomplete
              disablePortal
              id="workout2"
              options={workouts}
              sx={{ width: 260 }}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField
              id="description2"
              label="Descripción"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineDescription2(e.target.value)}
            />
            <TextField
              id="settings2"
              label="Ajustes"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineSettings2(e.target.value)}
            />
          </Grid>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <Autocomplete
              disablePortal
              id="workout3"
              options={workouts}
              sx={{ width: 260 }}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField
              id="description3"
              label="Descripción"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineDescription3(e.target.value)}
            />
            <TextField
              id="settings3"
              label="Ajustes"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineSettings3(e.target.value)}
            />
          </Grid>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <Autocomplete
              disablePortal
              id="workout4"
              options={workouts}
              sx={{ width: 260 }}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField
              id="description4"
              label="Descripción"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineDescription4(e.target.value)}
            />
            <TextField
              id="settings4"
              label="Ajustes"
              variant="outlined"
              color="primary"
              onChange={(e) => setNewRoutineSettings4(e.target.value)}
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
