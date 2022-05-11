import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Workoutly</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
