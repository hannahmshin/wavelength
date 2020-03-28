function getSpectrum() {
  return fetch('/api/spectrum')
    .then(res => res.json())
    .then(data => ({
      location: data.location,
      left: data.spectrum.left,
      right: data.spectrum.right
    }))
}

function newGame() {
  return fetch('/api/newGame')
}

export default {
  newGame,
  getSpectrum
}
