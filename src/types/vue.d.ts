import Vue from 'vue';
import Http from '../http/api';
import {Iapi} from '@/types/api';


declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $http: Iapi;
  }
}
