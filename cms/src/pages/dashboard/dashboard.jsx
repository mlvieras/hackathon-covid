import React from "react";
import {LAYOUT_TYPES, withLayout} from "../../hocs/with-layout";
import style from "./dashboard.module.scss";
import BusinessForm from "../../common/business-form/business-form";
import {BusinessController} from "../../networking/controllers/business-controller";
import {logger} from "../../helpers/logger";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchingError: false,
      loading: true
    };
  }

  componentDidMount() {
    this.fetchBusiness();
  }

  async fetchBusiness() {

    try {
      const data = await BusinessController.getBusiness();

      this.setState({
        business: data,
        loading: false
      });

    } catch (e) {
      logger.warn(e);
      this.setState({
        fetchingError: true,
        loading: false
      });
    }


  }


  render() {

    return (
      <div className={style.container}>

        {this.state.load &&
        <p>Loading</p>
        }

        {this.state.fetchingError &&
        <div className={style.errorContainer}>Ha ocurrido un error al intentar obtener el negocio</div>
        }

        {this.state.business &&
          <BusinessForm readOnly={true} business={this.state.business}/>
        }


      </div>
    )
  }

}

const WrappedDashboard = withLayout(LAYOUT_TYPES.DEFAULT, Dashboard);

export {WrappedDashboard as Dashboard};