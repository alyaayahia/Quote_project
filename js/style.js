/* var alyaa = {
  fname: "alyaa",
  age: 22,
};
var ali = {
  fname: "ali",
  age: 20,
};
var ahemd = {
  fname: "ahemd",
  age: 21,
};
var Nada = {
  fname: "Nada",
  age: 21,
};

var lists = [
  {
    fname: "alyaa",
    age: 22,
  },
  {
    fname: "ali",
    age: 20,
  },
  {
    fname: "ahemd",
    age: 21,
  },
  {
    fname: "Nada",
    age: 25,
  },
];

function display(mylists) {
  var box = "";
  for (var i = 0; i < mylists.length; i++) {
    box += `
        <div class="col-md-3">
        <div class="card bg-info text-center" >
          <p>fname: ${lists[i].fname}</p>
          <p>age :  ${lists[i].age}</p>
         </div>
        </div>
          `;
  }
  demo.innerHTML = box;
}
display(lists); */

var demo = document.getElementById("demo");
var dem = document.getElementById("dem");
//Array of objects
var arr = [
  {
    quote: "The will of man is his happiness.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    author: "Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
];
// function to return random number
function randomNumber() {
  return Math.floor(Math.random() * arr.length);
}
// function to create random Quote
function createQuote() {
  demo.innerHTML = `<p class="mt-5">"${arr[randomNumber()].quote}."</p>`;
  dem.innerHTML = `<p class="text-end aouther-name mt-5" id="dem">
   "${arr[randomNumber()].author}"
 </p>`;
}
