function tocheckifrollercssnavisinthedocumentFIRST(){
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
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentFIRST();















/* for second navbar */

function tocheckifrollercssnavisinthedocumentSECOND(){
var i = 1; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentSECOND();


/* for third navbar */

function tocheckifrollercssnavisinthedocumentTHIRD(){
var i = 2; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentTHIRD();



/* for fourth navbar */

function tocheckifrollercssnavisinthedocumentFOURTH(){
var i = 3; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentFOURTH();





/* for fifth navbar */

function tocheckifrollercssnavisinthedocumentFIFTH(){
var i = 4; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentFIFTH();



/* for sixth navbar */

function tocheckifrollercssnavisinthedocumentSIXTH(){
var i = 5; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentSIXTH();




/* for seventh navbar */

function tocheckifrollercssnavisinthedocumentSEVENTH(){
var i = 6; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentSEVENTH();



/* for eight navbar */

function tocheckifrollercssnavisinthedocumentEIGHT(){
var i = 7; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentEIGHT();





/* for ninth navbar */

function tocheckifrollercssnavisinthedocumentNINTH(){
var i = 8; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentNINTH();





/* for 10 navbar */

function tocheckifrollercssnavisinthedocument10(){
var i = 9; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument10();



/* for 11 navbar */

function tocheckifrollercssnavisinthedocument11(){
var i = 10; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument11();



/* for 12 navbar */

function tocheckifrollercssnavisinthedocument12(){
var i = 11; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument12();



/* for 13 navbar */

function tocheckifrollercssnavisinthedocument13(){
var i = 12; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument13();


/* for 14 navbar */

function tocheckifrollercssnavisinthedocument14(){
var i = 13; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument14();



/* for 15 navbar */

function tocheckifrollercssnavisinthedocument15(){
var i = 14; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument15();


/* for 16 navbar */

function tocheckifrollercssnavisinthedocument16(){
var i = 15; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument16();



/* for 17 navbar */

function tocheckifrollercssnavisinthedocument17(){
var i = 16; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument17();


/* for 18 navbar */

function tocheckifrollercssnavisinthedocument18(){
var i = 17; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument18();



/* for 19 navbar */

function tocheckifrollercssnavisinthedocument19(){
var i = 18; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument19();



/* for 20 navbar */

function tocheckifrollercssnavisinthedocument20(){
var i = 19; 
var nav =document.getElementsByClassName("nav")[i];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[i];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-toggler")[i].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[i];				

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
document.getElementsByClassName("nav-foot")[i].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[i];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[i];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition =("max-height ") + (transition_remove + "s");
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocument20();
