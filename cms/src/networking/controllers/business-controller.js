import {ApiService} from "../api-service";
import {BusinessSerializer} from "../serializers/business-serializer";
import {Business} from "../../models/business";

const BUSINESS_PATH = "api/business";

class BusinessController {

  static async createBusiness(business) {

    const response = await ApiService.post(BUSINESS_PATH, business);

    const deSerializedData = BusinessSerializer.deSerialize(response.data);

    return new Business(deSerializedData);
  }

  static async getBusiness() {

    /*const response = await ApiService.get(BUSINESS_PATH);

    const deSerializedData = BusinessSerializer.deSerialize(response.data);

    return new Business(deSerializedData);*/

    return dummyBusiness;
  }

}

export {BusinessController}

const dummyBusiness = {
  name: "data.name",
  phones: "data.phones",
  emails: "data.emails",
  type: "SMALL_BUSINESS",
  description: "data.description",
  verified: "data.verified",
  instagram: "data.instagram",
  facebook: "data.facebook",
  address: "data.address",
  deliveryRange: "data.delivery_range",
  deliveryZone: "data.delivery_zone",
  tags: "data.tags",
  time: "data.available_hours"
};