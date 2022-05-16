import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RoutineCard from './RoutineCard';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import AddRoutineForm from './AddRoutineForm';

const RoutinesList = () => {
  const [routines, setRoutines] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRoutines = async () => {
      const res = await fetch(`https://workoutly-api.aulasoftwarelibre.uco.es/routines`, {
        method: 'GET',
      });
      const data = await res.json();
      setRoutines(data);
    };
    getRoutines().then(() => setLoading(false));
  });

  return (
    <Box sx={{ flexGrow: 1, m: 8 }}>
      <Grid
        justifyContent={'center'}
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <></>
        )}
        {routines?.map((routine) => (
          <RoutineCard key={routine._id} routine={routine} />
        ))}
      </Grid>
      <AddRoutineForm />
    </Box>
  );
};

export default RoutinesList;
