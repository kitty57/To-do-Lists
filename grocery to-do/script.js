function addItem() {
    var fruits = document.getElementById("fruits").value;
    var vegetables = document.getElementById("vegetables").value;
    var necessities = document.getElementById("necessities").value;
    var customItem = document.getElementById("customItem").value.trim();

    var itemText = "";
    if (fruits !== "") {
        itemText = fruits;
    } else if (vegetables !== "") {
        itemText = vegetables;
    } else if (necessities !== "") {
        itemText = necessities;
    } else if (customItem !== "") {
        itemText = customItem;
    } else {
        return; // No item selected or entered
    }

    var li= document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    li.appendChild(checkbox);

    var spanText = document.createElement("span");
    spanText.textContent = itemText;
    li.appendChild(spanText);

    var spanRemove = document.createElement("span");
    spanRemove.textContent = "\u00d7";
    spanRemove.className = "remove";
    spanRemove.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(spanRemove);

    document.getElementById("todoList").appendChild(li);

    document.getElementById("customItem").value = "";
    document.getElementById("fruits").value = "";
    document.getElementById("vegetables").value = "";
    document.getElementById("necessities").value = "";
}

document.getElementById("customItem").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});