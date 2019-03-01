import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/animals/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${settings.remoteURL}/animals`).then(e => e.json())
    },
    removeAndList(id) {
        return fetch(`${settings.remoteURL}/animals/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`${settings.remoteURL}/animals`).then(e => e.json())
            )
    }
}