document.getElementById("firstPara").innerHTML += "<span class='tan'> This is new tan text</span>";
let images = document.getElementsByTagName("img");

for(let image of images){
    image.width = "250";
}

let lightBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");
console.log(lightBlueSpans);

for(let span of lightBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of lightBlueSpans){
    span.style.color = "#3C5E73";
}

let svgs = document.querySelectorAll("#svgs svg");

let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

for(let i = 0; i <svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

document.querySelector("#query .bold").style.color = "#7C9EA6";


