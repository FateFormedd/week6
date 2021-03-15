console.log(document.getElementsByTagName('h1'))

document.getElementsByTagName('h1')[0].innerHTML = 'New Text';

let color_button = document.getElementById('color-button')

function colorChange(){
    let header_element = document.getElementsByTagName('h1')[0];
    if (header_element.className == ''){
        header_element.className = 'color-change';
    }else{
        header_element.className = ''
    }
}

// color_button.addEventListener('click', colorChange);


let button = document.createElement('button');
button.innerHTML = 'I am ALIVE';
document.body.append(button);

button.addEventListener('click', () => {
    let more_text = document.createElement('h2');
    more_text.innerHTML = 'More javascript info here...';
    document.body.append(more_text);
});


const form = document.querySelector('#testDataForm');
console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    let firstName = event.path[0][0].value;
    let lastName = event.path[0][1].value;
    console.log(firstName, lastName);
    let queryFirst = document.querySelector('#firstname');
    let queryLast = document.querySelector('#lastname');
    console.log(`Query: ${queryFirst.value} ${queryLast.value}`)
})