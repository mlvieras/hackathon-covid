import React from "react";
import {BusinessController} from "../../networking/controllers/business-controller";
import {goToPage, routeNaming} from "../../routes";
import {LAYOUT_TYPES, withLayout} from "../../hocs/with-layout";
import BusinessForm from "../../common/business-form/business-form";

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
      facebook: "",
      description: ""
    };
    this._onSubmit = this._onSubmit.bind(this);
  }

  async _onSubmit(e) {

    e.preventDefault();

    if (e.target.checkValidity()) {
      return;
    }

    await BusinessController.createBusiness({...this.state});
    goToPage(routeNaming.DASHBOARD);
  }

  render() {
    return (
      <BusinessForm onSubmitFn={this._onSubmit} readOnly={false}/>
    )
  }
}

const WrappedBusinessInfo = withLayout(LAYOUT_TYPES.DEFAULT, BusinessInfo);

export {WrappedBusinessInfo as BusinessInfo};