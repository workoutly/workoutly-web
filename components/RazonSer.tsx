import { Grid } from '@mui/material';
import styles from '../styles/Home.module.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const RazonSer = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectiontitle}>Nuestra razón de ser</h1>
      <Grid container justifyContent={'center'} spacing={0}>
        <Grid container justifyContent={'center'} item xs={6}>
          <h2>
            <EmojiEmotionsIcon></EmojiEmotionsIcon> Proveedores de felicidad
          </h2>
        </Grid>
        <Grid container justifyContent={'center'} item xs={6}>
          <h2>
            <FavoriteIcon></FavoriteIcon> Pasión por el deporte
          </h2>
        </Grid>
        <Grid container justifyContent={'center'} item xs={6}>
          <h2>
            <SportsGymnasticsIcon></SportsGymnasticsIcon> Ejercicio para todos
          </h2>
        </Grid>
        <Grid container justifyContent={'center'} item xs={6}>
          <h2>
            <ConnectWithoutContactIcon></ConnectWithoutContactIcon> Actividad social
          </h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default RazonSer;
