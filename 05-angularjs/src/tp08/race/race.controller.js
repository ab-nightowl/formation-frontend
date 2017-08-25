export default class RaceController {

	constructor(RaceService, SimulatorService) {
		this.RaceService = RaceService
		this.SimulatorService = SimulatorService
	}

	$onInit() {
		this.walkers = this.RaceService.list()
	}

	startRace() {
		this.SimulatorService.start()
	}
}

RaceController.$inject = ['RaceService', 'SimulatorService']
