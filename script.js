window.onload = function(){
var local =localStorage.getItem("dark");
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
}


setTimeout(function greet(){ 
var pic =localStorage.getItem("form");
var a =localStorage.getItem("name");
var b =localStorage.getItem("num");

document.getElementsByClassName("pic-name")[0].innerHTML = a;
document.getElementsByClassName("pic-num")[0].innerHTML ="+91 " + b;
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


function tog(){
	if(document.getElementById('toggle').innerHTML ==="brightness_4") {
	  document.getElementById('toggle').innerHTML ="brightness_6";
		document.body.classList.add("dark-theme");
		document.body.classList.remove("light-theme");
		localStorage.setItem("dark", 2);
	}else {
		document.getElementById('toggle').innerHTML ="brightness_4";
		document.body.classList.add("light-theme");
		document.body.classList.remove("dark-theme");
		localStorage.setItem("dark", 1);
	}
}


function sidebc(){
document.getElementsByClassName("sidebar")[0].style.width ="0px";		
document.body.classList.remove("body");
}

document.getElementById("menu").onclick = function(){
document.getElementsByClassName("sidebar")[0].style.width ="250px";		
document.body.classList.add("body");
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementsByClassName('sidebar')[0];
    if (!container.contains(e.target)) {
        document.getElementsByClassName("sidebar")[0].style.width ="0px";		
document.body.classList.remove("body");
    }});				


var fixed = document.getElementsByClassName("sidebar")[0]; fixed.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
var fixed = document.getElementsByClassName("pic-form")[0]; fixed.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);







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
}
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
  document.getElementById('list').insertBefore(span, null);
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