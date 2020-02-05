const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/buildings/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/buildings`).then(result => result.json())
  },
  getWithUnits(id) {
    return fetch(`${remoteURL}/buildings/${id}?_embed=units`)
            .then(result => result.json())
  }
}