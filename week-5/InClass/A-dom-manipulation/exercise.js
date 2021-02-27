/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

//1
let pElements = document.querySelectorAll("p");
console.log(pElements);

//2
let firstDiv = document.querySelector("div");
console.log(firstDiv);

//3
let elementJumbotron = document.querySelector("#jumbotron-text");
console.log(elementJumbotron);

//4
let primaryContentPs = document.querySelectorAll(".primary-content p");
console.log(primaryContentPs);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function createAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}
const addButton = document.querySelector("#alertBtn");
addButton.addEventListener("click", createAlert);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function changeBgColor() {
  document.body.style.backgroundColor = "red";
}
const colorButton = document.querySelector("#bgrChangeBtn");
colorButton.addEventListener("click", changeBgColor);

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
function addParagraph() {
  let paragraph = document.createElement("p"); // <p></p>
  let text = document.createTextNode("Read more below.");
  paragraph.appendChild(text); // <p>TEST TEXT</p>
  let buttonsDiv = document.querySelector(".buttons");
  buttonsDiv.appendChild(paragraph);
}

const paragraphButton = document.querySelector("#addTextBtn");
paragraphButton.addEventListener("click", addParagraph);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

function increaseLinkText() {
  let links = document.getElementsByTagName("a");
  for (link of links) {
    link.style.fontSize = "200%";
  }
}

const increaseButton = document.querySelector("#largerLinksBtn");
increaseButton.addEventListener("click", increaseLinkText);
