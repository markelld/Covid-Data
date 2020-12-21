// Testing site data url =  https://data.cityofchicago.org/resource/thdn-3grx.json
// covid date url = https://data.cityofchicago.org/resource/yhhz-zm2v.json?zip_code=${}
// step 1  Grab Covid data from API
const getCovid = async () => {
  const urlC = `https://data.cityofchicago.org/resource/yhhz-zm2v.json` 
  try {
    const response = await axios.get(urlC) 
    console.log(response)
  } catch (error) {
    console.log(error)
  }
} 
getCovid()
// step 2 Add Data to Dom after selecting covid id in html  

// step 3 Create remove function (event handler) to get rid of search whenever ner search is done in that container 

// step 4 Grab data for testings sites from API  
const getTesting = async () => {
  const urlT = `https://data.cityofchicago.org/resource/thdn-3grx.json` 
  try {
    const response = await axios.get(urlT) 
    console.log(response)
  } catch (error) {
    console.log(error)
  }
} 

getTesting() 
// step 5 Add Data to Dom after selecting Testing id in html 

// step 6 Create remove function (event handler) to get rid of search whenever  search is done in that container