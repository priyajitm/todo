// * * * To Do * * *
// 1. Save after edit - DONE
// 2. Remove Delete button from To Do section - DONE
// 3. Clicking on chekbox will move the task to completed section with strikethrough - DONE
// 4. Delete button will completely remove the task - DONE
// 5. Add item using enter key
// 6. Changes made online should update index file
// 7. clicking button again not creating a new element instead adding data in last created element - DONE
// 8. Auto refresh value of add item text box after clicking on add button - DONE
// 9. Design Flaws


// UI Class: Handle UI Tasks
class UI {
    static addTaskToList(newtask) {
        //li -> checkbox -> label -> input -> edit-button
        const ul = document.querySelector("#incomplete-tasks");
        const li = document.createElement("li");
        li.innerHTML = ` 
                            <input type="checkbox" class="check">
                            <label>${newtask}</label>
                            <button class="edit">Edit</button>
                            <button class="save vanish">Save</button>
                        `;
        ul.appendChild(li);
        document.querySelector("#new-task").value = "";
        this.alertWindow("Task Added Successfully");
    }

    static completeTask(el) {
        const ul = document.querySelector("#completed-tasks");
        const input = document.createElement("input");
        input.classList.add("val");
        const li = el.parentElement;
        const editbutton = li.querySelector(".edit");
        const savebutton = li.querySelector(".save");
        const label = li.querySelector("label");
        if (el.classList.contains("check") && editbutton.classList.contains("vanish") === false) {
            const li = el.parentElement;
            editbutton.classList.remove("edit");
            editbutton.classList.add("delete");
            editbutton.innerHTML = `Delete`;
            savebutton.remove();
            ul.appendChild(li);
        }
        else if (el.classList.contains("edit")) {

            label.classList.add("vanish");
            editbutton.classList.add("vanish");
            savebutton.classList.remove("vanish");
            li.insertBefore(input, editbutton);

        }
        else if (el.classList.contains("save")) {
            savebutton.classList.add("vanish");
            editbutton.classList.remove("vanish");
            label.classList.remove("vanish");
            const editval = li.querySelector(".val").value;
            label.innerHTML = `${editval}`;
            li.querySelector(".val").remove();
            this.alertWindow("Task Saved Successfully");
        }


    }

    static removeTask(el) {
        const task = el.parentElement;
        const checkbox = task.querySelector(".check");
        const deletebutton = task.querySelector(".delete");
        const savebutton = document.createElement("button");
        if (el.classList.contains("delete")) {
            task.remove();
            this.alertWindow("Task Removed Successfully");
        }
        else if (el.classList.contains("check")) {
            const ul = document.querySelector("#incomplete-tasks");
            deletebutton.classList.remove("delete");
            deletebutton.classList.add("edit");
            deletebutton.innerHTML = `Edit`;
            savebutton.classList.add("save", "vanish");
            savebutton.innerHTML = `Save`
            task.appendChild(savebutton);
            ul.appendChild(task);
        }
    }

    static alertWindow(message) {
        const div = document.createElement("div")
        div.className = `alert`;
        div.appendChild(document.createTextNode(message));
        const body = document.querySelector("body");
        const container = document.querySelector('.container');
        body.insertBefore(div, container);
        // Vanish in 3 Seconds
        setTimeout(() => document.querySelector('.alert').remove(), 1000);
    }
}

//Event: Add Task
const click = (e) => {
    if (e.type == "click" || e.keyCode == 13) {
        const newtask = document.querySelector("#new-task").value;
        UI.addTaskToList(newtask);
    };
}

document.querySelector("#submitbtn").addEventListener("click", click);
document.querySelector("#new-task").addEventListener("keypress", click);

//Event: Complete/Edit/Save Task 
document.querySelector("#incomplete-tasks").addEventListener("click", (e) => {
    UI.completeTask(e.target);
});

//Event: Remove Task
document.querySelector("#completed-tasks").addEventListener("click", (e) => {
    UI.removeTask(e.target);
});