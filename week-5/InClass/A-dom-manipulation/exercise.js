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

/*
Task 6
======

Add a form element to the body
*/
let myBody = document.querySelector("body");
let form = document.createElement("form");

// Create an input element for Full Name
var email = document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("email", "Email");
email.setAttribute("placeholder", "Enter your email address");

//Create a radio group
let radioGroup = document.createElement("select");
let option1 = document.createElement("option");
option1.text = "USA";
let option2 = document.createElement("option");
option2.text = "UK";
let option3 = document.createElement("option");
option3.text = "Africa";
let option4 = document.createElement("option");
option4.text = "Asia";
radioGroup.add(option1, 0);
radioGroup.add(option2, 1);
radioGroup.add(option3, 2);
radioGroup.add(option4, 3);

// create a submit button
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Subscribe");

// Append the form items to the form
form.appendChild(email);
// Inserting a line break
let br = document.createElement("br");
form.appendChild(br.cloneNode());
//Inserting radio group
form.appendChild(radioGroup);
// Inserting a line break
form.appendChild(br.cloneNode());
//inserting submit button
form.appendChild(submit);

myBody.appendChild(form);
