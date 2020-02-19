// * * * To Do * * *
// 1. Save after edit - DONE
// 2. Remove Delete button from To Do section
// 3. Clicking on chekbox will move the task to completed section with strikethrough
// 4. Delete button will completely remove the task
// 5. Add item using enter key
// 6. Changes made online should update index file
// 7. clicking button again not creating a new element instead adding data in last created element
// 8. Auto refresh value of add item text box after clicking on add button

// Setting Variables
var add = document.getElementById("add");
var newtask = document.getElementById("new-task");
var incomplete = document.getElementById("incomplete-tasks");
var completed = document.getElementById("completed-tasks");

var btnedit = document.createElement("button");
var btndelete = document.createElement("button");
var btnsave = document.createElement("button");

// Task Add Button
function addButton() {
  var newtask = document.getElementById("new-task");
  var incomplete = document.getElementById("incomplete-tasks");

  var li = document.createElement("li");
  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  var input = document.createElement("input");
  var btnedit = document.createElement("button");
  var btndelete = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  btnedit.appendChild(document.createTextNode("Edit"));
  btnedit.classList.add("edit");
  btndelete.appendChild(document.createTextNode("delete"));
  btndelete.classList.add("delete");
  input.setAttribute("type", "text");
  label.appendChild(document.createTextNode(newtask.value));
  incomplete.appendChild(li);
  btnedit.setAttribute("onclick", "editButton()");
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(input);
  li.appendChild(btnedit);
  li.appendChild(btndelete);
}

// Task Edit Button
function editButton() {
  // var li = document.querySelector("li");
  // var btnedit = document.createElement("button");
  // var btndelete = document.createElement("button");
  // var btnsave = document.createElement("button");
  ele = document.activeElement.closest("li");
  val = document.activeElement.closest("label");
  var input = document.createElement("input");
  //input = document.activeElement.closest("input").value;
  ele.classList.toggle("editMode");
  //input.appendChild(document.createTextNode(input.value));
  //ele.appendChild(input);
  //ele.closest("li");
  //console.log(ele);
  //li.classList.add("editMode");

  // li.removeChild(btnedit);
  // li.removeChild(btndelete);
  // btnsave.appendChild(document.createTextNode("Save"));
  // btnsave.classList.add("edit");
  // li.appendChild(btnsave);
  // li.appendChild(btndelete);
}

// Task Delete Button
function deleteButton() {
  var incomplete = document.getElementById("incomplete-tasks");
  var completed = document.getElementById("completed-tasks");
  var li = document.createElement("li");

  var btnedit = document.createElement("button");

  incomplete.removeChild(li);
  completed.appendChild(li);
  li.removeChild(btnedit);
}

function savebutton() {
  var li = document.createElement("li");
  var label = document.createElement("label");

  var input = document.createElement("input");
  var btnedit = document.createElement("button");
  var btndelete = document.createElement("button");
  var btnsave = document.createElement("button");

  li.removeChild(label);
  li.removeChild(btnsave);
  li.removeChild(btndelete);
  label1 = document.createElement("label");
  label1.appendChild(document.createTextNode(input.value));
  li.appendChild(label1);
  li.appendChild(btnedit);
  li.appendChild(btndelete);
  li.classList.remove("editMode");
}

// Calling Functions
// add.addEventListener("click", addButton);
// btnedit.addEventListener("click", editButton);
// btndelete.addEventListener("click", deleteButton);
// btnsave.addEventListener("click", savebutton);
