
var playlist = {
  'Slowdive': 'Thriller',
  'My Bloody Valentine': 'Sometimes'
}

function updatePlaylist() {
    return Object.assign({}, playlist, { ['Phil Ochs']: 'Here\'s to the State of Mississippi'})
  }
