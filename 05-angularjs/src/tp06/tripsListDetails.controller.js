export default class TripsListDetailsController {

	constructor($resource) {
		this.TripResource = $resource('http://localhost:3000/trips-details/:tripId', {tripId:"@id"}, {
    			'update': { method:'PUT' }
 		})
		this.trips = this.TripResource.query();
	}
	
	updateTrip(trip) {
		trip.$update();
	}

}
