const getCovid = async () => {
  let date = document.querySelector("#covid-search").value
  const urlC = ` https://data.cityofchicago.org/resource/naz8-j4nc.json?lab_report_date=${date}T00:00:00.000`
  try {
    const response = await axios.get(urlC)
    removeDate()
    console.log(response.data)
    response.data.forEach((day) => {
      // statement on total cases cases_total  
      let totalCases = document.querySelector("#Covid")
      let casesT = document.createElement("p")
      casesT.innerHTML = `Total Cases: ${day.cases_total}`
      totalCases.appendChild(casesT)
      // total people hospitalized hospitalizations_total 
      let totalhospitalized = document.querySelector("#Covid")
      let peopleHosp = document.createElement("p")
      peopleHosp.innerHTML = `Total hospitalized: ${day.hospitalizations_total}`
      totalhospitalized.appendChild(peopleHosp)

      // statement to only display day.deaths 
      let dayDeaths = document.querySelector("#Covid")
      let deathsT = document.createElement('p')
      deathsT.innerHTML = `Death Total: ${day.deaths_total}`
      dayDeaths.appendChild(deathsT)
    })

  } catch (error) {
    console.log(error)
  }
}
// step 4 Grab data for testings sites from API  
const getTesting = async () => {
  
  let zipcode = document.querySelector("#testing-search").value
  console.log(zipcode)
  const urlT = `https://data.cityofchicago.org/resource/thdn-3grx.json?$where=address%20like%20%27%25${zipcode}%25%27`

  console.log(urlT)
  try {

    const response = await axios.get(urlT)
    removeLocation()
    console.log(response.data)

    response.data.forEach((site) => {
      // statement to only display site.facilty when input equal actuall zip 
      let testingSite = document.querySelector("#Testing")
      let locations = document.createElement('p')
      locations.innerHTML = site.facility

      testingSite.appendChild(locations)
      //console.log(testingSite)
      // statement  for address  
      let testingAddress = document.querySelector("#Testing")
      let tAddress = document.createElement('p')
      tAddress.innerHTML = site.address
      testingSite.appendChild(tAddress)

      // statement for phone number   
      let contactNumber = document.querySelector("#Testing")
      let number = document.createElement("p")
      number.innerHTML = site.phone
      contactNumber.appendChild(number)
      // statement for website if available
      let websiteLink = document.querySelector("#Testing")
      let website = document.createElement("a")
      let websiteUrl = website.innerHTML = site.web_site.url
      website.setAttribute("href", websiteUrl)
      website.setAttribute("target", "_blank")
      websiteLink.appendChild(website)
    })

  } catch (error) {
    console.log(error)
  }
}
let searchZip = document.querySelector('#location-form')
searchZip.addEventListener('submit', locationValue)
const buttonClick = document.querySelector("#covid-form")
buttonClick.addEventListener("submit", covidValue)

const removeDate = () => {
  const oldChoice = document.querySelector('#Covid')
  while (oldChoice.lastChild) {
    oldChoice.removeChild(oldChoice.lastChild)
  }
}

const removeLocation = () => {
  const oldChoice = document.querySelector('#Testing')
  while (oldChoice.firstChild) {
    oldChoice.removeChild(oldChoice.firstChild)
  }
}

function covidValue(e) {
  e.preventDefault()
  let dateValue = document.querySelector("#covid-search").value
  getCovid(dateValue)
}
function locationValue(e) {
  e.preventDefault()
  let locationValue = document.querySelector("#testing-search").value
  getTesting(locationValue)
}
