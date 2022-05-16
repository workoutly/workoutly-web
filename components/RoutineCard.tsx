import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';

const RoutineCard = ({ routine }) => {
  const router = useRouter();

  return (
    <>
      <Grid item sm={12} md={5}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {routine._name}
            </Typography>
          </CardContent>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="left">Descripción</TableCell>
                  <TableCell align="left">Músculos</TableCell>
                  <TableCell align="left">Ajustes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {routine?._workouts.map((workout) => (
                  <TableRow
                    key={workout.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {workout.name}
                    </TableCell>
                    <TableCell align="left">{workout.description}</TableCell>
                    <TableCell align="left">
                      {workout.muscles.map((muscle) => `${muscle.name}`)}
                    </TableCell>
                    <TableCell align="left">
                      {workout.settings.map((setting) => `${setting.name}`)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </>
  );
};

export default RoutineCard;
