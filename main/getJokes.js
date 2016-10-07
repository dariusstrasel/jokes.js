function httpGet(theUrl) {
    console.log("httpGet")
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
};

// var joke = {
//   "joke":"I'm reading a book about anti-gravity. Its imposible to put down."
// };

function randInt(start, end) {
  return Math.floor((Math.random() * end) + start);
}

function newJoke() {
  console.log("newJoke")
  var joke = getJoke();
  //getJoke();
  document.getElementById("mainJoke").innerHTML = joke;
};
