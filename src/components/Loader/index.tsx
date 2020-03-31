import React from 'react';
import styles from './styles.module.scss';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Spinner style={{ width: '3rem', height: '3rem' }} />
    </div>
  );
};

export default Loader;
