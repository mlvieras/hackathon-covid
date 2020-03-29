import React from "react";
import {withLayout, LAYOUT_TYPES} from '../../hocs/with-layout';
import style from "./registration.module.scss";
import {RegistrationController} from "../../networking/controllers/registration-controller";

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

    _handleOnEmailChange (e) {
        this.email = e.target.value;
    };

    _handlePasswordChange (e) {
        this.password = e.target.value;
        if (this.verifyPassword) {
            this.setState({notSamePassword: this.password !== this.verifyPassword});
        }
    };

    _handleVerifyPasswordChange (e) {
        this.verifyPassword = e.target.value;
        this.setState({notSamePassword: this.password !== this.verifyPassword});
    };

    async _handleSubmit (e) {
        e.preventDefault();

        if (e.target.checkValidity()) {
            return;
        }

        try {
            await RegistrationController.register(this.email, this.password);
        } catch (error) {
            //Logger
        }

    };

    render() {

        return (
            <form className={style.container} noValidate onSubmit={this._handleSubmit}>

                <div className={style.row}>
                    <label htmlFor="registration-email">Email</label>
                    <input required={true} type="email" id="registration-email" onChange={this._handleOnEmailChange}/>
                </div>

                <div className={style.row}>
                    <label htmlFor="registration-password">Contraseña</label>
                    <input required={true} type="password" id="registration-password" onChange={this._handlePasswordChange}/>
                </div>

                <div className={style.row}>
                    <label htmlFor="registration-passwordRepeat">Repetir la contraseña</label>
                    <input required={true} type="password" id="registration-passwordRepeat"
                           onChange={this._handleVerifyPasswordChange}/>
                    {this.state.notSamePassword &&
                    <p>La contraseña debe ser la misma</p>
                    }
                </div>

                <div className={style.row}>
                    <button type="submit">Crear</button>
                </div>

            </form>
        )
    }

}

const WrappedRegistration = withLayout(LAYOUT_TYPES.DEFAULT, Registration);

export {WrappedRegistration as Registration};