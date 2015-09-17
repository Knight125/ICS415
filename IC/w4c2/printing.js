/**
 * Created by Kara on 9/16/2015.
 */
var printInput = function(search)
{
      var table = document.getElementById("you");
      var noQuestionMark = search.substring(1);
      var byTerm = noQuestionMark.split("&");
      var row1 = byTerm[0].split("=");
      var row2 = byTerm[1].split("=");
      var row3 = byTerm[2].split("=");

      var element = document.createTextNode("horses");
      var value = document.createTextNode(row1[1]);
      var element2 = document.createTextNode(row2[0]);
      var value2 = document.createTextNode(row2[1]);
      var element3 = document.createTextNode(row3[0]);
      var value3 = document.createTextNode(row3[1]);

      table.appendChild(element);
     /* table.appendChild(element2);
      table.appendChild(element3);
      table.appendChild(value);
      table.appendChild(value2);
      table.appendChild(value3);*/
};