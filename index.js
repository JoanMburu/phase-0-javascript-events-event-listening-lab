// Will handle the click
function handleClick(input){
    return alert ('I created an event listening alert')
    console.log(input);
}
// Grabs button
function addingEventListener() {
    let input = document.getElementById('button')
    input.addEventListener('click', handleClick)
}
addingEventListener();