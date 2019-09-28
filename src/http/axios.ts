import axios from 'axios';
import url from './url';

// 通用配置
const instance = axios.create({
  // 服务器根结点
  baseURL: url.baseUrl,
  // withCredentials: true,
  timeout: 15000,
});

interface IhttpBack {
  promise: Promise<void>;
  CancelToken: object;
}


const action = {
  commonPost: (urlLink: string, data: object): IhttpBack => {
    const source = axios.CancelToken.source();
    return {
      promise: new Promise((resolve, reject) => {
        instance.post(urlLink, data, {
          cancelToken: source.token,
        }).then((res) => {
          if (res.data.code === 200) {
            resolve(res.data.data);
          } else {
            reject(res.data);
          }
        }).catch((error) => {
          reject(error);
        });
      }),
      CancelToken: source,
    };
  },
  commonGet: (urlLink: string, data: object): IhttpBack => {
    const source = axios.CancelToken.source();
    return {
      promise: new Promise((resolve, reject) => {
        instance.get(urlLink, {
          params: data,
          cancelToken: source.token,
        }).then((res) => {
          if (res.data.code === 200) {
            resolve(res.data.data);
          } else {
            reject(res.data);
          }
        }).catch((error) => {
          reject(error);
        });
      }),
      CancelToken: source,
    };
  },
};

export default action;

