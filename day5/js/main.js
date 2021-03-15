
let API = '35fd2c754ec4d537af3fe689be3dd14b'

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname},${state}&appid=${API}`)
//     .then(response => response.json)
//     .then(data => console.log(data))

// function handleSubmit(event) {
//     // event.preventDefault();
    
//     const data = new FormData(event.target);
//     const cname = data.get('cname');
//     const state = data.get('state');
//     console.log({cname, state});
//     return cname, state;

//     // let querycname = document.querySelector('#cname');
//     // let querystate = document.querySelector('#state');
//     // console.log(`Query: ${querycname}, ${querystate}`);
// }
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);





const getData = async(cname, state) => {
    // let cname = await handleSubmit()
    // let state = await handleSubmit()
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cname},${state}&appid=${API}`)

    console.log(response)    
    console.log("Temp", response.data.main.temp)
    console.log("Min Temp", response.data.main.temp_min)
    console.log("Max Temp", response.data.main.temp_max)
    console.log("Humidity", response.data.main.humidity)
    console.log("Weather", response.data.weather[0].main)
    console.log("Icon", response.data.weather[0].icon)
    return response.data
};



const DOM_Elements = {
    weatherList: '.weather'
};


const createList = (temp, temp_max, humidity, main, icon) => {
    const html = `<a href="#" class = "list-group-item list-group-item-action list-group-item-light">${temp} ${temp_max} ${humidity} ${main} ${icon}</a>`
    document.querySelector(DOM_Elements.weatherList).insertAdjacentHTML('beforeend', html);

};

const loadData = async (event) => {
    event.preventDefault()
    cname = document.getElementById("weather").elements[0].value;
    state = document.getElementById("weather").elements[1].value;
    const new_data = await getData(cname, state);
    createList(new_data.main.temp, new_data.main.temp_max, new_data.main.humidity, new_data.weather[0].main, new_data.weather[0].icon)
};



