function randomQuotesTimer() {
// Access The div element with the id quotes
var div_quotes = document.getElementById("quotes"),
    arr_quotes = ['"The time is always right to do what is right."<br> Martin Luther King', 
    '"Injustice anywhere is a threat to justice everywhere."<br> Martin Luther King', 
    '"Darkness cannot drive out darkness; only light can do that."<br> Martin Luther King', 
    '"Two things are infinite: the universe and human."<br>Albert Einstein',
    '"If you can\'t explain it to a six year old, you don\'t understand it yourself."<br>Albert Einstein',
    '"Logic will get you from A to Z; Imagination will get you everywhere."<br>Albert Einstein', 
    '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."<br>Nicolas Tesla',
    '"Of all things, I liked books best."<br>Nicolas Tesla', 
    '"I don\'t care that they stole my idea. I care that they don\'t have any of their own."<br>Nicolas Tesla', 
    '"The present is theirs; the future, for which I really worked, is mine."<br>Nicolas Tesla',
    '"The only true wisdom is in knowing you know nothing."<br>Socrate',
    '"Be kind, for everyone you meet is fighting a hard battle."<br>Socrate',
    '"Wonder is the beguining of wisdom."<br>Socrate',
    '"The more you struggle to live, the less you live"<br>Baruch Spinoza',
    '"No matter how thin you slice it, there will always be two sides." <br>Baruch Spinoza',
    '"The highest activity a human being can attain is learning for understanding, because to understand is to be free."<br>Baruch Spinoza',
    '"To love someone is to identify with them."<br>Aristotle',
    '"Love is composed of single soul inhabiting two bodies."<br>Aristotle',
    '"Happiness is the meaning and the purpose of life, the whole aim and end of human existence."<br>Aristotle',
    '"He who is cruel to animals becomes hard also in his dealings with men"<br>Immanuel Kant'];

    // Create a random integer
    var rand_int = Math.floor(Math.random() * arr_quotes.length);

    // Write the content of the div_quotes
    div_quotes.innerHTML = arr_quotes[rand_int];

    setInterval(function() {
        randomQuotesTimer();
    }, 10000);
}

randomQuotesTimer();
