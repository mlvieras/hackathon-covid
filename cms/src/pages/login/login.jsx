import React from 'react';

import { goToPage, routeNaming, AppLink } from '../../routes';
import { logger } from '../../helpers/logger';
import { SessionController } from '../../networking/controllers/session-controller';
import { withLayout, LAYOUT_TYPES } from '../../hocs/with-layout';
import styles from './login.module.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: null,
      passwordError: null,
    };

    this.email = '';
    this.password = '';

    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onEmailChange(event) {
    this.email = event.target.value;
  }

  _onPasswordChange(event) {
    this.password = event.target.value;
  }

  _getFormErrors() {
    const errors = {};
    if (!this.email) {
      errors.emailError = 'El email no puede ser vacío.';
    }

    if (!this.password) {
      errors.passwordError = 'La contraseña no puede ser vacía';
    }

    if (Object.keys(errors).length) {
      return errors;
    }
    return null;
  }

  async _onSubmit(event) {
    event.preventDefault();

    this.setState({
      emailError: null,
      passwordError: null,
    });

    const errors = this._getFormErrors();
    if (errors) {
      this.setState(errors);
      return;
    }

    try {
      await SessionController.login(this.email, this.password);
      goToPage(routeNaming.DASHBOARD);
    } catch (error) {
      logger.warn(error);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this._onSubmit} className={styles.form}>
          <h1 className={styles.title}>
            Iniciar sesión
          </h1>

          <label className={styles.label} htmlFor="login-page-email">
            Email <br />
            <input
              className={styles.input}
              type="email"
              id="login-page-email"
              onChange={this._onEmailChange}
            />
            {
              this.state.emailError
              && (
                <p className={styles.error}>
                  {this.state.emailError}
                </p>
              )
            }
          </label>

          <label className={styles.label} htmlFor="login-page-password">
            Contraseña <br />
            <input
              className={styles.input}
              type="password"
              id="login-page-password"
              onChange={this._onPasswordChange}
            />
            {
              this.state.passwordError
              && (
                <p className={styles.error}>
                  {this.state.passwordError}
                </p>
              )
            }
          </label>

          <input type="submit" className={styles.submit} value="Ingresar" />
          <AppLink
            className={styles.link}
            routeName={routeNaming.FORGOT_PASSWORD}
          >
            Olvidé mi contraseña
          </AppLink>
        </form>
      </div>
    );
  }
}

const WrappedLogin = withLayout(LAYOUT_TYPES.DEFAULT, Login);

export { WrappedLogin as Login };
