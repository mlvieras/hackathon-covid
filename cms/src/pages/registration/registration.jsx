import React from "react";
import {withLayout, LAYOUT_TYPES} from '../../hocs/with-layout';
import style from "./registration.module.scss";
import {RegistrationController} from "../../networking/controllers/registration-controller";
import {logger} from "../../helpers/logger";
import {goToPage, routeNaming} from "../../routes";
import styles from "../login/login.module.scss";

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notSamePassword: false
        };
        this.email = '';
        this.password = "";
        this.verifyPassword = "";

        this._handleOnEmailChange = this._handleOnEmailChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleVerifyPasswordChange = this._handleVerifyPasswordChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleOnEmailChange(e) {
        this.email = e.target.value;
    };

    _handlePasswordChange(e) {
        this.password = e.target.value;
        if (this.verifyPassword) {
            this.setState({notSamePassword: this.password !== this.verifyPassword});
        }
    };

    _handleVerifyPasswordChange(e) {
        this.verifyPassword = e.target.value;
        this.setState({notSamePassword: this.password !== this.verifyPassword});
    };

    async _handleSubmit(e) {
        e.preventDefault();

        if (e.target.checkValidity()) {
            return;
        }

        try {
            const data = await RegistrationController.register(this.email, this.password);

            goToPage(routeNaming.DASHBOARD, data.id)

        } catch (error) {
            logger.warn(error);
        }

    };

    render() {

        return (
            <div className={style.container}>
                <form className={style.form} noValidate onSubmit={this._handleSubmit}>

                    <div className={style.row}>
                        <label className={styles.label} htmlFor="registration-email">Email</label>
                        <input className={styles.input} required={true} type="email" id="registration-email"
                               onChange={this._handleOnEmailChange}/>
                    </div>

                    <div className={style.row}>
                        <label className={styles.label} htmlFor="registration-password">Contraseña</label>
                        <input className={styles.input} required={true} type="password" id="registration-password"
                               onChange={this._handlePasswordChange}/>
                    </div>

                    <div className={style.row}>
                        <label className={styles.label} htmlFor="registration-passwordRepeat">Repetir la
                            contraseña</label>
                        <input className={styles.input} required={true} type="password" id="registration-passwordRepeat"
                               onChange={this._handleVerifyPasswordChange}/>
                        {this.state.notSamePassword &&
                        <p>La contraseña debe ser la misma</p>
                        }
                    </div>

                    <div className={style.row}>
                        <button className={styles.submit} type="submit">Crear</button>
                    </div>

                </form>
            </div>
        )
    }

}

const WrappedRegistration = withLayout(LAYOUT_TYPES.DEFAULT, Registration);

export {WrappedRegistration as Registration};