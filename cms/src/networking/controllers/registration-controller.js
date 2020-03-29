import {ApiService} from "../api-service";
import {ProviderSerializer} from "../serializers/provider-serializer";
import { Provider } from '../../models/provider';

const REGISTRATION_PATH = "api/registration";

class RegistrationController {

    static async register(email, password) {
        const response = await ApiService.post(REGISTRATION_PATH, {
            email,
            password
        });
        const deSerializedData = ProviderSerializer.deSerialize(response.data);
        return new Provider(deSerializedData);
    }

}

export {RegistrationController}