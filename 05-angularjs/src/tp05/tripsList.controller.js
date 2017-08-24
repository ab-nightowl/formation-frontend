export default class TripsListController {

	constructor($http) {
		this.$http = $http
		this.trips = []
	}

	getTrips() {
		this.$http.get('http://localhost:3000/trips')
			.then((response) => {
				this.trips = angular.copy(response.data)
			}, (response) => {
				this.errorGet = `Status: ${response.status} - ${response.statusText}`
			})
	}
	
	updateTrip(trip) {
		this.$http.patch('http://localhost:3000/trips/' + trip.id, {
			name: trip.name,
			price: trip.price
		})
			.then((resp) => {
				this.successUpdate = `Votre voyage a bien été mis à jour avec les données : name=${trip.name} et price=${trip.price}`
			}, (resp) => {
				this.errorUpdate = `Status: ${response.status} - ${response.statusText}`
			})
	}

}
