const remoteURL = " http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/buildings/${id}`).then(result => result.json())
  },
  getAll(userId) {
    return fetch(`${remoteURL}/buildings?userId=${userId}`).then(result => result.json())
  },
  getWithUnits(buildingId) {
    return fetch(`${remoteURL}/buildings/${buildingId}?_embed=units`)
            .then(result => result.json())
  }
}