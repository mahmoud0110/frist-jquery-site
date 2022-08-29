// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/



/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id 
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
*/
$(document).ready(function () 
{


let aboutOffsetTop  = $("#about").offset().top;//603.24 //makan ay element fi elmawk3

$(window).scroll(function () {//t3rfk el user by scroll wla l2

  let wScroll =  $(window).scrollTop();//nzl l7d feen bel scroll //getter

  if(wScroll > aboutOffsetTop - 50)
  {
    $("#main-nav").css("backgroundColor","rgba(0,0,0,0.7)");
    $("#btnUp").fadeIn(500);
  }
  else
  {
    $("#main-nav").css("backgroundColor","transparent");
    $("#btnUp").fadeOut(500);
  }


 //console.log(wScroll);

  })


$("#btnUp").click(function () { 

    $("html,body").animate({scrollTop:0} , 3000)
 })



 $("a[href^='#']").click(function () {
   
     let aHref  =  $(this).attr("href");//ana dost 3la anhy link
     let sectionOffset = $(aHref).offset().top;
     $("html,body").animate({scrollTop:sectionOffset} , 1000)

   });


  $("#sideBarToggle").click(function () { 

    let colorBoxWidth = $("#colorsBox").innerWidth();

      if($("#sideBar").css("left") == "0px")//hwa bara
      {
        $("#sideBar").animate({left:`-${colorBoxWidth}`} , 1000);
      }
      else
      {
        $("#sideBar").animate({left:`0px`} , 1000);
  
      }

   
       // $("#colorsBox").toggle(500);
   });


   let colorsBox = $(".color-item");
for (let i = 0; i <  colorsBox.length; i++) 
{
  
    let red = Math.round( Math.random()*255 );//
    let green = Math.round( Math.random()*255 );//
    let blue = Math.round( Math.random()*255 );//

    colorsBox.eq(i).css("backgroundColor",`rgb(${red} , ${green} ,${blue})`);
  
}



colorsBox.click(function () {
  let bgColor  =  $(this).css("backgroundColor");
    $(".change,p,h2").css("color",bgColor);

  })
 


/*
Math.pow(3,3);

Math.min(2,8);
Math.max(2,8);

Math.round(2.5);
Math.floor(2.1);
Math.ceil(2.9);

Math.sin()
Math.tan();
*/
// window.onload = function () 
// {
//   let d = new Date();
  

//   console.log("window loaded  " +d.getMilliseconds()) ;
// }


  $("#loading").fadeOut(1000 ,function () {
    $("body").css("overflow","auto");

  });

  })

