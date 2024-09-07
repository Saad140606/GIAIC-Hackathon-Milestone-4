var editableElements = document.querySelectorAll('[contenteditable="true"]');
editableElements.forEach(function (element) {
    element.addEventListener('blur', function (event) {
        var target = event.target;
        saveChanges(target.id, target.innerText);
    });
});
function saveChanges(id, content) {
    localStorage.setItem(id, content);
    console.log("Saved: ".concat(id, " = ").concat(content));
}
function loadChanges() {
    editableElements.forEach(function (element) {
        var content = localStorage.getItem(element.id);
        if (content) {
            element.innerHTML = content;
        }
    });
}
document.addEventListener('DOMContentLoaded', loadChanges);
