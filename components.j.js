$(".nav-toggler").click(function(){
var x = $(this).parent().parent().children(".nav-foot");		
var transition = $(this).parent().parent().attr("nav-transition");
var t_remove = (transition * 0.6) + "s";
var t_add = (transition * 1.2) + "s";
var tt_remove = "max-height " + t_remove;
var tt_add = "max-height " + t_add;



/* for navbar toggling */

if($(".nav").hasClass("nav-down-blur")){
       if(x.css("max-height") ==="0px") {
    x.css("max-height", "100vh");
    x.css("transition", tt_add);
    $("body").addClass("jabnavbarnichetoblur");
         } 
    else {
    x.css("max-height", "0px");
    x.css("transition", tt_remove);
    $("body").removeClass("jabnavbarnichetoblur");
         }		
}
else{
      if(x.css("max-height") ==="0px") {
    x.css("max-height", "100vh");
    x.css("transition", tt_add);
         } 
    else {
    x.css("max-height", "0px");
    x.css("transition", tt_remove);
         }
}
         
/* navbar toggling ended */
});

/* for window's match media */  
setInterval(function apneisapowerfultool(){
var x = window.matchMedia("(min-width: 992px)");
if (x.matches){
$(".nav-foot").css("max-height", "100vh");
$("body").removeClass("jabnavbarnichetoblur");}
}),100;
/* window's match media ended */  


/* mouseup */
$(document).mouseup(function(e) { 
var container = $(".nav"); 
var x = $(".nav-foot");
if (!container.is(e.target) && container.has(e.target).length === 0) { 
x.css("max-height", "0px");
$("body").removeClass("jabnavbarnichetoblur");
}});
/* mouseup ended */



/* $(this).parent().parent().children(".nav-foot") == (".nav-foot");
$(this).parent().parent() == (".nav");
*/