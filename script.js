function myFunction() {
  document.getElementById("dynamic_text01").innerHTML = "You read this post on"
  
  var d = new Date();
  document.getElementById("dynamic_text02").innerHTML = d;
}