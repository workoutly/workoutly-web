import { Grid } from '@mui/material';
import styles from '../styles/Home.module.css';

const QuienesSomos = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectiontitle}>Quiénes somos</h1>
      <Grid container justifyContent={'center'} spacing={{ xs: 10, sm: 10, md: 6 }}>
        <Grid container justifyContent={'center'} item xs={6} sm={6} md={3}>
          <img src="/pepe-computer.jpg" width={'150px'} height={'150px'} alt="pepe posando" />
          <p className="section">
            Somos un grupo de estudiantes apasionados por la informática. Gracias a Workoutly,
            pretendemos acercar la importancia del deporte a todo tipo de personas, acompañándoles
            en el proceso de la mejor manera posible.
          </p>
        </Grid>
        <Grid container justifyContent={'center'} item xs={6} sm={6} md={3}>
          <img
            src="/pepe-workout.png"
            width={'150px'}
            height={'150px'}
            alt="pepe haciendo barra z"
          />
          <p className="section">
            Con Workoutly, puedes gestionar todas tus rutinas, personalizándolas con todo tipo de
            ejercicios a tu gusto
          </p>
        </Grid>
        <Grid container justifyContent={'center'} item xs={6} sm={6} md={3}>
          <img
            src="/pepe-social.jpg"
            width={'150px'}
            height={'150px'}
            alt="pepe haciendo dominadas"
          />

          <p className="section">
            No debemos dejar de lado el aspecto social. Por lo tanto, Workoutly te permite también
            visualizar rutinas de otros usuarios para utilizarlas tú mismo, además de poder
            compartir las tuyas con el resto del mundo.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuienesSomos;
