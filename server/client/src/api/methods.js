import Api from './index';

export default {
  getTodos() {
    return Api().get('/api/todos');
  },
  postTodo(data) {
    return Api().post(`/api/todos`, data);
  },
  deleteTodo(id) {
    return Api().delete(`/api/todos/${id}`);
  },
};
