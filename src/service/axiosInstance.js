import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getToken } from "./authToken";
export const CONTENT_TYPE = "application/json";
export const GET = "GET";
export const POST = "POST";

const axiosObject = axios.create();

// const responseInterceptor = (response) => response;
// const errorInterceptor = (error) =>  error;
// axiosInstance.interceptors.response.use( response, error);

let headers = {},
  extraConfigs = {
    cache: "default",
    credentials: "same-origin",
  };

export function createAxiosReqeust(url, method, options = {}) {
  let reqObj;

  headers = {
    APP_senderName: window.location.origin,
    APP_appid: "live",
    APP_messageId: uuidv4(),
    APP_creationTime: new Date().getTime(),
    Authorization: `Bearer ${getToken()}`,
  };

  if (options.headers) {
    headers = { ...headers, ...options.headers };
  }

  if (options.config) {
    extraConfigs = {
      ...extraConfigs,
      ...options.config,
    };
  }

  if (method === POST && !(options.data instanceof FormData)) {
    headers = { "Content-Type": CONTENT_TYPE, ...headers };
  }

  reqObj = { url, method, headers, ...extraConfigs };

  if (options.data) {
    reqObj = { ...reqObj, data: options.data };
  }

  if (options.params) {
    reqObj = { ...reqObj, params: options.params };
  }

  if (options.signal) {
    reqObj = { ...reqObj, signal: options.signal };
  }

  return reqObj;
}

export async function post(url, options) {
  return await axiosObject(createAxiosReqeust(url, POST, options));
}

export async function get(url, options) {
  return await axiosObject(createAxiosReqeust(url, GET, options));
}

export const axiosInstance = axiosObject;
