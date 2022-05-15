import Card from '@mui/material/Card';
import { CardActions, useStepperContext } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import styles from '../styles/Home.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

const RoutineCard = ({ routine }) => {
  const router = useRouter();

  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ display: 'inline-block' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {routine._name}
            </Typography>
          </CardContent>
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
                      {workout.muscles.map((muscle) => `${muscle.name} `)}
                    </TableCell>
                    <TableCell align="left">
                      {workout.settings.map((setting) => `${setting.value}${setting.name} `)}
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
