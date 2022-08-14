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
 document.getElementById("pic2").innerHTML = '<img class="pic-pic" src="' + pic + '"/>';
}






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






setTimeout(function greet(){ 
var pic =localStorage.getItem("form");
var a =localStorage.getItem("name");
var b =localStorage.getItem("num");

document.getElementsByClassName("pic-name")[0].innerHTML = a;
document.getElementsByClassName("pic-num")[0].innerHTML ="+91 " + b;
document.getElementsByClassName("pic-id")[0].innerHTML ="Id:" + generateString(8);
}, 300);


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

document.getElementsByClassName("pic-name")[0].style.opacity ="0";
document.getElementsByClassName("pic-num")[0].style.opacity ="0";
document.getElementsByClassName("pic-id")[0].style.opacity ="0";
}

document.getElementById("menu").onclick = function(){
document.getElementsByClassName("sidebar")[0].style.right ="0px";		
document.body.classList.add("body");

document.getElementsByClassName("pic-name")[0].style.opacity ="1";
document.getElementsByClassName("pic-num")[0].style.opacity ="0.8";
document.getElementsByClassName("pic-id")[0].style.opacity ="0.8";
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
document.getElementsByClassName("pic-name")[0].style.opacity ="0";
document.getElementsByClassName("pic-num")[0].style.opacity ="0";
document.getElementsByClassName("pic-id")[0].style.opacity ="0";
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





/* content box toggle */
document.getElementById("expand").onclick = function(){
var x = document.getElementById("content"); 
var y = document.getElementById("expand");
if(x.style.height ==="44px") {	
x.style.height ="100%";	
y.style.transform ="none";	
}else {
x.style.height ="44px";				
y.style.transform ="rotate(180deg)";	
}				
}



function cop() {
var x =document.getElementById("step-code-one").innerText;				
navigator.clipboard.writeText(x);
}






























