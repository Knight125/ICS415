/**
 * Created by Kara on 9/23/2015.
 */

$(document).ready(function(){
  $("#hide").click(function(){
    $("#animate").hide();
  });
  $("#show").click(function(){
    $("#animate").show();
  });
    $("#button").click(function(){
      $.ajax({url: "Our-Team.jpg", success: function(result){
        $("#content1").html("<img src = 'result'>");
      }});
  });
});