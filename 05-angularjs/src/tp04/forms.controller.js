export default class FormsController {
	
	constructor() {
		this.currentUser = {

		}
	}

	$onInit() {

	}

	reset() {
		this.currentUser = {}
	}

	save() {
		this.savedUser = angular.copy(this.currentUser)
	}
}