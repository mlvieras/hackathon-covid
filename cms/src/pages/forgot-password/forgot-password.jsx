import React from 'react';

import { logger } from '../../helpers/logger';
import { SessionController } from '../../networking/controllers/session-controller';
import { withLayout, LAYOUT_TYPES } from '../../hocs/with-layout';
import styles from './forgot-password.module.scss';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: null,
      success: false,
      error: false,
    };

    this.email = '';

    this._onEmailChange = this._onEmailChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onEmailChange(event) {
    this.email = event.target.value;
  }

  _getFormErrors() {
    const errors = {};
    if (!this.email) {
      errors.emailError = 'El email no puede ser vacío.';
    }

    if (Object.keys(errors).length) {
      return errors;
    }
    return null;
  }

  async _onSubmit(event) {
    event.preventDefault();

    this.setState({
      error: false,
      emailError: null,
    })

    const errors = this._getFormErrors();
    if (errors) {
      this.setState(errors);
      return;
    }

    try {
      await SessionController.forgotPassword(this.email);
      this.setState({
        success: true,
      });
    } catch (error) {
      logger.warn(error);
      this.setState({
        error: true,
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this._onSubmit} className={styles.form}>
          <h1 className={styles.title}>
            Olvidé mi contraseña
          </h1>

          <label className={styles.label} htmlFor="login-page-email">
            Email <br />
            <input
              className={styles.input}
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
          {
            this.state.error
            && (
              <p className={styles.error}>
                Estamos experimentando problemas, intenta de nuevo.
              </p>
            )
          }
          {
            this.state.success
            && (
              <p className={styles.successMessage}>
                Si tu email existe en nuestra base de datos recibirás un email a la brevedad.
              </p>
            )
          }
          <input disabled={this.state.success} type="submit" className={styles.submit} value="Enviar" />
        </form>
      </div>
    );
  }
}

const WrappedForgotPassword = withLayout(LAYOUT_TYPES.DEFAULT, ForgotPassword);

export { WrappedForgotPassword as ForgotPassword };
