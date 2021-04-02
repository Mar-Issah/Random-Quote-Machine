const quotesArr = [
  {
    quote: "Be thankful for what you have, you will end up having more. If you concentrate on what you don't have you will never, ever have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote:"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
    author: "Madeleine L'Engle"
  },

  {
    quote: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    author: "Stephen King"
  },

  {
    quote: "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
    author: "Mark Twain"
  },

  {
    quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison"
  },

  {
    quote: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin"
  },

    {
    quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    author: "Robert Frost"
  },

    {
    quote: "I can shake off everything as I write; my sorrows disappear, my courage is reborn",
    author: "Anne Frank"
  },
    
    {
    quote: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
    author: "Franz Kafka"
  },
    {
    quote: "Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money.",
    author: "Virginia Woolf"
  },
    {
    quote: "If my doctor told me I had only six minutes to live, I wouldn't brood. I'd type a little faster.",
    author: "Isaac Asimov"
  },
    {
    quote: "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.",
    author: "John Steinbeck"
  },
    {
    quote: "Words do not express thoughts very well. They always become a little different immediately after they are expressed, a little distorted, a little foolish.",
    author: "Hermann Hesse"
  },
    {
    quote: "The most valuable of all talents is that of never using two words when one will do.",
    author: "Thomas Jefferson"
  },
    {
    quote: "I am irritated by my own writing. I am like a violinist whose ear is true, but whose fingers refuse to reproduce precisely the sound he hears within.",
    author: "Gustave Flaubert"
  },
    {
    quote: "I went for years not finishing anything. Because, of course, when you finish something you can be judged.",
    author: "Erica Jong"
  },
    {
    quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    author: "William Faulkner"
  },

    {
    quote: "Almost anyone can be an author; the business is to collect money and fame from this state of being.",
    author: "A. A. Milne"
  },
    
     {
    quote: "If it sounds like writing, I rewrite it. Or, if proper usage gets in the way, it may have to go. I can't allow what we learned in English composition to disrupt the sound and rhythm of the narrative.",
    author: "Elmore Leonard"
  }
]

const colorArr = [
  "maroon",
  "black",
  "blue",
   "brown",
  "chocolate",
  "darkmagenta",
  "darkred",
  "darkviolet",
  "firebrick",
  "forestgreen",
  "indigo",
  "maroon",
  "olive",
  "orangered",
  "red",
  "saddlebrown",
  "deeppink",
  "orangered",
  "saddlebrown"
]

$(document).ready(function () {

  $("#new-quote").on("click", () => { 

    $("#quote-text, .fa, .author-label, #author-name").fadeOut('slow', function () {
        
             
      const randomNumber = Math.floor(Math.random() * 19);

      //change colors
      $("#wrapper, .fab").removeClass("bg-success")
      $("#wrapper, #tweet-quote, #new-quote, .fab").css({ background: `${colorArr[ randomNumber ]}` });    
      $("#quote-text, #author-name, .author-label, .fa").css({ color: `${colorArr[ randomNumber ]}` });
  
      //change quote
      $("#quote-text").text(quotesArr[randomNumber].quote);
      $("#author-name").text(quotesArr[ randomNumber ].author);

      $("#quote-text, .fa, .author-label, #author-name").fadeIn("slow");

      $("#new-quote").css("animation", "pulse 5s infinite ease-in-out");
    });
    
  })
});