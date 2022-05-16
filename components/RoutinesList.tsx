import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RoutineCard from './RoutineCard';
import { Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';

const RoutinesList = () => {
  const [newRoutine, setNewRoutine] = useState();
  const [routines, setRoutines] = useState();

  useEffect(() => {
    const getRoutines = async () => {
      const res = await fetch(`https://workoutly-api.aulasoftwarelibre.uco.es/routines`, {
        method: 'GET',
      });
      const data = await res.json();
      setRoutines(data);
    };
    getRoutines();
  }, []);

  const workouts = [
    { label: 'Press de banca', muscle: 'Pectoral' },
    { label: 'Sentadillas', muscle: 'Pierna' },
    { label: 'Jalón al pecho', muscle: 'Espalda' },
    { label: 'Curl de biceps', muscle: 'Biceps' },
    { label: 'Abdominales', muscle: 'Abdominales' },
    { label: 'Press americano', muscle: 'Hombros' },
    { label: 'Extensión de triceps', muscle: 'Triceps' },
  ];

  return (
    <Box sx={{ flexGrow: 1, m: 8 }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {routines?.map((routine) => (
          <RoutineCard key={routine._id} routine={routine} />
        ))}
      </Grid>
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
            <Grid container justifyContent={'center'} item xs={12} sm={6} md={3}>
              <TextField id="description" label="Descripción" variant="outlined" color="primary" />
            </Grid>
          </Grid>
          <hr />
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
              <Autocomplete
                disablePortal
                id="workout"
                options={workouts}
                renderInput={(params) => <TextField {...params} label="Ejercicio" />}
              />
              <TextField id="settings" label="Ajustes" variant="outlined" color="primary" />
            </Grid>
            <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
              <Autocomplete
                disablePortal
                id="workout"
                options={workouts}
                renderInput={(params) => <TextField {...params} label="Ejercicio" />}
              />
              <TextField id="settings" label="Ajustes" variant="outlined" color="primary" />
            </Grid>
            <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
              <Autocomplete
                disablePortal
                id="workout"
                options={workouts}
                renderInput={(params) => <TextField {...params} label="Ejercicio" />}
              />
              <TextField id="settings" label="Ajustes" variant="outlined" color="primary" />
            </Grid>
            <Grid container justifyContent={'center'} item xs={8} sm={8} md={6} lg={4} xl={3}>
              <Autocomplete
                disablePortal
                id="workout"
                options={workouts}
                renderInput={(params) => <TextField {...params} label="Ejercicio" />}
              />
              <TextField id="settings" label="Ajustes" variant="outlined" color="primary" />
            </Grid>
          </Grid>
          <div className={styles.saveRoutineButton}>
            <Button variant="contained">Crear rutina</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RoutinesList;
