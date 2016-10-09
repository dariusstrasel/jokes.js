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

function getJoke() {
  return jokeObject[randInt(1,Object.keys(jokeObject).length - 1)].joke;
};

function newJoke() {
    var joke = getJoke();
    console.log(joke)
    document.getElementById("mainJoke").innerHTML = joke;
};
