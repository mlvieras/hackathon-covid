import axios from 'axios';

import { ApiError } from './../models/api-error';
import { ApiErrorSerializer } from './serializers/api-error-serializer';

const METHODS = {
  delete: 'delete',
  get: 'get',
  post: 'post',
  put: 'put',
};

class ApiServiceClass {
  constructor() {
    this.axios = axios.create();
    this._addedHeaders = {};
  }

  async _sendRequest(method, url, config = {}) {
    try {
      const updatedConfig = { ...config };
      updatedConfig.headers = Object.assign({}, this._addedHeaders, config.headers || {});
      if (method === METHODS.get || method === METHODS.delete) {
        return await this.axios[method](url, updatedConfig);
      }
      if (method === METHODS.post || method === METHODS.put) {
        const body = updatedConfig.body || {};
        delete updatedConfig.body;
        return await this.axios[method](url, body, updatedConfig);
      }
      return null;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new ApiError({
          ...ApiErrorSerializer.deSerialize(error.response.data),
          status: error.response.status,
        });
      }
      throw new ApiError({
        status: null,
        code: null,
        message: error.message,
      });
    }
  }

  setHeaders(newHeaders) {
    Object.assign(this._addedHeaders, newHeaders);
  }

  get(url, params = {}, config = {}) {
    return this._sendRequest(METHODS.get, url, { ...config, params });
  }

  post(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.post, url, { ...config, body });
  }

  put(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.put, url, { ...config, body });
  }

  delete(url, params = {}, config = {}) {
    return this._sendRequest(METHODS.delete, url, { ...config, params });
  }
}

const ApiService = new ApiServiceClass();

export { ApiService };
