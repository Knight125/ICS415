/**
 * Created by Kara on 9/20/2015.
 */
getClasses = function(elem)
{
  var classesOfElem = [];
  var indexOfClass = elem.search("class")+7;
  var listOfClasses = "";
  var i = 0;
  if(indexOfClass > 0)
  {
    while (elem[indexOfClass] != "\"")
    {
      listOfClasses = listOfClasses + elem[indexOfClass];
      indexOfClass++;
      i++;
    }
    classesOfElem = listOfClasses.split(" ");
    console.log(classesOfElem);
  }
  return classesOfElem;
};

addClass = function()
{
 var cn = document.getElementById("demo").className;
 var  classname = "Two";
    if( (cn.indexOf( classname + " ") != -1 )||((cn.indexOf( classname) != -1 )&& (cn.length == classname.length)))
    {
      return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
      classname = ' '+classname;
    }
  document.getElementById("demo").className = cn+classname;
//edited function that was found on http://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element
};
validateForm = function()
{
  var message = "";
  var error = true;
  var name = document.forms["myForm"]["name"];
  var email = document.forms["myForm"]["email"];
  var password = document.forms["myForm"]["password"];
  var confirm = document.forms["myForm"]["confirm"];

if (name.value == null || name.value == "")
{
  message = message + "Name must be filled out. ";
  name.style.borderColor = "red";
  name.style.background = "#d37a86";
  error = false;
}
  if (email.value == null || email.value == "")
{
  message = message + "Email must be filled out. ";
  email.style.borderColor = "red";
  email.style.background = "#d37a86";
  error = false;
}
  if (password.value == null || password.value == "")
  {
    message = message + "Password must be filled out. ";
    password.style.borderColor = "red";
    password.style.background = "#d37a86";
    error = false;
  }

  if (confirm.value == null || confirm.value == "")
{
  message = message + "You must confirm your password. ";
  confirm.style.borderColor = "red";
  confirm.style.background = "#d37a86";
  error = false;
}
  if(confirm.value != password.value)
  {
    message = message + "Your password must be the same in both boxes.";
    confirm.style.borderColor = "red";
    confirm.style.background = "#d37a86";
    password.style.borderColor = "red";
    password.style.background = "#d37a86";
    error = false;
  }
  var paragraph = document.getElementById("error");

  if(paragraph.hasChildNodes())
  {
    paragraph.removeChild(paragraph.firstChild);
  }
  var element = document.createTextNode(message);
  paragraph.appendChild(element);

  return error;
};