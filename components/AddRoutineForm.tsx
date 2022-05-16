import { Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';

const AddRoutineForm = () => {
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
    const newRoutineName = document.getElementById('name').value;
    const newRoutineWorkout1 = document.getElementById('workout1').value;
    const newRoutineSettings1 = document.getElementById('settings1').value;
    const newRoutineWorkout2 = document.getElementById('workout2').value;
    const newRoutineSettings2 = document.getElementById('settings2').value;
    const newRoutineWorkout3 = document.getElementById('workout3').value;
    const newRoutineSettings3 = document.getElementById('settings3').value;
    const newRoutineWorkout4 = document.getElementById('workout4').value;
    const newRoutineSettings4 = document.getElementById('settings4').value;

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
                name: workouts
                  .map((w) => {
                    if (w.label === newRoutineWorkout1) return w.muscle;
                  })
                  .join(''),
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
                name: workouts
                  .map((w) => {
                    if (w.label === newRoutineWorkout2) return w.muscle;
                  })
                  .join(''),
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
            description: '-',
            muscles: [
              {
                name: workouts
                  .map((w) => {
                    if (w.label === newRoutineWorkout3) return w.muscle;
                  })
                  .join(''),
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
            description: '-',
            muscles: [
              {
                name: workouts
                  .map((w) => {
                    if (w.label === newRoutineWorkout4) return w.muscle;
                  })
                  .join(''),
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
            <TextField id="name" label="Nombre" variant="outlined" color="primary" />
          </Grid>
        </Grid>
        <hr />
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <Autocomplete
              disablePortal
              id="workout1"
              options={workouts}
              isOptionEqualToValue={(option, value) => option.label === value.label}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField id="settings1" label="Ajustes" variant="outlined" color="primary" />
          </Grid>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <Autocomplete
              disablePortal
              id="workout2"
              options={workouts}
              isOptionEqualToValue={(option, value) => option.label === value.label}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField id="settings2" label="Ajustes" variant="outlined" color="primary" />
          </Grid>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <Autocomplete
              disablePortal
              id="workout3"
              options={workouts}
              isOptionEqualToValue={(option, value) => option.label === value.label}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField id="settings3" label="Ajustes" variant="outlined" color="primary" />
          </Grid>
          <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
            <Autocomplete
              disablePortal
              id="workout4"
              options={workouts}
              isOptionEqualToValue={(option, value) => option.label === value.label}
              renderInput={(params) => <TextField {...params} label="Ejercicio" />}
            />
            <TextField id="settings4" label="Ajustes" variant="outlined" color="primary" />
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
