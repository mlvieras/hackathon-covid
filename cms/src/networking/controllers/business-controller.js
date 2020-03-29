import {ApiService} from "../api-service";
import {ProviderSerializer} from "../serializers/provider-serializer";
import {Provider} from '../../models/provider';

const BUSINESS_PATH = "api/business";

class BusinessController {


  static async createProvider(provider) {

    const response = await ApiService.post(BUSINESS_PATH, provider);

    const deSerializedData = ProviderSerializer.deSerialize(response.data);

    return new Provider(deSerializedData);
  }

}

export {BusinessController}