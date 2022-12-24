import axios from 'axios';
import { isEmpty, omit } from 'lodash';
import { getToken, removeToken } from '../utils/helpers/local-storage';
import { getAbsoluteApiUrl, getUrlWithParam } from '../utils/helpers/url';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const precessHeaders = (headers: Record<string, any> | null) => {
  if (!headers) headers = {};

  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = 'Bearer ' + token;
  }
  return headers;
};
export type ApiMethodType = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const requestErrorHandler = (e: any, cb: Function) => {
  if (e.response && e.response.status === 401) {
    removeToken();
    cb({
      message: 'Session expired or not signed in. Please sign in again',
      status: 401,
    });
    return;
  }
  if (
    e.response &&
    e.response.data &&
    e.response.data.errors &&
    !isEmpty(e.response.data.errors)
  ) {
    let errors = [];
    for (const errorField in e.response.data.errors) {
      errors.push(e.response.data.errors[errorField]);
    }
    cb({ message: errors.join('<br/>') });
  } else if (e.response && e.response.data && e.response.data.message) {
    cb({ message: e.response.data.message, status: e.response.status });
  } else {
    cb(e);
  }
};

const apiWrapper = (
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  url: string,
  headers: Record<string, any> | null,
  data?: any
) => {
  return new Promise<any>(async (resolve, reject) => {
    let postHeader = precessHeaders(headers);
    // if (data instanceof FormData) {
    //     delete postHeader['Content-Type'];
    // }

    if (data instanceof Object && !(data instanceof FormData)) {
      data = omit(data, 'errors');
    }
    let absUrl = getAbsoluteApiUrl(url, baseUrl);
    if (method === 'DELETE' || method === 'GET') {
      absUrl = getUrlWithParam(absUrl, data);
    }

    try {
      let response = null;
      if (method === 'GET') {
        response = await axios.get(absUrl, { headers: postHeader });
      } else if (method === 'POST') {
        response = await axios.post(absUrl, data, {
          headers: postHeader,
        });
      } else if (method === 'PUT') {
        response = await axios.put(absUrl, data, {
          headers: postHeader,
        });
      } else {
        response = await axios.delete(absUrl, { headers: postHeader });
      }
      if (response.data.status === 'success') {
        resolve(response.data.data);
      } else {
        reject({ message: response.data.message });
      }
    } catch (e) {
      requestErrorHandler(e, reject);
    }
  });
};

const Api = {
  get: (
    url: string,
    data: any = {},
    headers: Record<string, any> | null = null
  ) => {
    return apiWrapper('GET', url, headers, data);
  },
  post: (
    url: string,
    data: any = {},
    headers: Record<string, any> | null = null
  ) => {
    return apiWrapper('POST', url, headers, data);
  },
  put: (
    url: string,
    data: any = {},
    headers: Record<string, any> | null = null
  ) => {
    return apiWrapper('PUT', url, headers, data);
  },
  delete: (
    url: string,
    data: any = {},
    headers: Record<string, any> | null = null
  ) => {
    return apiWrapper('DELETE', url, headers, data);
  },
};

export default Api;
