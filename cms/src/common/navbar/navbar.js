import React from 'react';

import styles from './navbar.module.scss';

const Navbar = () => (
  <div className={styles.container}>
    <div>
      <p className={styles.logo}>Martín Fierro</p>
    </div>
  </div>
);

export { Navbar };
