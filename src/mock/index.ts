import Mock from 'mockjs';

const Random = Mock.Random;

export default Mock.mock('/login', 'post', {
  'code': 200,
  'msg|': '',
  'data': Random.paragraph(1),
});

