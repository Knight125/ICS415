/**
 * Created by Kara on 9/21/2015.
 */

$(function()
{
  $("p").click(function()
  {
    $("p").append("<br> Hahaha, we don't feed kittens, we feed puppies!");
  });


});

$(function()
{
  $("p").mouseleave(function(){
    $("p").css("background-color", "gray");
  });
});

$(function()
{
  $("p").mouseenter(function(){
    $("p").css("background-color", "yellow");
  });
});
