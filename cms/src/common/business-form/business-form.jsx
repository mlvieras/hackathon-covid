import style from "./business-form.module.scss";
import React from "react";
import PropTypes from "prop-types";
import {Business} from "../../models/business";

const Field = ({field, readOnly, value, onChangeFn, required = false}) => (
  <>
    {readOnly ?
      <p className={style.readValue}>{value}</p>
      :
      <input id={`business-${field}`} onChange={onChangeFn} required={required}
             value={value} name={field} className={style.input}/>
    }
  </>
);

const FieldCheckbox = ({field, readOnly, value, onChangeFn, stateValue, label}) => (
  <>
    {readOnly ?
      <>
        {value === stateValue &&
        <>
          <label className={style.label}>Tipo de negocio</label>
          <p className={style.readValue}>{label}</p>
        </>
        }
      </>
      :
      <>
        <input id={`business-${field}`} onChange={onChangeFn} required
               checked={stateValue === value} type="radio"
               value={value} name={field}/>
        <label>{label}</label>
      </>
    }
  </>
);

export default class BusinessForm extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      props.business ? {...props.business}
        : {
          name: "",
          phones: "",
          emails: "",
          type: Business.typeConstants.DELIVERY,
          tags: "",
          time: "",
          deliveryRange: "",
          deliveryZone: "",
          address: "",
          instagram: "",
          facebook: "",
          description: ""
        };

    this.onValueChange = this.onValueChange.bind(this);
    this._onSubmit = props.onSubmitFn ? props.onSubmitFn : null;
    this.readOnly = props.readOnly;

  }

  onValueChange(e) {
    const state = {...this.state};
    state[e.target.name] = e.target.value;

    this.setState(state);
  }

  render() {
    return (
      <form className={style.container} onSubmit={this._onSubmit}>

        <h1 className={style.title}>Información sobre el negocio</h1>
        <hr/>
        <h5 className={style.subTitle}>Información general</h5>

        <label className={style.label} htmlFor="business-name">Nombre del negocio</label>
        <Field field="name" onChangeFn={this.onValueChange} required={true}
                     readOnly={this.readOnly} value={this.state.name}/>

        <label className={style.label} htmlFor="business-phones">Teléfonos
          <span className={style.infoLabel}>(Números de teléfonos separados por coma)</span>
        </label>
        <Field field="phones" onChangeFn={this.onValueChange} required={true}
                     readOnly={this.readOnly} value={this.state.phones}/>

        <label className={style.label} htmlFor="business-emails">Emails
          <span className={style.infoLabel}>(Emails separados por coma)</span>
        </label>

        <Field field="emails" onChangeFn={this.onValueChange} required={true}
                     readOnly={this.readOnly} value={this.state.emails}/>

        <label className={style.label} htmlFor="business-tags">Tags
          <span className={style.infoLabel}>(Tags para identificar a tu negocio, separados por coma)</span>
        </label>
        <Field field="tags" onChangeFn={this.onValueChange}
                     readOnly={this.readOnly} value={this.state.tags}/>

        <label className={style.label} htmlFor="business-time">Horario</label>
        <Field field="time" onChangeFn={this.onValueChange}
                     readOnly={this.readOnly} value={this.state.time}/>

        <label htmlFor="business-description" className={style.label}>
          Cuéntanos sobre ti y tu negocio
        </label>
        {!this.readOnly ?
          <textarea rows="3" className={style.textArea} id="business-description"
                    value={this.state.description}
                    name="description" onChange={this.onValueChange}/>
          :
          <p className={style.readValue}>{this.state.description}</p>
        }

        {!this.readOnly &&
        <h5 className={style.subTitle}>¿Qué tipo de negocio quieres registrar?</h5>
        }

        <div>
          <FieldCheckbox readOnly={this.readOnly} value={Business.typeConstants.DELIVERY}
                               onChangeFn={this.onValueChange}
                               label="Delivery" field="type" stateValue={this.state.type}/>


          <FieldCheckbox readOnly={this.readOnly} value={Business.typeConstants.SMALL_BUSINESS}
                               onChangeFn={this.onValueChange}
                               label="Negocios" field="type" stateValue={this.state.type}/>
        </div>

        {this.state.type === Business.typeConstants.DELIVERY ?
          <>
            <label className={style.label} onChange={this.onValueChange}
                   htmlFor="business-delivery-zone">Zona de delivery</label>
            <Field field="deliveryZone" onChangeFn={this.onValueChange} required={true}
                         readOnly={this.readOnly} value={this.state.deliveryZone}/>

          </>
          :
          <>
            <label className={style.label} htmlFor="business-address">Dirección</label>
            <Field field="address" onChangeFn={this.onValueChange} required={true}
                         readOnly={this.readOnly} value={this.state.address}/>

            <label className={style.label} htmlFor="business-delivery-range">Rango de entrega
              <span className={style.infoLabel}>(Por ejemplo. a 300 metros)</span>
            </label>
            <Field field="deliveryRange" onChangeFn={this.onValueChange} required={true}
                         readOnly={this.readOnly} value={this.state.deliveryRange}/>
          </>
        }

        <h5 className={style.subTitle}>Redes sociales</h5>

        <label className={style.label} htmlFor="business-instagram">Instagram</label>
        <Field field="instagram" onChangeFn={this.onValueChange}
                     readOnly={this.readOnly} value={this.state.instagram}/>

        <label className={style.label} htmlFor="business-facebook">Facebook</label>
        <Field field="facebook" onChangeFn={this.onValueChange}
                     readOnly={this.readOnly} value={this.state.facebook}/>
        <br/>

        {!this.readOnly &&
        <button className={style.submit} type="submit">Enviar</button>
        }

      </form>
    )
  }

}

BusinessForm.propTypes = {
  onSubmitFn: PropTypes.func,
  readOnly: PropTypes.bool,
  business: PropTypes.object
};