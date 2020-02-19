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
var newtask = document.getElementById("new-task");
var incomplete = document.getElementById("incomplete-tasks");
var completed = document.getElementById("completed-tasks");

var btnedit = document.createElement("button");
var btndelete = document.createElement("button");
var btnsave = document.createElement("button");

// Add Button
function addButton() {
  var newtask = document.getElementById("new-task");
  var incomplete = document.getElementById("incomplete-tasks");

  var li = document.createElement("li");
  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  var input = document.createElement("input");
  var btnedit = document.createElement("button");
  var btndelete = document.createElement("button");

  if (newtask.value !== "") {
    checkbox.setAttribute("type", "checkbox");
    btnedit.appendChild(document.createTextNode("Edit"));
    btnedit.classList.add("edit");
    btndelete.appendChild(document.createTextNode("delete"));
    btndelete.classList.add("delete");
    input.setAttribute("type", "text");
    label.appendChild(document.createTextNode(newtask.value));
    incomplete.appendChild(li);
    btnedit.setAttribute("onclick", "editButton()");
    // btndelete.setAttribute("onclick", "moveli()");
    checkbox.setAttribute("onclick", "moveli()");
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(input);
    li.appendChild(btnedit);
    li.classList.add("todo");
    //li.appendChild(btndelete);
    newtask.value = "";
  } else {
    alert("Enter New Task");
  }
}

// Edit Button
function editButton() {
  ele = document.activeElement.closest("li");
  //val = document.activeElement.closest("label");
  var input = document.createElement("input");
  ele.classList.add("editMode");
  var btnsave = document.createElement("button");
  btnsave.appendChild(document.createTextNode("Save"));
  btnsave.classList.add("save");
  ele.appendChild(btnsave);
  btnsave.setAttribute("onclick", "savebutton()");
}

//Delete Button = Multiple unchecking on working under completed section
function moveli() {
  ele = document.activeElement.closest("li");
  if (ele.classList.contains("todo")) {
    ele.classList.add("moving");
    ele.classList.remove("todo");
    var currentli = document.querySelector(".moving");
    var btndelete = document.createElement("button");
    btndelete.appendChild(document.createTextNode("delete"));
    btndelete.classList.add("delete");
    ele.appendChild(btndelete);
    var btnedit = document.querySelector(".edit");
    btnedit.remove();
    incomplete.removeChild(currentli);
    completed.appendChild(currentli);
    btndelete.setAttribute("onclick", "deletetask()");
  } else {
    var currentli = document.querySelector(".moving");
    completed.removeChild(currentli);
    incomplete.appendChild(currentli);
    var btndelete = document.querySelector(".delete");
    btndelete.remove();
    var btnedit = document.createElement("button");
    btnedit.appendChild(document.createTextNode("Edit"));
    btnedit.classList.add("edit");
    btnedit.setAttribute("onclick", "editButton()");
    currentli.appendChild(btnedit);
    ele.classList.remove("moving");
    ele.classList.add("todo");
  }
}

function deletetask() {
  ele = document.activeElement.closest("li");
  ele.classList.remove("moving");
  ele.classList.add("vanish");
}

function savebutton() {
  var selectli = document.querySelector(".editMode");
  var inputdata = selectli.querySelector("input[type='text']");
  var labelnew = document.createElement("label");
  var oldlabel = selectli.querySelector("label");
  var btnsave = selectli.querySelector(".save");
  oldlabel.remove();
  btnsave.remove();
  labelnew.appendChild(document.createTextNode(inputdata.value));
  selectli.appendChild(labelnew);
  console.log(labelnew);

  selectli.classList.remove("editMode");
}
