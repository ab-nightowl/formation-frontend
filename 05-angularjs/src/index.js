import angular from "angular";
import ngResource from 'angular-resource'

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tp2Tp02 from './tp02/vues.html'
import tp3Tp03 from './tp03/carrousel.html'
import tp4Tp04 from './tp04/forms.html'
import tp5Tp05 from './tp05/tripsList.html'
import tp6Tp06 from './tp06/tripsListDetails.html'

import CarrouselCtrl from './tp03/carrousel.controller'
import FormsController from './tp04/forms.controller'
import TripsListController from './tp05/tripsList.controller'
import TripsListDetailsController from './tp06/tripsListDetails.controller'

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01, tp2Tp02, tp3Tp03, tp4Tp04, tp5Tp05, tp6Tp06].join('<hr>')
angular.module('tripApp', ['ngResource'])
.controller(CarrouselCtrl.name, CarrouselCtrl)
.controller(FormsController.name, FormsController)
.controller(TripsListController.name, TripsListController)
.controller(TripsListDetailsController.name, TripsListDetailsController)
