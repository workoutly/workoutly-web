import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const RoutineCard = ({ routine }: { routine: number }) => {
  const router = useRouter();

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Título
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Creador
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => router.push(`routines/${routine}`)} variant="contained">
            Ver rutina
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RoutineCard;
