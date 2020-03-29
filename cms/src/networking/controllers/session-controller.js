import { ApiService } from '../api-service';
import { ProviderSerializer } from '../serializers/provider-serializer';
import { Provider } from '../../models/provider';

const LOGIN_PATH = 'api/sessions';
const FORGOT_PASSWORD_PATH = 'api/sessions/forgot-password';

class SessionController {
  static async login(email, password) {
    const response = await ApiService.post(LOGIN_PATH, {
      email,
      password,
    });
    const deSerializedData = ProviderSerializer.deSerialize(response.data);
    return new Provider(deSerializedData);
  }

  static forgotPassword(email) {
    return ApiService.post(FORGOT_PASSWORD_PATH, {
      email,
    });
  }
}

export { SessionController };
