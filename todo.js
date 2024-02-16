function getElementById(id) {
    return document.getElementById(id);
}
function createElementAndSetInnerText(element, text) {
    const a = document.createElement(element);
    a.innerText = text;
    return a;
}

function appendAnElement(where, which) {
    where.appendChild(which);
}

let count = 0;
getElementById('task-btn').addEventListener('click', function () {
    count++;
    const inputField = getElementById('input-value');
    const inputFieldValue = inputField.value;
    const x = createElementAndSetInnerText('th', count);
    const y = createElementAndSetInnerText('td', inputFieldValue);
    const z = document.createElement('tr');
    appendAnElement(z, x);
    appendAnElement(z, y);
    appendAnElement(document.getElementById('content-container'), z);
    getElementById('input-value').value="";
})

getElementById('input-value').addEventListener('keyup', function (event){
    if(event.key =='Enter'){
        count++;
        const inputField = getElementById('input-value');
        const inputFieldValue = inputField.value;
        const x = createElementAndSetInnerText('th', count);
        const y = createElementAndSetInnerText('td', inputFieldValue);
        const z = document.createElement('tr');
        appendAnElement(z, x);
        appendAnElement(z, y);
        appendAnElement(document.getElementById('content-container'), z);
        getElementById('input-value').value="";
    }
})


getElementById('clear-btn').addEventListener('click', function () {
    getElementById('content-container').innerHTML = '';
})