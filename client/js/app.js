import Events from './events'

function displayGreeting () {
  const github = 'https://github.com/championchap/ErikWatson.me'
  const messages = [
    'Hello, nosey.',
    "There isn't much to see in here, really.",
    'This site was made with Express, Pug, SASS, ES6 and Gulp.',
    "It really didn't need to be.",
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

Events.onReady(() => {
  run()
})
