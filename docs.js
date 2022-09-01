var elements = document.getElementsByTagName('a'); for(var i = 0, len = elements.length; i < len; i++) { elements[i].onclick = function () { 
document.getElementsByClassName("sidebar")[0].style.right ="-100%";		
document.body.classList.remove("body");
} }

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
}





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
}

document.getElementById("menu").onclick = function(){
document.getElementsByClassName("sidebar")[0].style.right ="0px";		
document.body.classList.add("body");
}


document.addEventListener('mouseup', function(e) {
    var container = document.getElementsByClassName('sidebar')[0];
    if (!container.contains(e.target)) {
        document.getElementsByClassName("sidebar")[0].style.right ="-100%";		
document.body.classList.remove("body");
    }});	


document.getElementById("search").onclick = function(){
document.getElementById("search-box").style.display="block";		
document.body.classList.add("display");
document.getElementById("search-int").focus();
document.getElementById("search-int").click();
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById("search-box");
    if (!container.contains(e.target)) {
document.getElementById("search-box").style.display="none";		
document.body.classList.remove("display");  
    }});	








document.getElementById("search-form").onsubmit = function(){
var x =document.getElementById("search-int").value;
document.getElementById("search-box").style.display="none";		
document.body.classList.remove("display");
document.getElementById("search-int").value ="";
event.preventDefault();


if(x.indexOf('Border') > -1 ||
   x.indexOf('order-width') > -1){
var y=document.getElementById("border-width").offsetTop;
window.scrollTo(0, y);
}
}
