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

function snow () {
  snowfall.start({
    bg: '#232323',
    density: 75
  })
}

function run () {
  const searchParams = new URLSearchParams(window.location.search)
  const date = new Date()
  const month = date.getMonth()
  const shouldSnow = (month === 11 || searchParams.has('snow'))
    ? true
    : false

  if (shouldSnow) {
    snow()
  }

  displayGreeting()
}

function onReady (callback) {
  document.addEventListener('DOMContentLoaded', () => {
    callback()
  })
}

onReady(run)