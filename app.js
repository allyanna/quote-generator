var quotes = [
  "Begin now to be what you will be hereafter. Saint Jerome",
  
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. Bernard M. Baruch",

  "In three words I can sum up everything I've learned about life: it goes on. Robert Frost",

  "If you tell the truth, you don't have to remember anything.Mark Twain",

  "Always forgive your enemies; nothing annoys them so much.Oscar Wilde",
]

function newQuote() {
 // alert('hello')
var randNum = Math.floor(Math.random()* (quotes.length))
 document.getElementById('quoteDisplay').innerHTML= quotes[randNum]
}