# Module 08 - Javascript and the DOM

## Getting Started with JS and DOM
* We talked a bit about the history of Javascript and the role it serves
* We can use Javascript in our code by using the `<script>` tag
    * We can place it in the `<head>` section or the `<body>` section, which affects when it is executed
    * We can place javascript code directily inside it, or (better) use the `src` attribute to point to another file: `<script src="./my-file.js">`
* In the javascript, we can write lines of code that will be executed as soon as the file is loaded.
* It is more recommened to place the code in functions, and call them when something happens.
* The DOM defines **events** - which are attributes that contain code that is automatically executed when something happens.

```javascript
function doThisOnClick() {
    console.log('Did something');
}
```
```html
<h1 onclick="doThisOnClick()">
Title
</h1>
```

* In our javascript we can use the `document.getElementById` function to find an `HTMLElement` object and do something with it

```html
<h1 id="my-header">The Title</h1>
```

```javascript
function findTheElement() {
    var x = document.getElementById('my-header');
    if (x !== null) {
        // do something with x
    }
}
```
* There are many DOM manipulations that we can do when we hold a reference to an `HTMLElement`
    * We can set a style property: ``` x.style.background="green";```
    * We can modify the inner text: ``` x.innerText = "A whole new text";```
    * We can modify the class name: ``` x.className = "some-class";```

* We saw that by combining Javascript DOM manipulation and CSS we can achieve many interesting results

## Introduction to JS
* Data types in Javascript
* Variables in Javascript
* Arrays and Objects
* Functions
* Conditions in Javascript
* Loops in Javascript

## Introduction to the DOM
* What is the DOM
* Selecting Elements with Javascript
    * `document.getElementsById()`
    * `document.getElementsByTagName()`
        * Can also be called on a specific element to restrict the search range
    * `document.getElementsByClassName()`
        * We can search by single class name, or by multiple: `getElementsByClassName("child boy")`
        * Can also be called on an element to restrict the search range
    * `document.querySelector()` searches all elements that match a CSS query
        * Returns the first child that matches the search criteria
        * If no element matches the search criteria, `null` is returned.
        * Can be called on a single element or on the entire document
    * `document.querySelectorAll()` returns a list of elements that match the criteria
* Modifying the DOM
    * Changing element text
    * Changing element inner HTML
    * Modifying element style
    * Modifying element class list

* Event Handling
    * Understanding events
    * Understanding the event overload
    * How to add and remove event handlers to the DOM







        
