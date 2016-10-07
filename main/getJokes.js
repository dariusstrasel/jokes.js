function httpGet(theUrl) {
    console.log("httpGet")
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
};

var joke = {
  "joke":"I'm reading a book about anti-gravity. Its imposible to put down."
};

function newJoke() {
  console.log("newJoke")
  var joke = httpGet("http://tambal.azurewebsites.net/joke/random")
  //getJoke();
  document.getElementById("mainJoke").innerHTML = joke.joke;
};
