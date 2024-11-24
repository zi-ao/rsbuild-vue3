import { isPlainObject } from 'lodash-es';
import { stringify } from 'qs';

export interface CustomRequestOption extends Omit<RequestInit, 'body'> {
  body?: RequestInit['body'] | Record<string, unknown>;
  params?: Record<string, string | null>;
}

export interface RequestOption extends CustomRequestOption {
  baseURL?: string;
}

export const setRequestHeader = (
  option: Pick<RequestInit, 'headers'>,
  key: string,
  value: string,
) => {
  const { headers } = option;
  if (isNil(headers)) {
    option.headers = { [key]: value };
  } else if (isArray(headers)) {
    headers.push([key, value]);
  } else if (headers instanceof Headers) {
    headers.append(key, value);
  } else {
    headers[key] = value;
  }
};

export const customRequest = (
  url: string | URL | Request,
  option?: CustomRequestOption,
) => {
  let requestURL: string | URL | Request = url;
  const opt: RequestInit = option ? omit(option, ['body', 'params']) : {};

  if (option?.params) {
    if (isString(requestURL)) {
      requestURL += `${requestURL.includes('?') ? '&' : '?'}${stringify(option.params)}`;
    } else if (requestURL instanceof URL) {
      requestURL.search += `&${stringify(option.params)}`;
    }
  }

  if (option?.body) {
    if (isPlainObject(option.body)) {
      opt.body = JSON.stringify(option.body);
      setRequestHeader(opt, 'Content-Type', 'application/json;charset=utf-8');
    } else {
      opt.body = option.body as RequestInit['body'];
    }
  }

  return fetch(requestURL, opt);
};

const requestDefaultConfig = {
  baseURL: import.meta.env.APP_API_BASE_URL,
};

export const request = (
  url: string | URL | Request,
  option?: RequestOption,
) => {
  const baseURL = option?.baseURL || requestDefaultConfig.baseURL;
  return customRequest(
    baseURL && isString(baseURL) ? `${baseURL}${url.toString()}` : url,
    option,
  );
};

export const getRequest = (url: string, option: RequestOption = {}) =>
  request(url, { ...option, method: 'GET' });

export const postRequest = (
  url: string,
  data?: RequestOption['body'],
  option: RequestOption = {},
) => request(url, { ...option, body: data, method: 'POST' });

export const putRequest = (
  url: string,
  data?: RequestOption['body'],
  option: RequestOption = {},
) => request(url, { ...option, body: data, method: 'PUT' });

export const patchRequest = (
  url: string,
  data?: RequestOption['body'],
  option: RequestOption = {},
) => request(url, { ...option, body: data, method: 'PATCH' });

export const deleteRequest = (
  url: string,
  data?: RequestOption['body'],
  option: RequestOption = {},
) => request(url, { ...option, body: data, method: 'DELETE' });

export default request;
