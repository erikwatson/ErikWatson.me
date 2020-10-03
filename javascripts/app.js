function displayGreeting () {
  const github = 'https://github.com/erikwatson/ErikWatson.me'
  const messages = [
    'Hello, nosey.',
    "There isn't much to see in here, really.",
    "It's a very simple site based on the lovely Base16 colour scheme.",
    `Source code for this site available at: ${github}`
  ]

  messages.forEach(message => {
    console.log(message)
  })
}

function run () {
  displayGreeting()
}

function onReady (callback) {
  document.addEventListener('DOMContentLoaded', () => {
    callback()
  })
}

onReady(run)