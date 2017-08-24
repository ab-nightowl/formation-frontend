import angular from "angular";

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tp2Tp02 from './tp02/vues.html'
import tp3Tp03 from './tp03/carrousel.html'
import tp4Tp04 from './tp04/forms.html'

import CarrouselCtrl from './tp03/carrousel.controller'
import FormsController from './tp04/forms.controller'

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01, tp2Tp02, tp3Tp03, tp4Tp04].join('<hr>')
angular.module('tripApp', [])
.controller(CarrouselCtrl.name, CarrouselCtrl)
.controller(FormsController.name, FormsController)
