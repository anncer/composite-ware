/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GlobalRequest from "./request";
import { cookie } from "@composite-ware/utils";
import { AxiosRequestHeaders } from 'axios'

const Api = new GlobalRequest({
  baseURL: "",
  interceptors: {
    requestInterceptor: (config) => {
      let token = cookie.get("ESP-TOKEN")
      if (token) {
        const headers:AxiosRequestHeaders = {};
        headers['ESP-TOKEN'] = token;
        headers.Authorization = token;
        // const url = config.url
        // if (url?.includes('dmpp') && !url.includes('login')){
        //   const t = cookie.get("DMPP-TOKEN")
        //   headers.Authorization = `${t}`;
        // }
        config.headers = config.headers ? { ...config.headers, ...headers } : headers;
      }
      return config;
    },
    requestInterceptorCatch: (error) => {
      return Promise.reject(error);
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (error) => {
      return Promise.reject(error);
    }
  }
});

export default Api;
