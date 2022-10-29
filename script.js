window.onload = function(){
var local =localStorage.getItem("dark");
var pic =localStorage.getItem("xyz");
document.body.classList.remove("loader");
if(local == 1) {
document.getElementById('toggle').innerHTML ="brightness_4";
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
}
else if(local == 2) {
document.getElementById('toggle').innerHTML ="brightness_6";
document.body.classList.add("dark-theme");
document.body.classList.remove("light-theme");
}
else {
document.body.classList.add("light-theme");	
}
/*  
 document.getElementById("pic").innerHTML = '<img class="pic-pic" src="' + pic + '"/>';
 document.getElementById("pic2").innerHTML = '<img class="pic-pic" src="' + pic + '"/>'; */
}








/*  
// program to generate random strings

// declare all characters
const characters ='abcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(8));
 */






/*  
setTimeout(function greet(){ 
var pic =localStorage.getItem("form");
var a =localStorage.getItem("name");
var b =localStorage.getItem("num");

document.getElementsByClassName("pic-name")[0].innerHTML = a;
document.getElementsByClassName("pic-num")[0].innerHTML ="+91 " + b;
document.getElementsByClassName("pic-id")[0].innerHTML ="Id:" + generateString(8);
if(pic == 1) {
document.getElementsByClassName("pic-form")[0].style.display ="none";				
}
else if(pic != 1) {
document.getElementsByClassName("pic-form")[0].style.display ="flex";				
}
else{
document.getElementsByClassName("pic-form")[0].style.display ="none";				
}
}, 300);
 */







function tog(){
	if(document.getElementById('toggle').innerHTML ==="brightness_4") {
	  document.getElementById('toggle').innerHTML ="brightness_6";
	  document.getElementById('toggle').style.transform ="rotate(360deg)";
	  document.getElementById('toggle').style.transition ="all 0.3s";
		document.body.classList.add("dark-theme");
		document.body.classList.remove("light-theme");
		localStorage.setItem("dark", 2);
	}else {
		document.getElementById('toggle').innerHTML ="brightness_4";
		document.getElementById('toggle').style.transform ="rotate(-360deg)";
		document.getElementById('toggle').style.transition ="all 0.3s";
		document.body.classList.add("light-theme");
		document.body.classList.remove("dark-theme");
		localStorage.setItem("dark", 1);
	}
}


function sidebc(){
document.getElementsByClassName("sidebar")[0].style.right ="-100%";		
document.body.classList.remove("body");
/*  
document.getElementsByClassName("pic-name")[0].style.opacity ="0";
document.getElementsByClassName("pic-num")[0].style.opacity ="0";
document.getElementsByClassName("pic-id")[0].style.opacity ="0"; */
}

document.getElementById("menu").onclick = function(){
document.getElementsByClassName("sidebar")[0].style.right ="0px";		
document.body.classList.add("body");

/*  
document.getElementsByClassName("pic-name")[0].style.opacity ="1";
document.getElementsByClassName("pic-num")[0].style.opacity ="0.8";
document.getElementsByClassName("pic-id")[0].style.opacity ="0.8"; */
}

/*  
document.getElementById("search").onclick = function(){
document.getElementById("search-box").style.display="block";		
document.body.classList.add("display");
document.getElementById("search-int").focus();
document.getElementById("search-int").click();
}
 */





document.addEventListener('mouseup', function(e) {
    var container = document.getElementsByClassName('sidebar')[0];
    if (!container.contains(e.target)) {
        document.getElementsByClassName("sidebar")[0].style.right ="-100%";		
document.body.classList.remove("body");

/*  
document.getElementsByClassName("pic-name")[0].style.opacity ="0";
document.getElementsByClassName("pic-num")[0].style.opacity ="0";
document.getElementsByClassName("pic-id")[0].style.opacity ="0"; */
    }});	

/*  
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById("search-box");
    if (!container.contains(e.target)) {
document.getElementById("search-box").style.display="none";		
document.body.classList.remove("display");  
    }});	
 */

			




var fixed = document.getElementsByClassName("sidebar")[0]; fixed.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);


/*  
var fixed = document.getElementsByClassName("pic-form")[0]; fixed.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
 */





/*  
function pic(){
var x =document.getElementById("name-form").value;
var y =document.getElementById("num-form").value;
var z =document.getElementById("email-form").value;

localStorage.setItem("name", x);
localStorage.setItem("num", y);
localStorage.setItem("email", z);
localStorage.setItem("form", 1);


var a =localStorage.getItem("name");
var b =localStorage.getItem("num");

document.getElementsByClassName("pic-name")[0].innerHTML = a;
document.getElementsByClassName("pic-num")[0].innerHTML ="+91 " + b;

document.getElementsByClassName("pic-form")[0].style.display ="none";
console.log(x);
} */
function choosepic(){
document.getElementById("files").click();				
}





function edt(){
var a =localStorage.getItem("name");
var b =localStorage.getItem("num");
var c =localStorage.getItem("email");
document.getElementsByClassName("pic-form")[0].style.display ="flex";				
document.getElementById("side-back").click();

document.getElementById("name-form").value = a;
document.getElementById("num-form").value = b;
document.getElementById("email-form").value = c;
}








































/*  
var imagesObject = [];

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = function(e) {
          displayImgData(e.target.result)
          addImage(e.target.result);
      };

      reader.readAsDataURL(f);
    }
}

function loadFromLocalStorage(){
  var images = JSON.parse(localStorage.getItem("images"))

  if(images && images.length > 0){
    imagesObject = images;
    
    displayNumberOfImgs();
    images.forEach(displayImgData);
  }
}

function addImage(imgData){
  imagesObject.push(imgData);
  displayNumberOfImgs();
  localStorage.setItem("images", JSON.stringify(imagesObject));
}

function displayImgData(imgData){
  var span = document.createElement('span');
  span.innerHTML = '<img class="thumb" src="' + imgData + '"/>';
 
 document.getElementById("pic").innerHTML = '<img class="pic-pic" src="' + imgData + '"/>';
 document.getElementById("pic2").innerHTML = '<img class="pic-pic" src="' + imgData + '"/>';
 
document.getElementById("getstart").onclick = function(){
localStorage.setItem("xyz", imgData); 				
window.location ="getstarted.html";
}
document.getElementById("getstart2").onclick = function(){
localStorage.setItem("xyz", imgData); 				
window.location ="getstarted.html";
}
  document.getElementById('list').insertBefore(span, null);
  
document.getElementById("papa-form").onsubmit = function(){
var x =document.getElementById("name-form").value;
var y =document.getElementById("num-form").value;
var z =document.getElementById("email-form").value;

localStorage.setItem("name", x);
localStorage.setItem("num", y);
localStorage.setItem("email", z);
localStorage.setItem("form", 1);
localStorage.setItem("xyz", imgData);


var a =localStorage.getItem("name");
var b =localStorage.getItem("num");

document.getElementsByClassName("pic-name")[0].innerHTML = a;
document.getElementsByClassName("pic-num")[0].innerHTML ="+91 " + b;

document.getElementsByClassName("pic-form")[0].style.display ="none";
console.log(x);
}

}


function displayNumberOfImgs(){
  if(imagesObject.length > 0){

    document.getElementById("state").innerHTML = imagesObject.length + " image" + ((imagesObject.length > 1) ? "s" : "") + " stored in your browser";
    
    document.getElementById("deleteImgs").style.display = "inline";
    
  } else {
    document.getElementById("state").innerHTML = "No images stored in your browser.";
    document.getElementById("deleteImgs").style.display = "none";
  }
  
  
}

function deleteImages(){
  imagesObject = [];
  localStorage.removeItem("images");
  displayNumberOfImgs()
  document.getElementById('list').innerHTML = "";
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
document.getElementById('deleteImgs').addEventListener("click", deleteImages);
loadFromLocalStorage();
 */







window.onscroll = function(){
var a = document.getElementById("bic");
var b = document.getElementById("hs");
var c = document.getElementById("fi");
var d = document.getElementById("rq");
var e = document.getElementById("aos");
var vid = document.getElementsByTagName("video")[0];
			

var o = a.offsetTop - 400;
var t = b.offsetTop - 300;
var th = c.offsetTop - 400;
var f = d.offsetTop - 300;
var fi = e.offsetTop - 400;
var s = document.getElementById("plr").offsetTop - 300;
var se = document.getElementById("clr").offsetTop - 400;
var ei = document.getElementById("tem").offsetTop - 300;
var video = vid.offsetTop - 300;






if(document.body.scrollTop > video || document.documentElement.scrollTop > video){		
document.getElementById("vid-play").click();
}
else{
document.getElementById("vid-pause").click();
}




if(document.body.scrollTop > o || document.documentElement.scrollTop > o){		
a.style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > t || document.documentElement.scrollTop > t){
a.style.background ="transparent";				
}
else{
a.style.background ="transparent";
}

if(document.body.scrollTop > t || document.documentElement.scrollTop > t){		
b.style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > th || document.documentElement.scrollTop > th){
b.style.background ="transparent";				
}
else{
b.style.background ="transparent";
}

if(document.body.scrollTop > th || document.documentElement.scrollTop > th){		
c.style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > f || document.documentElement.scrollTop > f){
c.style.background ="transparent";				
}
else{
c.style.background ="transparent";
}

if(document.body.scrollTop > f || document.documentElement.scrollTop > f){		
d.style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > fi || document.documentElement.scrollTop > fi){
d.style.background ="transparent";				
}
else{
d.style.background ="transparent";
}


if(document.body.scrollTop > fi || document.documentElement.scrollTop > fi){		
e.style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > fi || document.documentElement.scrollTop > fi){
e.style.background ="transparent";				
}
else{
e.style.background ="transparent";
}


if(document.body.scrollTop > s || document.documentElement.scrollTop > s){		
document.getElementById("plr").style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > s || document.documentElement.scrollTop > s){
document.getElementById("plr").style.background ="transparent";				
}
else{
document.getElementById("plr").style.background ="transparent";
}


if(document.body.scrollTop > se || document.documentElement.scrollTop > se){		
document.getElementById("clr").style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > se || document.documentElement.scrollTop > se){
document.getElementById("clr").style.background ="transparent";				
}
else{
document.getElementById("clr").style.background ="transparent";
}


if(document.body.scrollTop > ei || document.documentElement.scrollTop > ei){		
document.getElementById("tem").style.background ="var(--blurbg)";
}
else if(document.body.scrollTop > ei || document.documentElement.scrollTop > ei){
document.getElementById("tem").style.background ="transparent";				
}
else{
document.getElementById("tem").style.background ="transparent";
}
}






document.getElementById("vid-play").onclick = function(){
document.getElementsByTagName("video")[0].play();
}
document.getElementById("vid-pause").onclick = function(){
document.getElementsByTagName("video")[0].pause();
}

