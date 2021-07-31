import Api from './index';

export default {
  getTodos() {
    return Api().get('/api/todos');
  },
};
