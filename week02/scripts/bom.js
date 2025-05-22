const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener
button.addEventListener('click', function () {
    // Check if input is not empty
    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            li.remove();
            input.focus();
        });

        input.value = '';
    }
    input.focus();
});