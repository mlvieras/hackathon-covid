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

}

export {BusinessController}