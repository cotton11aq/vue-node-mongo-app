import Api from './index';

export default {
  getProducts() {
    return Api().get('/api/products');
  },

  getProduct(id) {
    return Api().get(`/api/products/${id}`);
  },
};
