//* Created variable to add event listener when button is clicked
let taskButton = document.getElementById("taskButton");

//* Event Listener to perform function on click to add tasks to list below input area
taskButton.addEventListener("click", () => {
    debugger
    //* Created variable to grab the user's input for tasks to add
    let taskInput = document.getElementById("addTasks").value;
    
    //* Made variables inside function to create elements to make a list
    
    let listItem = document.createElement("li");

    let checkbox = document.createElement("input");

    let removeButton = document.createElement("button");

    let displayList = document.querySelector(".taskList");
    
    //* Added a class for the task the user inputs
    checkbox.classList.add("task")

    //* Set attribute to button to give consistency for buttons in the list
    removeButton.setAttribute("type", "button")

    listItem.classList.add("list-group-item");

    //* Added some classes to the removeButton styling
    removeButton.classList.add("btn", "btn-sm", "ms-1", "btn-danger", "my-1", "text-end")
    
    removeButton.innerText = "Remove Task";

    //* Set attribute type to "checkbox" to bring up the checkbox tab nex to list item
    checkbox.setAttribute("type", "checkbox");

    //* Nesting checkbox input element inside of the listItem li
    listItem.append(checkbox);


    //* Creating a text node for the task input and append it next to the checkbox
    //* Setting .innerText on an input element (checkbox) will not work. Instead, they either have value (for text inputs) or are self-contained (like checkboxes).
    //*f you want to add text next to the checkbox, you need to create a text node and append it to the li element, not the checkbox itself.
    let taskText = document.createTextNode(taskInput);
    listItem.append(taskText);

    listItem.append(removeButton);

    if (taskInput === "") {
        alert("Please enter a task to complete.")
        return;
    }

    let onlyNumbers = /^[0-9]+$/.test(taskInput)

    if (onlyNumbers) {
        alert("Invalid task. Explain tasks with words.")
        return;
    }

    //* Appending the completed listItem (with checkbox and task text) to the displayList ul
    displayList.append(listItem)

    //* Clear the input field after task is added
    document.getElementById("addTasks").value = "";
    
    //* Created another event listener to remove the list item when clicked
    removeButton.addEventListener("click", () => {
        listItem.classList.remove("list-group-item")
        listItem.remove();
    })

    //* Another event listener to check if task is completed (checked off)
    checkbox.addEventListener("change", () => {
        console.log("Checkbox changed: ", checkbox.checked)
        if (checkbox.checked) {
            listItem.style.textDecoration = "line-through"; //change of text style
            listItem.style.fontFamily = "roboto";
        } else {
            listItem.style.textDecoration = "none";
            listItem.style.fontFamily = "sans-serif";
        }
    })
})





