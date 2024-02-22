// Function to add selected medicine to the box
function addMedicine() {
    var selectElement = document.getElementById('medicineDropdown');
    var selectedMedicine = selectElement.value;

    if (selectedMedicine !== '') {
        // Add the selected item to the selected items box
        addSelectedItem(selectedMedicine);
    }
}

// Function to add a custom item to the box
function addCustomItem() {
    var customItem = prompt('Enter a custom item:');

    if (customItem) {
        // Add the custom item to the selected items box
        addSelectedItem(customItem);
    }
}

// Function to add a selected item to the selected items box
function addSelectedItem(item) {
    var selectedItemsBox = document.getElementById('selectedItemsBox');
    var selectedItemElement = document.createElement('div');
    selectedItemElement.classList.add('selected-item');

    // Create a checklist
    var checklist = document.createElement('input');
    checklist.type = 'checkbox';
    checklist.classList.add('checklist');
    checklist.onclick = function () {
        toggleStrikethrough(selectedItemElement);
    };

    // Create a span for the medicine name
    var span = document.createElement('span');
    span.textContent = item;

    // Create a delete button
    var deleteBtn = document.createElement('span');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        selectedItemsBox.removeChild(selectedItemElement);
    };

    // Append elements to the selected item container
    selectedItemElement.appendChild(checklist);
    selectedItemElement.appendChild(span);
    selectedItemElement.appendChild(deleteBtn);

    selectedItemsBox.appendChild(selectedItemElement);

    // Reset the dropdown to the default "Select Item" option
    document.getElementById('medicineDropdown').selectedIndex = 0;
}

// Function to toggle strikethrough on the item name
function toggleStrikethrough(selectedItemElement) {
    var span = selectedItemElement.querySelector('span');
    span.classList.toggle('strikethrough');
}
