import React from 'react';

import { goToPage, routeNaming } from '../../routes';
import { logger } from '../../helpers/logger';
import { SessionController } from '../../networking/controllers/session-controller';
import { withLayout, LAYOUT_TYPES } from '../../hocs/with-layout';
import styles from './set-password.module.scss';
import { ParamsHelper } from '../../helpers/params-helper';

class SetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordError: null,
      error: false,
    };

    this.password = '';
    this.token = ParamsHelper.parseQueryParams(window.location.search);

    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onPasswordChange(event) {
    this.password = event.target.value;
  }

  _getFormErrors() {
    const errors = {};
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
      error: null,
      passwordError: null,
    });

    const errors = this._getFormErrors();
    if (errors) {
      this.setState(errors);
      return;
    }

    try {
      await SessionController.setPassword(this.token, this.password);
      goToPage(routeNaming.DASHBOARD);
    } catch (error) {
      logger.warn(error);
      this.setState({
        error: 'Estamos experimentando problemas, intenta de nuevo',
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this._onSubmit} className={styles.form}>
          <h1 className={styles.title}>
            Recuperar contraseña
          </h1>

          <label className={styles.label} htmlFor="set-password-page-email">
            Contraseña <br />
            <input
              className={styles.input}
              id="set-password-page-email"
              type="password"
              onChange={this._onPasswordChange}
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

          <input type="submit" className={styles.submit} value="Ingresar" />
        </form>
      </div>
    );
  }
}

const WrappedSetPassword = withLayout(LAYOUT_TYPES.DEFAULT, SetPassword);

export { WrappedSetPassword as SetPassword };
