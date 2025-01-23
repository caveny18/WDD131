const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapterTitle = input.value.trim(); 

    if (chapterTitle !== '') {
        const li = document.createElement('li');
        li.textContent = chapterTitle; 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', () => {
            list.removeChild(li); 
        });

        li.append(deleteButton);

        list.append(li);

        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter title');
    }
});