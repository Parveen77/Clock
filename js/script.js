`use strict`

function setClock(){
    var date=new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
var time = new Date().toLocaleTimeString();
var weekday =new Date().toLocaleDateString('en-us', { weekday:"long"});


document.getElementById("date").textContent = date; //it will print on html page
document.getElementById("time").textContent = time;
document.getElementById("weekday").textContent = weekday;
};

window.onload= setClock();

setInterval(function(){

    setClock();

}, 1000);

let btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);

var color = document.getElementsByTagName("button")[0].style.backgroundColor;
color = 'white';

function handleClick(event){
    console.log("im clicked");
    
    if(color == 'white'){
    document.getElementsByClassName('clock')[0].style.borderColor = "#333";
    var tags = document.getElementsByTagName('h1'),i ,len;

    for (i=0; i < tags.length; i++){
        tags[i].style.color = "white";
    };

    color = "red"
    } 
    else if(color == 'red'){
    document.getElementsByClassName('clock')[0].style.borderColor = "red";
    var tags = document.getElementsByTagName('h1'),i ,len;

    for (i=0; i < tags.length; i++){
        tags[i].style.color = "red";
    };

    color = "white"
    };
}
