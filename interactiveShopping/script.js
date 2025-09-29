// Cache DOM elements 
const input = document.getElementById('itemInput'); 
const addButton = document.getElementById('addButton'); 
const list = document.getElementById('list');


// Add item function 
function addItem() { 
    const text = input.value.trim(); 
    if (!text) return; // skip empty input 
    
    // Create list item with buttons in one go 
    const li = document.createElement('li'); 
    li.innerHTML = ` 
        <span>${text}</span> 
        <div class="actions"> 
            <button class="edit">Edit</button> 
            <button class="remove">Remove</button> 
        </div> `; 
    list.appendChild(li); 
    input.value = ''; // clear input 
    
    // Edit button 
    const editBtn = li.querySelector('.edit');
    editBtn.addEventListener('click', () => {
    const span = li.querySelector('span');
    const inputField = li.querySelector('input');

    if (editBtn.textContent === 'Edit') {
      // Replace span with input
      span.outerHTML = `<input type="text" value="${span.textContent}">`;
      editBtn.textContent = 'Save';
    } else {
      // Replace input with span
      const editInput = li.querySelector('input');
      const newText = editInput.value.trim() || 'Unnamed Item';
      editInput.outerHTML = `<span>${newText}</span>`;
      editBtn.textContent = 'Edit';
    }
  });

    // Remove button 
    li.querySelector('.remove').addEventListener('click', () => li.remove()); 
} 
    
    // Add button click 
    addButton.addEventListener('click', addItem); 
    
    // Press Enter to add 
    input.addEventListener('keypress', (event) => { 
        if (event.key === 'Enter') addItem(); 
    });

   