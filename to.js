let items = [];
let idCounter = 1;

const myForm = document.forms[0];
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = document.getElementById("itemname").value;
    const itemQty = document.getElementById("itemqty").value;
    
    if (itemName && itemQty) {
        items.push({ id: idCounter++, name: itemName, qty: itemQty });
        document.getElementById("itemname").value = "";
        document.getElementById("itemqty").value = "";
        renderTable();
    }
});

const renderTable = () => {
    const tbody = document.getElementById("inventory");
    tbody.innerHTML = "";  // Clear the table before adding new rows
    items.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>
                <button class="edit" onclick="editItem(${item.id})">Edit</button>
                <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
};

const editItem = (id) => {
    const item = items.find((item) => item.id === id);
    if (item) {
        const newName = prompt("Enter task name", item.name);
        const newQty = prompt("Enter task quantity", item.qty);
        if (newName && newQty) {
            item.name = newName;
            item.qty = newQty;
            renderTable();
        }
    }
};

const deleteItem = (id) => {
    items = items.filter((item) => item.id !== id);
    renderTable();
};
