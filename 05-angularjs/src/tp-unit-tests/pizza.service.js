export default class PizzaService {
  constructor() {
    this.pizzas = [
    { name: 'Pépéroni', price: 12},
    { name: 'Oriental', price: 15},
    ]
  }

  findAll() {
    return this.pizzas
  }
}
