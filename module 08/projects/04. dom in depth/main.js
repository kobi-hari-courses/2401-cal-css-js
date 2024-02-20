function doSomething() {
    console.log('We are doing something');
    alert('Hey there');
    var x = prompt('What is your name?');
    alert('Your name is ' + x);
}

function writeToLog() {
    console.log('Hi there');
}

function onTitleEnter() {
    var t = document.getElementById('main-header');
    if (t !== null) {
        // t.style.background = 'lime';
        t.className = 'kobi';
    }
}

function onTitleLeave() {
    var t = document.getElementById('main-header');
    if (t !== null) {
        t.className = '';
    }
}

function onTitleClicked() {
    var t = document.getElementById('main-header');
    if (t !== null) {
        t.innerText = 'This header was clicked';
    }
}

function addItemToShoppingList() {
    // find the input, and extract the value
    var inp = document.getElementById('new-item-input');
    var txt = inp.value;

    // find the list (ul) and add inside a new element of type li with the text
    var ul = document.getElementById('shopping-list');
    
    var newLi = document.createElement('li');
    ul.appendChild(newLi);
    newLi.innerText = txt;

    var clickHandler = function (event) {
        checkLi(event.target);
    }

    newLi.addEventListener('click', clickHandler)
}

function checkLi(li) {
    li.className = 'checked';
}

