import '../scss/main.scss'

function component (){
    var element = document.createElement('h1');
    element.innerHTML = 'Webpack in red new File';
    element.classList.add('hello');
    return element;
}
document.body.appendChild(component());


let sampleArray = [1,2,3,null,undefined,4,'',false];
console.log(`${sampleArray} after campact operation ${_.compact(sampleArray)}`);
