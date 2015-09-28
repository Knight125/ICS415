/**
 * Created by Kara on 9/27/2015.
 */
$(document).ready(function(){
  $("#button").click(function(){
    $.get("FAQ.html", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
  $("#hide").click(function(){
    $("#one").hide();
    $("#hide").hide();
    $("#show").show();
  });
  $("#show").click(function()
  {
    $("#one").show();
    $("#show").hide();
    $("#hide").show();
  });

  $("#hide2").click(function(){
    $("#two").hide();
  });
  $("#show2").click(function()
  {
    $("#two").show();
  });

  $("#hide3").click(function(){
    $("#three").hide();
  });
  $("#show3").click(function()
  {
    $("#three").show();
  });

  $("#hide4").click(function(){
    $("#four").hide();
    $("#hide4").hide();
  });
  $("#show4").click(function()
  {
    $("#four").show();
  });

  $("#hide5").click(function(){
    $("#five").hide();
  });
  $("#show5").click(function()
  {
    $("#five").show();
  });
  });