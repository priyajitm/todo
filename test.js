// * * * To Do * * *
// 1. Save after edit -
// 2. Remove Delete button from To Do section - DONE
// 3. Clicking on chekbox will move the task to completed section with strikethrough - DONE
// 4. Delete button will completely remove the task - DONE
// 5. Add item using enter key
// 6. Changes made online should update index file
// 7. clicking button again not creating a new element instead adding data in last created element - DONE
// 8. Auto refresh value of add item text box after clicking on add button - DONE

// Setting Variables
var add = document.getElementById("add");

var completed = document.getElementById("completed-tasks");
let newtask = document.getElementById("new-task");
//incomplete task

function buttonAddElements() {
  let incomplete = document.getElementById("incomplete-tasks");
  let li = document.createElement("li");
  li.classList.add("todo");
  incomplete.appendChild(li);
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onclick", "moveli()");
  li.appendChild(checkbox);
  let label = document.createElement("label");
  label.appendChild(document.createTextNode(newtask.value));
  li.appendChild(label);
  li.setAttribute("for", newtask.value);
  let input = document.createElement("input");
  input.classList.add("vanish");
  li.appendChild(input);
  let btnedit = document.createElement("img");
  btnedit.classList.add("edit");
  btnedit.setAttribute("src", "pencil.png");
  btnedit.setAttribute("onclick", "editButton()");
  li.appendChild(btnedit);
  let btnsave = document.createElement("img");
  btnsave.classList.add("edit");
  btnsave.setAttribute("src", "pencil.png");
  btnsave.setAttribute("onclick", "saveButton()");
  li.appendChild(btnsave);
  newtask.value = "";
}
// Add Button
function addButton() {
  if (newtask.value !== "") {
    buttonAddElements();
  } else {
    alert("Enter New Task");
  }
}

// Edit Button
function editButton() {
  let li = document.activeElement.closest("li");
  console.log(li);
}
