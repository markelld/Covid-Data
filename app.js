// Testing site data url =  https://data.cityofchicago.org/resource/thdn-3grx.json
// covid date url = https://data.cityofchicago.org/resource/yhhz-zm2v.json?zip_code=${} 
// `https://data.cityofchicago.org/resource/naz8-j4nc.json?lab_report_date=${date}T00:00:00.000`
// step 1  Grab Covid data from API
const getCovid = async () => {
  let date = document.querySelector("#covid-search").value
  const urlC = ` https://data.cityofchicago.org/resource/naz8-j4nc.json?lab_report_date=${date}T00:00:00.000` 
  try {
    const response = await axios.get(urlC) 
    console.log(response.data) 
    response.data.forEach((day) => {
       // statement to only display day.deaths when input equals actual date 
      let dayDeaths = document.querySelector("#covid") 
      let casesT = documnent.createElement('p')   
      casesT.innerHTML = day.deaths_total 
      dayDeaths.appendChild(casesT)
    })
  } catch (error) {
    console.log(error)
  }
} 
let searchDate = document.querySelector('#search-1') 
searchDate.addEventListener('click',getCovid)
// step 2 Add Data to Dom after selecting covid id in html  

// step 3 Create remove function (event handler) to get rid of search whenever ner search is done in that container 

// step 4 Grab data for testings sites from API  
const getTesting = async () => {
  //const urlT = `https://data.cityofchicago.org/resource/thdn-3grx.json`  
  //e.preventDefault()
  let zipcode = document.querySelector("#testing-search").value 
  console.log(zipcode)
  const urlT = `https://data.cityofchicago.org/resource/thdn-3grx.json?$where=address%20like%20%27%25${zipcode}%25%27`  
  //const urlT = //`https://data.cityofchicago.org/resource/thdn-3grx.json`
  console.log(urlT)
  try { 

    const response = await axios.get(urlT)
    console.log(response.data)
    response.data.forEach((site) => { 
      // statement to only display site.facilty when input equal actuall zip 
      
      let testingSite = document.querySelector("#testing") 
      let locations = document.createElement('p')   
      locations.innerHTML = site.facility 
      testingSite.appendChild(locations)
    // statement  for address 
    // statement for phone number  
    // statement for website if available
    
    
    
    
    
    })
  } catch (error) {
    console.log(error)
  }
} 
let searchZip = document.querySelector('#search-2') 
searchZip.addEventListener('click',getTesting)
// step 5 Add Data to Dom after selecting Testing id in html 

// step 6 Create remove function (event handler) to get rid of search whenever  search is done in that container