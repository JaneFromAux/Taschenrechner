

let output = document.getElementById('output');

// function operate(num) {
//     output.innerHTML += num;
// }

let operate = (num) => {

    output.innerHTML += num;
}

let result = () => {
    let done = output.innerHTML;
    console.log(done);
    output.innerHTML = eval(done);
}
const delDel = () => {
    output.innerHTML = "";
}