// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'

import angular from "angular";
// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01].join('<hr>')
