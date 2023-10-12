const searchButton = document.getElementById('searchButton')
const inputKeyword = document.getElementById('inputCountry')

const activeCases = document.getElementById('activeCase')
const newCases = document.getElementById('newCase')
const recoveredCases = document.getElementById('recoveredCase')
const totalCases = document.getElementById('totalCase')
const totalDeaths = document.getElementById('totalDeath')
const totalTests = document.getElementById('totalTest')


const url = 'https://covid-193.p.rapidapi.com/countries';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56d37afffemsh0918e7114c82e66p16e319jsn932c3ad91481',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
	
function renderHTML(data) {
	activeCases.innerHTML = data.cases.active;
	newCases.innerHTML = data.cases.new;
	recoveredCases.innerHTML = data.cases.recovered;
	totalCases.innerHTML = data.cases.total;
	totalDeaths.innerHTML = data.deaths.total;
	totalTests.innerHTML = data.tests.total;
}

	searchButton.addEventListener("click", () => {
		const inputKeyword = document.getElementById("inputCountry").value
		document.getElementById("myCountry").innerHTML = inputKeyword
		
	
		fetch(`https://covid-193.p.rapidapi.com/statistics?country=${inputKeyword}`, options)
		.then((result) => result.json())
		.then((data) => {
		renderHTML(data.response[0])
		console.log(data.response)
		})
		.catch(err => {
		// error handling
		console.log('Terjadi error!! Mohon Masukkan Nama Negara dengan Benar')
		})
		.finally( () => {
		console.log('finally')
		})

	})

	