const userInput = document.getElementById('user-input')
const meterFeet = document.getElementById('meter-feet')
const litersGallon = document.getElementById('liters-gallon')
const kilosPounds = document.getElementById('kilos-pounds')


userInput.addEventListener('input', displayResults)

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
})


function displayResults() {
  const num = userInput.value

  if (!num || num <= 0) {
    meterFeet.innerText = `0 meters = 0 feet | 0 feet = 0 meters`
    litersGallon.innerText = `0 liters = 0 gallons | 0 gallons = 0 liters`
    kilosPounds.innerText = `0 kilos = 0 pounds | 0 pounds = 0 kilos`
  } else if (num == 1) {
    meterFeet.innerText = `${num} meter = ${convertMetersToFeet(num)} feet | ${num} foot = ${convertFeetToMeters(num)} meters`
    litersGallon.innerText = `${num} liter = ${convertLitersToGallons(num)} gallons | ${num} gallon = ${convertGallonsToLiters(num)} liters`
    kilosPounds.innerText = `${num} kilo = ${convertKilosToPounds(num)} pounds | ${num} pound = ${convertPoundsToKilos(num)} kilos`
  } else {
    meterFeet.innerText = `${num} meters = ${convertMetersToFeet(num)} feet | ${num} feet = ${convertFeetToMeters(num)} meters`
    litersGallon.innerText = `${num} liters = ${convertLitersToGallons(num)} gallons | ${num} gallons = ${convertGallonsToLiters(num)} liters`
    kilosPounds.innerText = `${num} kilos = ${convertKilosToPounds(num)} pounds | ${num} pounds = ${convertPoundsToKilos(num)} kilos`
  }
}

function convertMetersToFeet(numberToConvert) {
  const metersToFeet = (numberToConvert * 3.28084).toFixed(3)
  return metersToFeet
}

function convertFeetToMeters(numberToConvert) {
  const feetToMeters = (numberToConvert * 0.3048).toFixed(3)
  return feetToMeters
}

function convertLitersToGallons(numberToConvert) {
  const litersToGallons = (numberToConvert * 0.2641).toFixed(3)
  return litersToGallons
}

function convertGallonsToLiters(numberToConvert) {
  const gallonsToLiters = (numberToConvert * 3.7854).toFixed(3)
  return gallonsToLiters
}

function convertKilosToPounds(numberToConvert) {
  const kilostoPounds = (numberToConvert * 2.20462).toFixed(3)
  return kilostoPounds
}

function convertPoundsToKilos(numberToConvert) {
  const poundsToKilos = (numberToConvert * 0.453592).toFixed(3)
  return poundsToKilos
}
