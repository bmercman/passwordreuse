// When password field clicked, display nudge message
document.getElementById("passwd").onclick = function(){
  // set nudge-message to visible
  document.getElementById("nudge-message").style.display = "inherit";
  // set password field to red
  document.getElementById("passwd").style.color = "#ff0011";
}

// When username field clicked, remove nudges
document.getElementById("username").onclick = function(){
  // remove nudge-message
  document.getElementById("nudge-message").style.display = "none";
  // set password field to white
  document.getElementById("passwd").style.color = "#fff";
  // hide nudge-info
  document.getElementById("nudge-info").style.display = "none";
}

// when more info is clicked show nudge info
document.getElementById("more-info").onclick = function(){
  // display nudge-info
  document.getElementById("nudge-info").style.display = "inherit";
}

// when the generate password button is clicked, remove messages and show green
document.getElementById("generate").onclick = function(){
  // remove nudge-message
  document.getElementById("nudge-message").style.display = "none";
  // set password field to white
  document.getElementById("passwd").style.color = "#00c234";
  // close nudge-info
  document.getElementById("nudge-info").style.display = "none";
  // fill password field
  document.getElementById("passwd").value = "h#b$f5x67&F*4082yD&*6h7f9^&D5tg";
  // show green closed lock
  document.getElementById("lock").style.display = "inherit";
}

// exits the nudge and closes all messages
document.getElementById("exit").onclick = function(){
  // remove nudge-message
  document.getElementById("nudge-message").style.display = "none";
  // set password field to white
  document.getElementById("passwd").style.color = "#00c234";
  // close nudge-info
  document.getElementById("nudge-info").style.display = "none";
}
