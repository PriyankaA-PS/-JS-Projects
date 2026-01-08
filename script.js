// const body = document.body
// //body.append("Hello Worl")

// const div = document.createElement("div")
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 2";
// // div.innerText = 'hello world'
// // div.textContent = 'Hello priyanka'
// //div.textContent = "<strong> Hello World </strong>"
// div.innerHTML = "<strong> Hello World </strong>"
// body.append(div)

// const div = document.querySelector('div')

// console.log(div.textContent);
// console.log(div.innerText)
/*
innerText and textConent - both are for console


*/

const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye");

console.log(spanHi.dataset)
console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longName)

spanHi.dataset.newName = "Hellloooooo" // added as datap-new-Name

spanBye.classList.add("new-Hi")
spanBye.classList.remove("hi1")
// add and remove both
spanBye.classList.toggle("hi3")
spanBye.classList.toggle("hi2")


// style
spanHi.style.background = "Red";
spanBye.style.color = "Purple";
spanBye.style.background = "gold"

/*

Manipulation

1. createElement
2. innerText - only shows whats on UI

  textContent - shows all the content of the element including space, and hidden styles

3. modifying HTML is by innerHTML - (which is not recommandable - easily trap in hacking)
4. removing elements - .remove() or removeChild()
5. modifying element attributes - class, id
6. modifying data attributes : data-test, in ts check as dataset
7. modifying element classes : add(), remove(), toggle()
8. modifying element style

*/