var primary = '#8d90b7'
var secondary = '#ffffff'


var amplitude = 0.00
var frequency = 0.00

snowfall.start({
  bg: '#232323',
  primary: '#8d90b7',
  secondary: '#ffffff',
  density: 150,
  wave: {
    frequency: 0.02,
    amplitude: 0,
  },
  gravity: {
    angle: 90,
    strength: 0.5
  },
  wind: {
    angle: 0,
    strength: 0
  }
})

var freqInput = document.getElementById('frequency')
var ampInput = document.getElementById('amplitude')
var densityInput = document.getElementById('density')

var freqCount = document.getElementById('frequency-count')
var ampCount = document.getElementById('amplitude-count')
var densityCount = document.getElementById('density-count')

freqInput.addEventListener('input', e => {
  frequency = e.target.value
  freqCount.innerText = e.target.value
})

ampInput.addEventListener('input', e => {
  amplitude = e.target.value
  ampCount.innerText = e.target.value
})

densityInput.addEventListener('input', e => {
  snowfall.setDensity(e.target.value)
  densityCount.innerText = e.target.value
})


var gravityAngleInput = document.getElementById('gravity-angle')
var gravityStrengthInput = document.getElementById('gravity-strength')

var gravityAngleCount = document.getElementById('gravity-angle-count')
var gravityStrengthCount = document.getElementById('gravity-strength-count')

gravityAngleInput.addEventListener('input', e => {
  gravityAngleCount.innerText = e.target.value
  snowfall.setGravity(parseFloat(e.target.value), parseFloat(gravityStrengthInput.value))
})

gravityStrengthInput.addEventListener('input', e => {
  gravityStrengthCount.innerText = e.target.value
  snowfall.setGravity(parseFloat(gravityAngleInput.value), parseFloat(e.target.value))
})

snowfall.setGravity(parseFloat(gravityAngleInput.value), parseFloat(gravityStrengthInput.value))


var windAngleInput = document.getElementById('wind-angle')
var windStrengthInput = document.getElementById('wind-strength')

var windAngleCount = document.getElementById('wind-angle-count')
var windStrengthCount = document.getElementById('wind-strength-count')

windAngleInput.addEventListener('input', e => {
  windAngleCount.innerText = e.target.value
  snowfall.setWind(parseFloat(e.target.value), parseFloat(windStrengthInput.value))
})

windStrengthInput.addEventListener('input', e => {
  windStrengthCount.innerText = e.target.value
  snowfall.setWind(parseFloat(windAngleInput.value), parseFloat(e.target.value))
})

snowfall.setWind(parseFloat(windAngleInput.value), parseFloat(windStrengthInput.value))

var primaryColour = document.getElementById('primary')
var secondaryColour = document.getElementById('secondary')

primaryColour.addEventListener('change', e => {
  primary = e.target.value
})

secondaryColour.addEventListener('change', e => {
  secondary = e.target.value
})


var bgInput = document.getElementById('bg')
var snowContainer = document.getElementById('snow-container')

bg.addEventListener('change', e => {
  snowContainer.style.backgroundColor = e.target.value
})


function makeConfig () {
  // NOTE: Dumb indenting here is on purpose
  return `{
  bg: "${bgInput.value}",
  primary: "${primaryColour.value}",
  secondary: "${secondaryColour.value}",
  density: ${parseInt(densityInput.value)},
  wave: {
    frequency: ${parseFloat(freqInput.value)},
    amplitude: ${parseFloat(ampInput.value)}
  },
  gravity: {
    angle: ${parseInt(gravityAngleInput.value)},
    strength: ${parseFloat(gravityStrengthInput.value)}
  },
  wind: {
    angle: ${parseInt(windAngleInput.value)},
    strength: ${parseFloat(windStrengthInput.value)}
  }
}`
}

function wrapInSnow (txt) {
  return `snowfall(${txt})`
}

const out = document.getElementById('output')

function outputToScreen () {
  out.innerText = wrapInSnow(makeConfig())
  hljs.highlightBlock(out)
}

outputToScreen()

primaryColour.addEventListener('change', e => {
  outputToScreen()
})

secondaryColour.addEventListener('change', e => {
  outputToScreen()
})

freqInput.addEventListener('change', e => {
  outputToScreen()
})

ampInput.addEventListener('change', e => {
  outputToScreen()
})

gravityAngleInput.addEventListener('change', e => {
  outputToScreen()
})

gravityStrengthInput.addEventListener('change', e => {
  outputToScreen()
})

windAngleInput.addEventListener('change', e => {
  outputToScreen()
})

windStrengthInput.addEventListener('change', e => {
  outputToScreen()
})

bgInput.addEventListener('change', e => {
  outputToScreen()
})


hljs.initHighlightingOnLoad()
