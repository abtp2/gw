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
