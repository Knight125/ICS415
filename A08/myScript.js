/**
 * Created by Kara on 9/27/2015.
 */

 occurrences = function(string, subString, allowOverlapping){

  string+=""; subString+="";
  if(subString.length<=0) return string.length+1;

  var n=0, pos=0;
  var step= allowOverlapping?1:subString.length;

  while(true){
    pos=string.indexOf(subString,pos);
    if(pos>=0){ ++n; pos+=step; } else break;
  }
  return n;
};
//got from http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string

$(document).ready(function(){
  $("#button").click(function(){
    url = $('#urlInfo').val();
    $.get(url, function(data, status){
      var num = 0;
     if(occurrences(data, "link") > 0)
     {
       num = occurrences(data, "link");
     }

      $("#result").html(num);
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
    $("#hide2").hide();
    $("#show2").show();
  });
  $("#show2").click(function()
  {
    $("#two").show();
    $("#show2").hide();
    $("#hide2").show();
  });

  $("#hide3").click(function(){
    $("#three").hide();
    $("#hide3").hide();
    $("#show3").show();
  });
  $("#show3").click(function()
  {
    $("#three").show();
    $("#show3").hide();
    $("#hide3").show();
  });

  $("#hide4").click(function(){
    $("#four").hide();
    $("#hide4").hide();
    $("#show4").show();
  });
  $("#show4").click(function()
  {
    $("#four").show();
    $("#show4").hide();
    $("#hide4").show();
  });

  $("#hide5").click(function(){
    $("#five").hide();
    $("#hide5").hide();
    $("#show5").show();
  });
  $("#show5").click(function()
  {
    $("#five").show();
    $("#show5").hide();
    $("#hide5").show();
  });
  });