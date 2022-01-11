let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  const titleEl = document.getElementById("main-title");
  titleEl.textContent = "DOM"

  // Part 2

 const bodyEl = document.querySelector("body");
 bodyEl.style.backgroundColor = "blue"

  // Part 3
 
  const domFavThings = document.getElementById("favorite-things");
  domFavThings.children[domFavThings.children.length - 1].remove();

  // Part 4

  const specialEl = document.querySelectorAll(".special-title");
   for (let i = 0; i < specialEl.length; i++) {
    specialEl[i].style.fontSize = "2rem"
   }

  // Part 5

  const racesEl = document.getElementById("past-races");
  for (let i = 0; i < racesEl.children.length; i++) {
    if (racesEl.children[i].textContent === "Chicago"){
       racesEl.children[i].remove()
    };
   };

  // Part 6

function function1() {
  var ul = document. getElementById("past-races");
  var li = document. createElement("li");
  li.appendChild(document.createTextNode("Queens"));
  ul.appendChild(li);
  }
  
  // Part 7


  // Part 8


  // Part 9




});
