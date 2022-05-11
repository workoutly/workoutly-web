import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RoutineCard from './RoutineCard';

const RoutinesList = () => {
  const routines: number[] = [1, 2, 3, 4, 5];

  return (
    <Box sx={{ flexGrow: 1, m: 8 }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {routines?.map((routine: number) => (
          <RoutineCard key={routine} routine={routine} />
        ))}
      </Grid>
    </Box>
  );
};

export default RoutinesList;
