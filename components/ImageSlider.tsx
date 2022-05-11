import styles from '../styles/Home.module.css';

const ImageSlider = () => {
  return (
    <div className={styles.sliderFrame}>
      <div className={styles.slideImages}>
        <div className={styles.imgContainer}>
          <img src="/pepe3.jpg" width={'400px'} height={'400px'} alt="pepe haciendo dominadas" />
        </div>
        <div className={styles.imgContainer}>
          <img src="/pepe2.jpg" width={'400px'} height={'400px'} alt="pepe haciendo barra z" />
        </div>
        <div className={styles.imgContainer}>
          <img src="/pepe1.jpg" width={'400px'} height={'400px'} alt="pepe posando" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
