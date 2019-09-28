import action from './axios';
import {Iapi} from '@/types/api';

const api: Iapi = {
  // 登录
  login: (data: object) => {
    return action.commonPost('/login', data).promise;
  },
};

export default api;
