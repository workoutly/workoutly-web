import * as React from 'react';
import styles from '../../styles/Home.module.css';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import RoutineDetails from '../../components/RoutineDetails';

const Routine: NextPage = () => {
  const router = useRouter();
  const { routineId } = router.query;
  //Get the routine from the database and pass to the component as a prop
  //If routine not found, then return so
  return (
    <div className={styles.routineDetails}>
      <RoutineDetails />
    </div>
  );
};

export default Routine;
