$(document).ready(function(){
    // first
    $("#design").click(function(){
        $("#text1").toggle();
    });

});
$(document).ready(function(){
   //    second
   $("#developement").click(function(){
      
    $("#text2").toggle();
    });
});
$(document).ready(function(){
       // third
       $("#management").click(function(){
        $("#text3").toggle();
    });
 });

 const validation = () =>{
     var name = document.getElementById("submit").value.trim();
     var username = document.getElementById("username").value.trim();
     var usermail = document.getElementById("usermail").value.trim();
     var message = document.getElementById("message").value.trim();
     if(name == "" || username == "" || usermail == "" || message == ""){
         alert("please fill all fields");
         return false;
     }else{
        alert("Thank you"+username + "for contacting us");
        var name = document.getElementById("submit").value="";
        var username = document.getElementById("username").value="";
        var usermail = document.getElementById("usermail").value="";
        var message = document.getElementById("message").value="";
         return false;
     }
 }
 $(document).ready(function(){
     $(".work").hover(function(){
       $(this).css("color","white");
       $(".bg_change").css("background-color","rgba(0,0,0,0.5)");
       $(this).css("border","2px solid #fff");
     },function(){
         $(this).css("color","transparent");
         $(this).css("border","none");
         $(".bg_change").css("background-color","inherit");
     });
 });