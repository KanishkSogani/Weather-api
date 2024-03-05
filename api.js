link = "https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=eb1c8199eeb225240e0f485a9dd6807a";

var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
var obj = JSON.parse(this.response);
console.log(obj);
document.getElementById("location").innerHTML = obj.name;
document.getElementById("weather").innerHTML = obj.weather[0].description;
document.getElementById("temp").innerHTML =Math.round(obj.main.temp-273);
document.getElementById('icon').src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
}   
if(request.status>=200 && request.status < 400){
    var temp = obj.main.temp;
} 
else{
    console.log("The city data is not available");
}
request.send();