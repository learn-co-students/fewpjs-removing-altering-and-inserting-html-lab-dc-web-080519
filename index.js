// Write your code here!

const main = document.querySelector('main#main');
main.remove();

const body = document.querySelector('body')

let newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.innerHTML = 'Pete is the champion';