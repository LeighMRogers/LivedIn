const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/units/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/units`).then(result => result.json())
  },
  getWithReviews(id) {
    return fetch(`${remoteURL}/units/${id}?_embed=reviews&_expand=building`)
            .then(result => result.json())
  }
}