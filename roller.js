function toloadourjsfileinrollerjstwo(){
var script = document.createElement("script"); 
script.src ="jquery.min.js";
script.setAttribute("defer","true");
document.body.appendChild(script);
}
toloadourjsfileinrollerjstwo();
function toloadourjsfileinrollerjsone(){
var script = document.createElement("script"); 
script.src ="components.j.js";
script.setAttribute("defer","true");
document.body.appendChild(script);
}
toloadourjsfileinrollerjsone();



setTimeout(function(){
console.log("Done, rollercss initialized ✌");				
},3000);




/* 
document.write('<script src="https://cdn.statically.io/gh/abtp2/gw/main/components.js" defer></script>');
document.write('<script src="https://cdn.statically.io/gh/abtp2/gw/main/jquery.min.js" defer></script>');
document.write('<script src="https://cdn.statically.io/gh/abtp2/gw/main/swiper.js" defer></script>');
document.write('<script src="https://cdn.statically.io/gh/abtp2/gw/main/animation.js" defer></script>');

 */