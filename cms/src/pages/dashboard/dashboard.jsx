import React from "react";
import {LAYOUT_TYPES, withLayout} from "../../hocs/with-layout";
import style from "./dashboard.module.scss";
import BusinessForm from "../../common/business-form/business-form";
import {BusinessController} from "../../networking/controllers/business-controller";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.fetchBusiness();
  }

  async fetchBusiness() {

    const data = await BusinessController.getBusiness();

    this.setState({
      business: data
    });
  }


  render() {

    return (
      <div className={style.container}>

        {this.state.business ?
          <BusinessForm readOnly={true} business={this.state.business}/>
          :
          <p>Loading</p>
        }


      </div>
    )
  }

}

const WrappedDashboard = withLayout(LAYOUT_TYPES.DEFAULT, Dashboard);

export {WrappedDashboard as Dashboard};