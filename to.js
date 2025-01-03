let items = [];
let idCounter = 1;

const myForm = document.forms[0];
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = document.getElementById("itemname").value;
    const itemQty = document.getElementById("itemqty").value;
    const itemdate = document.getElementById("itemdate").value;


    if (itemName && itemQty) {
        items.push({ id: idCounter++, name: itemName, qty: itemQty ,itemdate:itemdate });
        document.getElementById("itemname").value = "";
        document.getElementById("itemqty").value = "";
        document.getElementById("itemdate").value = "";
        renderTable();
    }
});

const renderTable = () => {
    const tbody = document.getElementById("inventory");
    tbody.innerHTML = ""; 
    items.forEach((item) => {
        const row = document.createElement("div");
        // row.innerHTML = `
        //     <td>${item.id}</td>
        //     <td>${item.name}</td>
        //     <td>${item.qty}</td>
        //     <td>
        //         <button class="edit" onclick="editItem(${item.id})">Edit</button>
        //         <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
        //     </td>
        // `;


        row.innerHTML=`
<div> ${item.id}</div>
<div>${item.name}</div>
<div>${item.qty}</div>
<div>${item.itemdate}</div>
<div> <button class="edit" onclick="editItem(${item.id})">Edit</button>
 <button class="delete"   onclick="deleteItem(${item.id})">Delete</button>
</div>
 `
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





document.getElementById('itemname').addEventListener('input', function(event) {
    let value = event.target.value;
    if (/[^a-zA-Zأ-ي]/.test(value)) {
        event.target.value = value.replace(/[^a-zA-Zأ-ي]/g, ''); 
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
    }
});



