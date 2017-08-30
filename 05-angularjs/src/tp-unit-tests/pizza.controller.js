export default class PizzaCtrl {
  constructor(PizzaService) {
    this.pizzas = PizzaService.findAll()
  }
}
