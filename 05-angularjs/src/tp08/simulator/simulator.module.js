import SimulatorService from "./simulator.service"

const simulatorModule = angular.module('simulatorModule', ['raceModule'])
	.service('SimulatorService', SimulatorService)

export default simulatorModule
