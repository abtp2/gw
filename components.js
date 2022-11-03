function tocheckifrollercssnavisinthedocument(){
var nav =document.getElementsByClassName("nav")[0];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[0];



if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[0].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[0];				

    if(x.style.maxHeight ==="100vh") {
    x.style.maxHeight ="0px";
    x.style.transition =("max-height ") + (transition_remove + "s"); document.body.classList.remove("jabnavbarnichetoblur");
         } 
    else {
    x.style.maxHeight ="100vh";
    x.style.transition =("max-height ") + (transition_add + "s");
document.body.classList.add("jabnavbarnichetoblur");
         }		
}
}
else{
document.getElementsByClassName("nav-toggler")[0].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[0];				

    if(x.style.maxHeight ==="100vh") {
    x.style.maxHeight ="0px";
    x.style.transition =("max-height ") + (transition_remove + "s");
         } 
    else {
    x.style.maxHeight ="100vh";
    x.style.transition =("max-height ") + (transition_add + "s");
         }		
}
}












setInterval(function apneisapowerfultool(){
var x = window.matchMedia("(min-width: 992px)");
if (x.matches){
document.getElementsByClassName("nav-foot")[0].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[0];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[0];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument();
