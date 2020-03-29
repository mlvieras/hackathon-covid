import React from "react";
import style from "./business-info.module.scss";
import {BusinessController} from "../../networking/controllers/business-controller";
import {goToPage, routeNaming} from "../../routes";
import {LAYOUT_TYPES, withLayout} from "../../hocs/with-layout";

class BusinessInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phones: "",
      emails: "",
      type: "DELIVERY",
      tags: "",
      time: "",
      deliveryRange: "",
      deliveryZone: "",
      address: "",
      instagram: "",
      facebook: ""
    };

    this._onTextChange = this._onTextChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onTextChange(e) {
    const state = {...this.state};
    state[e.target.name] = e.target.value;

    this.setState(state);
  }

  async _onSubmit(e) {

    e.preventDefault();

    if (e.target.checkValidity()) {
      return;
    }

    await BusinessController.createProvider({...this.state});
    goToPage(routeNaming.DASHBOARD);
  }

  render() {
    return (
      <form className={style.container} onSubmit={this._onSubmit}>

        <p className={style.title}>Información sobre el negocio</p>

        <p className={style.subTitle}>Información general</p>

        <label className={style.label} htmlFor="business-name">Nombre del negocio</label>
        <input id="business-name" onChange={this._onTextChange} required={true}
               name="name" className={style.input}/>

        <label className={style.label} htmlFor="business-phones">Teléfonos
          <span className={style.infoLabel}>(Números de teléfonos separados por coma)</span>
        </label>
        <input id="business-phones" onChange={this._onTextChange} required={true}
               name="phones" className={style.input}/>

        <label className={style.label} htmlFor="business-emails">Emails
          <span className={style.infoLabel}>(Emails separados por coma)</span>
        </label>
        <input id="business-email" onChange={this._onTextChange} required={true}
               name="emails" className={style.input}/>

        <label className={style.label} htmlFor="business-tags">Tags
          <span className={style.infoLabel}>(Tags para identificar a tu negocio, separados por coma)</span>
        </label>
        <input id="business-tags" onChange={this._onTextChange}
               name="tags"
               className={style.input}/>

        <label className={style.label} htmlFor="business-time">Horario</label>
        <input id="business-time" onChange={this._onTextChange}
               name="time" className={style.input}/>

        <p className={style.subTitle}>¿Qué tipo de negocio quieres registrar?</p>

        <div className={style.radioContainer}>
          <input type="radio" name="type" value="DELIVERY" onChange={this._onTextChange}
                 checked={this.state.type === "DELIVERY"}/>
          <label>Delivery</label>

          <input type="radio" name="type" value="SMALL_BUSINESS" onChange={this._onTextChange}
                 checked={this.state.type === "SMALL_BUSINESS"}/>
          <label>Negocios</label>
        </div>

        {this.state.type === "DELIVERY" ?
          <>
            <label className={style.label} onChange={this._onTextChange} required={true}
                   htmlFor="business-delivery-zone">Zona de delivery</label>
            <input id="business-delivery-zone" name="deliveryZone" className={style.input}/>
          </>
          :
          <>
            <label className={style.label} htmlFor="business-address">Dirección</label>
            <input id="business-address" onChange={this._onTextChange} required={true}
                   name="address" className={style.input}/>

            <label className={style.label} htmlFor="business-delivery-range">Rango de entrega</label>
            <input id="business-delivery-range" onChange={this._onTextChange} required={true}
                   name="deliveryRange" placeholder="Ejemplo, 200 metros" className={style.input}/>
          </>
        }

        <p className={style.subTitle}>Redes sociales</p>

        <label className={style.label} htmlFor="business-instagram">Instagram</label>
        <input id="business-instagram" onChange={this._onTextChange}
               className={style.input}/>

        <label className={style.label} htmlFor="business-facebook">Facebook</label>
        <input id="business-facebook" onChange={this._onTextChange}
               className={style.input}/>

        <br/>
        <button className={style.submit} type="submit">Enviar</button>

      </form>
    )
  }
}

const WrappedBusinessInfo = withLayout(LAYOUT_TYPES.DEFAULT, BusinessInfo);

export {WrappedBusinessInfo as BusinessInfo};