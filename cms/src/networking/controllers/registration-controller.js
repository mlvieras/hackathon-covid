import {ApiService} from "../api-service";

const REGISTRATION_PATH = "api/registration";

class RegistrationController {

    static async register(email, password) {
        const response = await ApiService.post(REGISTRATION_PATH, {
            email,
            password
        });
        /*Provider serializer?*/
    }

}

export {RegistrationController}