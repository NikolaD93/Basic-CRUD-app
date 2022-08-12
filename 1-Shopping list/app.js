const inputElement = document.querySelector('.input-field');
const btnAddElement = document.querySelector('.btn-add');
const btnClearElement = document.querySelector('.btn-clear');
const btnSaveElement = document.querySelector('.btn-save');
const btnBackElement = document.querySelector('.btn-back');
const tableElement = document.querySelector('.table-body');


const list = [];
let editId = null;


btnAddElement.addEventListener('click', () => {
    adding();
    print();

});

btnClearElement.addEventListener('click', () => {
    inputElement.value = '';
});

btnBackElement.addEventListener('click', () => {
    tableElement.hidden = false;
    btnAddElement.hidden = false;
    btnClearElement.hidden = false;

    btnSaveElement.hidden = true;
    btnBackElement.hidden = true;

    inputElement.value = '';
    inputElement.focus();
});

btnSaveElement.addEventListener('click', () => {
    list[editId] = inputElement.value;

    tableElement.hidden = false;
    btnAddElement.hidden = false;
    btnClearElement.hidden = false;

    btnSaveElement.hidden = true;
    btnBackElement.hidden = true;

   

    inputElement.value = '';
    inputElement.focus();

    editId = null;

    print();
});


const adding = () => {
    list.push(inputElement.value);
}

const print = () => {
    tableElement.innerHTML = '';
    list.forEach((element,idx) => {
        tableElement.innerHTML += `<td class="fs-5">${element}</td>
        <td><button class="btn-erase btn btn-danger btn-sm " onClick="erase(${idx})">Delete <i class="bi bi-trash3"></i></button></td>
        <td><button class="btn-update btn btn-warning  btn-sm" onClick="update(${idx})">Update <i class="bi bi-arrow-up-circle"></i></button></td>`
    })

    inputElement.value = '';
    inputElement.focus();
}

const erase = (idx) => {
    list.splice(idx,1);
    print();
}

const update = (idx) => {
    inputElement.value = list[idx];

    tableElement.hidden = true;
    btnAddElement.hidden = true;
    btnClearElement.hidden = true;

    btnSaveElement.hidden = false;
    btnBackElement.hidden = false;


    editId = idx;
    
}

