const apikey = "7a63cb9b6c277b22e53a43cb4bde51fc";
const inpt = document.querySelector(".weather-inp");
const show = document.querySelector(".show");
const loader = document.querySelector(".loader");
const btn = document.querySelector(".weather");

const getWeather = ()=>{
     loader.style.display = "block"
     show.style.display = "none"
     const countryName = inpt.value
    const api =`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=7a63cb9b6c277b22e53a43cb4bde51fc`;
    fetch(api).then((res)=>{
        return res.json()
    }).then((data)=>{
    loader.style.display = "none"
    show.style.display = "block"
    console.log(data);
    let temp = data.main.temp;
    temp = Math.floor(temp-273.15)
    const iconApi = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const display = ` <div class="info">
    <h3>${data.name}</h3>
    <p>${Math.floor(temp)}&#8451</p>
     <p class="desc">${data.weather[0].description}</p>
     <img src=${iconApi}>
   </div>`
   show.innerHTML = display;
    })
   }
    inpt.addEventListener("keyup",(e)=>{
 if(e.keyCode == 13){
getWeather()
 inpt.value = ""
 }
})
 btn.addEventListener("click",()=>{
    getWeather()
    inpt.value =""
 })