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
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentFIRST();

















































/* for second navbar */
function tocheckifrollercssnavisinthedocumentSECOND(){
var nav =document.getElementsByClassName("nav")[1];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[1];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[1].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[1];				

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
document.getElementsByClassName("nav-toggler")[1].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[1];				

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
document.getElementsByClassName("nav-foot")[1].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[1];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[1];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentSECOND();


/* for third navbar */
function tocheckifrollercssnavisinthedocumentTHIRD(){
var nav =document.getElementsByClassName("nav")[2];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[2];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[2].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[2];				

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
document.getElementsByClassName("nav-toggler")[2].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[2];				

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
document.getElementsByClassName("nav-foot")[2].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[2];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[2];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentTHIRD();



/* for fourth navbar */
function tocheckifrollercssnavisinthedocumentFOURTH(){
var nav =document.getElementsByClassName("nav")[3];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[3];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[3].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[3];				

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
document.getElementsByClassName("nav-toggler")[3].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[3];				

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
document.getElementsByClassName("nav-foot")[3].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[3];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[3];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentFOURTH();


/* for fifth navbar */
function tocheckifrollercssnavisinthedocumentFIFTH(){
var nav =document.getElementsByClassName("nav")[4];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[4];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[4].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[4];				

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
document.getElementsByClassName("nav-toggler")[4].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[4];				

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
document.getElementsByClassName("nav-foot")[4].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[4];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[4];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentFIFTH();

/* for sixth navbar */
function tocheckifrollercssnavisinthedocumentSIXTH(){
var nav =document.getElementsByClassName("nav")[5];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[5];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[5].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[5];				

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
document.getElementsByClassName("nav-toggler")[5].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[5];				

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
document.getElementsByClassName("nav-foot")[5].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[5];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[5];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentSIXTH();



/* for seventh navbar */
function tocheckifrollercssnavisinthedocumentSEVENTH(){
var nav =document.getElementsByClassName("nav")[6];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[6];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[6].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[6];				

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
document.getElementsByClassName("nav-toggler")[6].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[6];				

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
document.getElementsByClassName("nav-foot")[6].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[6];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[6];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentSEVENTH();


/* for eigth navbar */
function tocheckifrollercssnavisinthedocumentEIGHT(){
var nav =document.getElementsByClassName("nav")[7];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[7];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[7].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[7];				

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
document.getElementsByClassName("nav-toggler")[7].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[7];				

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
document.getElementsByClassName("nav-foot")[7].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[7];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[7];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentEIGHT();


/* for ninth navbar */
function tocheckifrollercssnavisinthedocumentNINTH(){
var nav =document.getElementsByClassName("nav")[8];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[8];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[8].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[8];				

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
document.getElementsByClassName("nav-toggler")[8].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[8];				

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
document.getElementsByClassName("nav-foot")[8].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[8];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[8];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentNINTH();



/* for tenth navbar */
function tocheckifrollercssnavisinthedocumentTENTH(){
var nav =document.getElementsByClassName("nav")[9];
if(document.body.contains(nav)){
var transition = nav.getAttribute("nav-transition");
var transition_remove = transition * 0.6;
var transition_add = transition * 1.2;
var blur = document.getElementsByClassName("nav-down-blur")[9];




if(nav.contains(blur)){
document.getElementsByClassName("nav-toggler")[9].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[9];				

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
document.getElementsByClassName("nav-toggler")[9].onclick = function(){
var x = document.getElementsByClassName("nav-foot")[9];				

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
document.getElementsByClassName("nav-foot")[9].style.maxHeight ="100vh";
document.body.classList.remove("jabnavbarnichetoblur");
}			
}),1000;



document.addEventListener('mouseup', function(e) {
var x = document.getElementsByClassName("nav-foot")[9];
var containerrrrrrrrrrrrrrrrrrrrrr = document.getElementsByClassName("nav")[9];
 if (!containerrrrrrrrrrrrrrrrrrrrrr.contains(e.target)){
x.style.maxHeight ="0px";
x.style.transition ="max-height 0.3s";  
document.body.classList.remove("jabnavbarnichetoblur");
}});	
}
}
tocheckifrollercssnavisinthedocumentTENTH();





/* navbar ended*/