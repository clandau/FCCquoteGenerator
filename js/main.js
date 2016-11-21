var twitterURL = "https://twitter.com/intent/tweet?text=";
var tweetHTML = document.getElementById('tweet');

/* on page load get a quote from API */ 
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
/* on new quote button press get a quote from API */ 
newQuote.addEventListener("click", function(){
    twitterURL = "https://twitter.com/intent/tweet?text=";
    ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/random');   
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

/* get quote string from JSON and populate the tweet variable with current quote */
function renderHTML(data) {
    twitterURL += '"' + encodeURIComponent(data.quote) + '"' + "+" + data.author;
    tweetHTML.setAttribute('href', twitterURL);
    document.getElementById("quote").innerText = data.quote;
    document.getElementById("author").innerText = data.author;
}