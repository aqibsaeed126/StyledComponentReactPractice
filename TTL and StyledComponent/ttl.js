function transform(static, ...tags) {
    console.log('static', static); // [ '', ' my name is ', ' and i am ', '' ]
    console.log('tags', tags); // [ 'Hi', 'Aqib', 27 ]

    let index = tags.findIndex((el)=>el === 'Aqib');
    tags[index] = 'Saeed'
    console.log('tags', tags);
    let str = '';
    for (let i=0; i<tags.length; i++) {
        str += tags[i] + static[i+1];
    }

    console.log(str);
}

let greeting = 'Hi';
let name = 'Aqib';
let age = 27;
transform`AA ${greeting} my name is ${name} and i am ${age} years old`;
