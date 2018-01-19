// get user information
var user = document.getElementById("mykey");
var message = document.getElementById("value");

// get  send button
var send = document.getElementById("send");
var chat = document.getElementById("chat");


// what happens when you click on send //
// send.addEventListener("click", sendFunc);
//
//  function sendFunc(){
// chat.innerHTML += "<div class='messages'>" + "<b>" + user.value + ":" + "</b>" +
// "&nbsp;&nbsp;&nbsp;&nbsp" + "<span class='message'>" + message.value + "</span>" + "</div>";
// };
// }

//
// XMLHttpRequest maken en dan communiceren met de server
//This only gives me an ID or something. But not the actual username + message
function sendFunc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  document.getElementById("chat").innerHTML += this.responseText;
}};
  xhttp.open("GET", "https://codegorilla.nl/read_write/api.php?action=write&mykey=12345&value", true);
  xhttp.send("user", "message");

  // xhttp.open("POST", "https://codegorilla.nl/read_write/api.php?action=read&mykey=12345&id=2911", true);
  // xhttp.send(user.value, message.value);
};
