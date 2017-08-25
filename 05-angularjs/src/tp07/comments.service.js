export default function CommentsService(apiUrls, $resource) {

	let tripResource = $resource(apiUrls.full+'/:tripId', {tripId:"@id"}, {
		'update': { method: 'PUT'}
	})

	let commentsService = {
		findByTripId: function(tripId) {
			
			let tripResourceTrouve = tripResource.get({tripId: tripId})

			return tripResourceTrouve.$promise.then(r => {
				return r.comments
			})
		},
		addComment: function(tripId, comment) {

			let tripResourceTrouve = tripResource.get({tripId: tripId})

			return tripResourceTrouve.$promise.then(r => {
				if (!r.comments) {
					r.comments = []
				}

				r.comments.push({
					id: "anonyme",
					text: comment.text
				})
				return r.$update()
			})
		}
	}

	return commentsService
}

CommentsService.$inject = ['apiUrls', '$resource']
