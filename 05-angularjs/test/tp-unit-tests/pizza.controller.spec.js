import PizzaCtrl from "../../src/tp-unit-tests/pizza.controller";
import PizzaService from "../../src/tp-unit-tests/pizza.service";

describe('Suite de tests pour un contrôleur', () => {
  // code qui va s'exécuter avant chaque test
  beforeEach(() => {
  angular.mock.module('tripApp')
  })

  // cas de test
  // angular.mock.inject permet d'injecter des dépendances
  // les services sont directement injectables
  it(`A l'initialisation le contrôleur PizzaCtrl possède une liste de pizzas `, angular.mock.inject(($controller) => {
      // injection de dépendance
      // l'instance est récupérée à partir de son nom
      const pizzaCtrl = $controller('PizzaCtrl')
      expect(pizzaCtrl.pizzas.length).toBe(2)
      expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined()
    }))

  it(`$controller avec modification du service`, angular.mock.inject(($controller) => {
    // modification du service PizzaService pour qu'il retourne des données différentes
    const pizzaCtrl = $controller('PizzaCtrl', {
      PizzaService : {
        findAll : () => [ { name: 'Pépéroni', price: 12}, { name: 'Oriental', price: 15}, { name: 'Saumon', price: 20} ]
      }
    })

    expect(pizzaCtrl.pizzas.length).toBe(3)
    expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined()
  }))

  it(`$controller avec modification des propriétés`, angular.mock.inject(($controller) => {
    const pizzaCtrl = $controller('PizzaCtrl',
      /* pas de modification des dépendances */
      {},
      /* propriétés du contrôleur à l'initialisation */
      { nomPizzeria : 'La Super Pizzéria'}
    )

    expect(pizzaCtrl.nomPizzeria).toEqual('La Super Pizzéria')
    expect(pizzaCtrl.pizzas.length).toBe(2)
  }))

  it(`Le contrôleur du component pizCmp récupère la liste des pizzas du service PizzaService `, angular.mock.inject(($componentController) => {
    const pizzaCtrl = $componentController('pizCmp', {
      PizzaService : {
        findAll : () => [{name : 'Pépé', price : 15}]
      }
    })

    expect(pizzaCtrl.pizzas.length).toBe(1)
    expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépé')).toBeDefined()
  }))

})
