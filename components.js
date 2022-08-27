/* COMPONENTS */
const connav = document.getElementsByTagName("nav")[1];
if(document.body.contains(connav)){
const dobaarnava = document.getElementsByClassName("nav")[1];
if(document.getElementsByTagName("nav")[1].contains(dobaarnava)){
console.log("Sorry, till now Rollercss is not able to read more than one navbar of same kind in one document.");
}
const dobaarsidenava = document.getElementsByClassName("side-nav")[1];
if(document.getElementsByTagName("nav")[1].contains(dobaarsidenava)){
console.log("Sorry, till now Rollercss is not able to read more than one navbar of same kind in one document.");
}
}


/* navbar */
const nava = document.getElementsByClassName("nav")[0];
if(document.getElementsByTagName("nav")[0].contains(nava)){
document.getElementsByClassName("nav-toggler")[0].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[0];
if(x.style.maxHeight ==="100vh") {
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";
}else {
x.style.maxHeight ="100vh";
x.style.transition ="max-height 1s";
}				
}

setInterval(function apneisapowerfultool(){
var x = window.matchMedia("(min-width: 992px)");
if (x.matches){
document.getElementsByClassName("nav-foot")[0].style.maxHeight ="100vh";
}			
}),1000;


document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[0];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[0];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
}});				
}











/* side-navbar */
const sidenava = document.getElementsByClassName("side-nav")[0];
if(document.getElementsByTagName("nav")[0].contains(sidenava)){
document.getElementsByClassName("side-nav-toggler")[0].onclick = function(){
document.getElementsByClassName("side-nav-foot")[0].style.left ="0%";			
}
document.getElementsByClassName("side-nav-closer")[0].onclick = function(){
document.getElementsByClassName("side-nav-foot")[0].style.left ="-100%";			
}

window.onload = function(){
var x = window.matchMedia("(max-width: 992px)");
if (x.matches){
var x =document.getElementsByClassName("side-nav-foot")[0];
var y = x.getAttribute("nav-width");
x.style.width = y;
}
}

setInterval(function sidewaalanav(){
var x = window.matchMedia("(min-width: 992px)");
var y = document.getElementsByClassName("side-nav-foot")[0].getAttribute("nav-width");
if (x.matches){
document.getElementsByClassName("side-nav-foot")[0].style.left ="0%";			
document.getElementsByClassName("side-nav-foot")[0].style.width = "auto";	
}			
else{
document.getElementsByClassName("side-nav-foot")[0].style.width = y;
}
}),1000;


document.addEventListener('mouseup', function(e) {
var containerrrrrrrrrr = document.getElementsByClassName("side-nav-foot")[0];
 if (!containerrrrrrrrrr.contains(e.target)){
document.getElementsByClassName("side-nav-foot")[0].style.left ="-100%";
}});				
}