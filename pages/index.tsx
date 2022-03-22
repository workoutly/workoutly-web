import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is <a href="https://github.com/workoutly/">Workoutly!</a>
        </h1>

        <p className={styles.description}>
          comming soon...
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/workoutly/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Makineao por los chavales

        </a>
      </footer>
    </div>
  )
}

export default Home
