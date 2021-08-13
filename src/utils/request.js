import axios from "axios";
const Axios = axios.create({
    timeout: 5000,
    withCredentials: false,
    showError: true
});
// 添加请求拦截器
Axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        const defaultCfg = {}
        const requestConfig = {
            ...defaultCfg,
            ...config
        }
        return requestConfig
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
Axios.interceptors.response.use(
    (response) => {
        // 根据自己业务自己扩展
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        // location.href = ErrorUrl
        return Promise.reject(error);
    }
);

export default function request(obj) {
    if (typeof obj !== "object") {
        throw new TypeError("Parameter must be of object type")
    }
    if (!obj.hasOwnProperty("method")) {
        throw new TypeError("The parameter must include a ‘method’ field")
    }
    const { method, headType, headers } = obj
    let defaultHeaders = {}
    const getHeader = (type) => {
        let header = {}
        switch (type) {
            case "inner":
                header = { // 请求体中的数据会以普通表单形式（键值对）发送到后端
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                break
            case 'fileServer': // 上传到文件服务器
            case 'webServer': // 上传到web服务器
                header = {
                    'Content-Type': 'multipart/form-data'
                }
                break
            case 'jsonString': // 将参数序列化json字符串进行传递
                header = {
                    'Content-Type': 'application/json'
                }
                break
            default:
                header = { // 请求体中的数据会以普通表单形式（键值对）发送到后端
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
        }
        return header
    }
    switch (method) {
        case "get":
            defaultHeaders = { 'Content-Type': 'application/json;charset=utf-8' }
            break
        case "post":
            defaultHeaders = getHeader(headType)
            break
    }

    if (headers && typeof headers === "object") {
        obj.headers = { ...defaultHeaders, ...headers }
    } else {
        obj.headers = defaultHeaders
    }
    return new Promise((resolve, reject) => {
        Axios(obj)
            .then((res) => {
                // 对响应数据做点什么, 自己扩展
                resolve(res)
            })
            .catch((err) => {
                // location.href = ErrorUrl
                reject(err);
            });
    });
};

export const GET = (GETDefaults) => {
    const obj = {
        method: 'GET',
        showError: true
    }

    const newObj = {
        ...obj,
        ...GETDefaults
    }
    return request(newObj)
};

export const POST = (POSTDefaults) => {
    const obj = {
        method: 'POST',
        showError: true,
    }
    const newObj = {
        ...obj,
        ...POSTDefaults
    }
    return request(newObj)
}
export const POSTFORM = (POSTDefaults) => {
    const obj = {
        method: 'POST',
        showError: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const newObj = {
        ...obj,
        ...POSTDefaults
    }
    return request(newObj)
}