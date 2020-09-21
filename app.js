function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var getNewQuote = document.getElementById('btn');


getNewQuote.addEventListener("click", function() {

    fetch('http://quotes.stormconsultancy.co.uk/random.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            console.log(data);
            document.getElementById('quote').textContent = data.quote;
            document.getElementById('author').textContent = data.author;
        })
        .catch((error) => {
            console.log('error');
            console.error(error);
            document.getElementById('author').textContent = "Oops, seems like there's an error...Well, you can always grab a real book and find a quote. Sorry! ";
        });

});