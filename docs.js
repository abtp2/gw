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
var search_text =document.getElementById("search-int").value;
var x = search_text.toLowerCase();
event.preventDefault();
document.getElementById("search-int").blur();
document.getElementById("search-rotate").style.opacity ="1";

function greet(){
document.getElementById("search-box").style.display="none";		
document.body.classList.remove("display");
document.getElementById("search-int").value ="";
document.getElementById("search-rotate").style.opacity ="0";
}
setTimeout(greet, 1500);









/* some for misunderstanding */
var font_color = ("Font color").toLowerCase();
var text_color = ("text color").toLowerCase();
var text_alignment = ("text align").toLowerCase();
var vertical_alignment = ("vertical align").toLowerCase();




/* MAIN SEARCH SECTION ❤*/
var container_ = document.getElementById("container").innerText.toLowerCase();
var display_ = document.getElementById("display").innerText.toLowerCase();
var float_ = document.getElementById("float").innerText.toLowerCase();
var overflow_ = document.getElementById("overflow").innerText.toLowerCase();
var position_ = document.getElementById("position").innerText.toLowerCase();
var visibility_ = document.getElementById("visibility").innerText.toLowerCase();
var z_index_ = document.getElementById("z-index").innerText.toLowerCase();
var colors_ = document.getElementById("colors").innerText.toLowerCase();
var font_family_ = document.getElementById("font-family").innerText.toLowerCase();
var font_size_ = document.getElementById("font-size").innerText.toLowerCase();
var font_weight_ = document.getElementById("font-weight").innerText.toLowerCase();
var font_style_ = document.getElementById("font-style").innerText.toLowerCase();
var font_color_ = document.getElementById("font-color").innerText.toLowerCase();
var letter_spacing_ = document.getElementById("letter-spacing").innerText.toLowerCase();
var line_height_ = document.getElementById("line-height").innerText.toLowerCase();
var text_alignment_ = document.getElementById("text-alignment").innerText.toLowerCase();
var vertical_alignment_ = document.getElementById("vertical-alignment").innerText.toLowerCase();
var white_space_ = document.getElementById("white-space").innerText.toLowerCase();













if(container_.includes(x)){
document.querySelector('a[href="#container"]').click();				
}
else if(display_.includes(x)){
document.querySelector('a[href="#display"]').click();				
}
else if(float_.includes(x)){
document.querySelector('a[href="#float"]').click();				
}
else if(overflow_.includes(x)){
document.querySelector('a[href="#overflow"]').click();				
}
else if(position_.includes(x)){
document.querySelector('a[href="#position"]').click();				
}
else if(visibility_.includes(x)){
document.querySelector('a[href="#visibility"]').click();				
}
else if(z_index_.includes(x)){
document.querySelector('a[href="#z-index"]').click();				
}
else if(colors_.includes(x)){
document.querySelector('a[href="#colors"]').click();				
}
else if(x.includes(font_color)){
document.querySelector('a[href="#colors"]').click();				
}
else if(x.includes(text_color)){
document.querySelector('a[href="#colors"]').click();				
}
else if(font_family_.includes(x)){
document.querySelector('a[href="#font-size"]').click();				
}
else if(font_weight_.includes(x)){
document.querySelector('a[href="#font-weight"]').click();				
}
else if(font_style_.includes(x)){
document.querySelector('a[href="#font-style"]').click();				
}
else if(font_color_.includes(x)){
document.querySelector('a[href="#font-color"]').click();				
}
else if(letter_spacing_.includes(x)){
document.querySelector('a[href="#letter-spacing"]').click();				
}
else if(line_height_.includes(x)){
document.querySelector('a[href="#line-height"]').click();				
}
else if(text_alignment_.includes(x)){
document.querySelector('a[href="#text-alignment"]').click();				
}
else if(x.includes(text_alignment)){
document.querySelector('a[href="#text-alignment"]').click();				
}
else if(vertical_alignment_.includes(x)){
document.querySelector('a[href="#vertical-alignment"]').click();				
}
else if(x.includes(vertical_alignment)){
document.querySelector('a[href="#vertical-alignment"]').click();				
}
else if(white_space_.includes(x)){
document.querySelector('a[href="#white-space"]').click();				
}




else{
document.querySelector('a[href="#installation"]').click();				
alert("Nothing to be founded 😔");
}
}
