var buttonTarget = document.getElementsByClassName("btn")[0];
var counter = 1;

function incrementer(){
//document.getElementById("btn").innerHTML = counter.toString();
  buttonTarget.innerHTML  = counter.toString();
  counter++;
  return counter;
}