import RaceController from "./race.controller"
import RaceService from "./race.service"

const raceModule = angular.module('raceModule', [])
	.controller('RaceController', RaceController)
	.service('RaceService', RaceService)

export default raceModule
