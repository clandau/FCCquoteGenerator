var twitterURL = "https://twitter.com/intent/tweet?text=";
var tweetHTML = document.getElementById('tweet');

var newQuote = document.getElementById("newQuote");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/random');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status <400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    } else {
        console.log("we connected to the server but it returned an error");
    }
};
ourRequest.send();

newQuote.addEventListener("click", function(){
    twitterURL = "https://twitter.com/intent/tweet?text=";
    ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/random');   /*GET to get, POST to send data */
    ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status <400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    } else {
        console.log("we connected to the server but it returned an error");
    }
};

/*handling connection errors */
ourRequest.onerror = function() {
    console.log("connection error");
}

ourRequest.send();
});

function renderHTML(data) {
    twitterURL += '"' + data.quote + '"' + "+" + data.author;
    tweetHTML.setAttribute('href', twitterURL);
    document.getElementById("quote").innerText = data.quote;
    document.getElementById("author").innerText = data.author;
}