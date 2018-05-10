function* rainbow() {
    yield "red";
    yield "orange";
    yield  "yellow";
    yield  "green";
    yield  "blue";
    yield  "indigo";
    yield  "violet";
}

// const it = rainbow();
// let current = it.next();
// while (!current.done) {
//     console.log(current.value);
//     current = it.next();
// }

// for(let color of rainbow()){
//     console.log(color);
// }

function* interrogate() {
    let name = yield "What is your name?";
    let color = yield "what is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}
const it = interrogate();
console.log(it.next());
console.log(it.next("Ethan"));
console.log(it.next("orange"));
