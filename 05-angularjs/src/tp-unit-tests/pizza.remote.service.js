export default class PizzaRemoteService {
  constructor($http) {
    this.$http = $http
  }

  findAll() {
    return this.$http.get('/api/pizzas')
    .then((resp) => resp.data)
  }
}
