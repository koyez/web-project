import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { drplogger } from './customLogger';
import qs from 'qs';

// let baseURL = "https://baidu.com";
let baseURL = "https://vcc-dev.ccod.com:26100/vcc";

let defaultTimeout = 3000;

const HttpService: AxiosInstance = axios.create({
    baseURL,
    timeout: defaultTimeout
});

HttpService.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        drplogger.debug("[http:request]success: " + config);

        return config;

    },
    (error: AxiosError) => {
        drplogger.error("[http:request]error: "+ error);
        return Promise.reject(error);
    }
);


HttpService.interceptors.response.use(
    (response: AxiosResponse) => {
        drplogger.info("[http:response]success: "+ response);
        return response;
    },
    (error: AxiosError) => {
        drplogger.error("[http:response]error: " + error);
        return Promise.reject(error);
    }
);


export function DemoGet(url: string, data: any): Promise<any> {
    drplogger.info("url:" + url);
    drplogger.info("data:" + data);
    // return HttpService.get("/v2/rec/user/proxy/getVersion")

    return HttpService.post("/v2/rec/user/proxy/getVersion", {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
}

export function DemoPost(url: string, data: any): Promise<any> {
    drplogger.info("url:" + url);
    drplogger.info("data:" + data);
    // return HttpService.get("/v2/rec/user/proxy/getVersion")

    const strData = {
        "version": "2.0.0",
        type: 1,
        entNum: "2020040801"
    }
    const params = qs.stringify(strData);
    drplogger.debug(params);
    return HttpService.post(
        "/v2/rec/user/proxy/getVersion", params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}