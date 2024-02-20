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

// DOM Selection
// DOM manipulation

