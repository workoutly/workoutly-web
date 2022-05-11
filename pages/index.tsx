import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import styles from '../styles/Home.module.css';
import QuienesSomos from '../components/QuienesSomos';
import RazonSer from '../components/RazonSer';
import ImageSlider from '../components/ImageSlider';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Grid container spacing={{ xs: 10, sm: 6, md: 1 }} columns={{ xs: 1, sm: 8, md: 12 }}>
          <Grid item xs={1} sm={8} md={8} alignItems="center">
            <h1 className={styles.title}>
              Bienvenido a <a href="https://github.com/workoutly/">Workoutly!</a>
            </h1>
            <h2 className={styles.description}>Tu app de deporte</h2>
          </Grid>
          <Grid item display={'flex'} justifyContent={'center'} xs={1} sm={8} md={4}>
            <ImageSlider />
          </Grid>
        </Grid>
      </main>
      <hr />
      <QuienesSomos />
      <hr />
      <RazonSer />
      <footer className={styles.footer}>
        <a href="https://github.com/workoutly/" target="_blank" rel="noopener noreferrer">
          Workoutly ©
        </a>
      </footer>
    </div>
  );
};

export default Home;
