const remoteURL = " http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/reviews/${id}`).then(result => result.json())
  },
  getAll(userId) {
    return fetch(`${remoteURL}/reviews?userId=${userId}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/reviews/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newItinerary) {
    return fetch(`${remoteURL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItinerary)
    }).then(data => data.json())
  },
  update( editedReviewId, editedReview) {
    return fetch(`${remoteURL}/itineraries/${editedReviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReview)
    }).then(data => data.json());
  }
}