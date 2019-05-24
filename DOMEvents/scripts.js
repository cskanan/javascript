var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); //seclect the fist occurence
var listItems = document.querySelectorAll("li");
var date = document.getElementById("date");
var buttons = document.getElementsByClassName("delButton");

button.addEventListener("click", AddListAfterClickButton);
input.addEventListener("keypress", AddAfterKeyPress);

listItems.forEach(item => {
  item.addEventListener("click", strikeThrough);
});

Array.from(buttons).forEach(b => {
  AddDeleteItemEventToDeleteButton(b);
});

function strikeThrough(event) {
  var classes = event.srcElement.classList;
  classes.toggle("done");
}

function AddListAfterClickButton() {
  AddValueToListExt();
}

function AddAfterKeyPress(event) {
  if (event.keyCode === 13) {
    AddValueToListExt();
  }
}
function AddDate() {
  date.append(document.createTextNode(new Date().toLocaleDateString()));
}
AddDate();
// function AddValueToList() {
//   if (input.value.length > 0) {
//     var ui = document.createElement("li");
//     ui.appendChild(document.createTextNode(input.value));
//     ul.appendChild(ui);
//     input.value = "";
//   }
// }

function AddValueToListExt() {
  if (input.value.length > 0) {
    var div = CreateElement("div");
    div.classList.add("listItem");

    var ui = CreateElement("li");
    ui.addEventListener("click", strikeThrough);
    ui.append(document.createTextNode(input.value));

    var delButton = CreateElement("button");
    AddDeleteItemEventToDeleteButton(delButton);
    delButton.classList.add("delButton");
    delButton.textContent = "Delete";

    AppendChild(div, ui);
    AppendChild(div, delButton);
    AppendChild(ul, div);
    input.value = "";
  }
}

function AppendChild(parentElement, childElement) {
  parentElement.appendChild(childElement);
}

function CreateElement(element) {
  return document.createElement(element);
}

function AddDeleteItemEventToDeleteButton(button) {
  button.addEventListener("click", DeleteItem);
}

function DeleteItem(event) {
  var parentElement = event.srcElement.parentElement;
  ul.removeChild(parentElement);
}
