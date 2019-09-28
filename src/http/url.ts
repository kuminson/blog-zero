interface URL {
  baseUrl: string;
}
let url: URL = {
  baseUrl: '',
};

switch (process.env.VUE_APP_MODE) {
  case 'dev':
    url = {
      // 测试
      baseUrl: 'http://192.168.20.234:8003/',
    };
    break;
  case 'mock':
    url = {
      baseUrl: '',
    };
    break;
  case 'pord':
    url = {
      baseUrl: 'http://192.168.20.234:8003/',
    };
    break;
}

export default url;
