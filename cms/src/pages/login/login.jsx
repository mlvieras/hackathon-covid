import React from 'react';

import { withLayout, LAYOUT_TYPES } from '../../hocs/with-layout';
import styles from './login.module.scss';

const Login = () => (
  <div className={styles.container}>
    Login
  </div>
);

const WrappedLogin = withLayout(LAYOUT_TYPES.DEFAULT, Login);

export { WrappedLogin as Login };
