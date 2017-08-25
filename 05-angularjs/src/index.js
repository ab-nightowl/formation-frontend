import angular from "angular";
import ngResource from 'angular-resource'
import raceModule from './tp08/race/race.module'
import simulatorModule from './tp08/simulator/simulator.module'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tp2Tp02 from './tp02/vues.html'
import tp3Tp03 from './tp03/carrousel.html'
import tp4Tp04 from './tp04/forms.html'
import tp5Tp05 from './tp05/tripsList.html'
import tp6Tp06 from './tp06/tripsListDetails.html'
import tp7Tp07 from './tp07/tripsComments.html'
import tp8Tp08 from './tp08/race/race.html'

import CarrouselCtrl from './tp03/carrousel.controller'
import FormsController from './tp04/forms.controller'
import TripsListController from './tp05/tripsList.controller'
import TripsListDetailsController from './tp06/tripsListDetails.controller'
import TripsCommmentsController from './tp07/tripsComments.controller'

import apiUrls from "./tp07/apiUrls.service";
import TripsService from "./tp07/trips.service";
import CommentsService from "./tp07/comments.service";
import StepsService from "./tp07/steps.service";

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01, tp2Tp02, tp3Tp03, tp4Tp04, tp5Tp05, tp6Tp06, tp7Tp07, tp8Tp08].join('<hr>')

angular.module('tripApp', ['ngResource', 'raceModule', 'simulatorModule'])
	.controller(CarrouselCtrl.name, CarrouselCtrl)
	.controller(FormsController.name, FormsController)
	.controller(TripsListController.name, TripsListController)
	.controller(TripsListDetailsController.name, TripsListDetailsController)
	.controller(TripsCommmentsController.name, TripsCommmentsController)
	.constant('apiUrls', apiUrls)
	.service('TripsService', TripsService)
	.service('StepsService', StepsService)
	.factory('CommentsService', CommentsService)
	.run((CommentsService, StepsService) => {

		CommentsService.findByTripId('paris').then(comments => console.log(comments))
		StepsService.findStepsByTripId('paris').then(steps => console.log(steps))

	})

