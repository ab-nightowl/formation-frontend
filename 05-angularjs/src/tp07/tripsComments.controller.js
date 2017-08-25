export default class TripsCommmentsController {

	constructor(TripsService, StepsService, CommentsService) {
		this.TripsService = TripsService
		this.StepsService = StepsService
		this.CommentsService = CommentsService
	}

	$onInit() {
		this.trips = this.TripsService.findAll()
		
	}

	select(tripId) {
		this.StepsService.findStepsByTripId(tripId).then(steps => {
			this.steps = steps
		})
		this.CommentsService.findByTripId(tripId).then(comments => {
			this.comments = comments
		})
	}

	
}
