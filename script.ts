const editableElements = document.querySelectorAll('[contenteditable="true"]');

editableElements.forEach(element => {
    element.addEventListener('blur', (event) => {
        const target = event.target as HTMLElement;
        saveChanges(target.id, target.innerText);
    });
});

function saveChanges(id: string, content: string) {
    localStorage.setItem(id, content);
    console.log(`Saved: ${id} = ${content}`);
}

function loadChanges() {
    editableElements.forEach(element => {
        const content = localStorage.getItem(element.id);
        if (content) {
            element.innerHTML =  content;
        }
    });
}

document.addEventListener('DOMContentLoaded', loadChanges);