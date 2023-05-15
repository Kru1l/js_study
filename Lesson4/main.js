// function calc(num1, num2) {
//     let result = num1 / num2;
//     document.write(`${result}`);
// }
//
// calc(1000, 2);
// document.write('<hr>');
// calc(458, 14);
//
// document.write('<hr>');
//
// function percentage(amount, per) {
//     return amount / 100 * per;
// }
//
// function taxes(amount) {
//     return amount - percentage(amount, 20) - percentage(amount, 1.5);
// }
//
// document.write(taxes(15000));
//
let people = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'danylo', age: 28, status: false}
];
//
// function userFilter(array) {
//     let filteredUsers = [];
//     for (const person of array) {
//         if (person.age > 30) {
//             filteredUsers.push(person);
//         }
//     }
//     return filteredUsers;
// }

// let filter = userFilter(people);
// console.log(filter);
// console.log(userFilter(people));

// function man() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//     return inner;
// }

// let man = {name: 'Hulk', biceps: 64, age: 31};

// function manBuilder(name, biceps, age) {
//     let man = {name, biceps, age};
//     return {
//         getName() {
//             return man.name;
//         },
//         getAge() {
//             return man.age;
//         },
//         getBiceps() {
//             return man.biceps;
//         },
//         setAge(age) {
//             if (age > 0 && age > man.age) {
//                 man.age = age;
//             }
//         },
//         setName(name) {
//             if (name.length > 1) {
//                 man.name = name;
//             }
//         },
//         setBiceps(biceps) {
//             if (biceps > 10 && biceps < 300) {
//                 man.biceps = biceps;
//             }
//         }
//     }
// }
//
//
// let builder = manBuilder('Hulk', 64, 31);
// console.log(builder);
// console.log(builder.getName());
// console.log(builder.getBiceps());
// console.log(builder.getAge());
//
// builder.setAge(99);
// console.log(builder.getAge());
// builder.setName('Tony');
// console.log(builder.getName());
// builder.setBiceps(71);
// console.log(builder.getBiceps());

// - створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaTria(a, b) {
    return a * b;
}

console.log(areaTria(10, 15));

// - створити функцію, яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return 3.14 * r ** 2;
}

console.log(areaCircle(7));

// - створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * 3.14 * r * (h + r);
}

console.log(areaCylinder(20, 7));

// - створити функцію, яка приймає масив та виводить кожен його елемент
function arrayViewer(array) {
    for (const item of array) {
        console.log(item);
    }
}

arrayViewer(people);

// - створити функцію, яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Космос - це безмежна область, де існують зорі, планети, галактики та інші небесні тіла.');

// - створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(liText) {
    document.write(`<ul>
        <li>${liText}</li>
        <li>${liText}</li>
        <li>${liText}</li>
    </ul>`)
}

list('Україна');


// - створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function lister(liText, liAmount) {
    document.write('<ul>');

    for (let i = 0; i < liAmount; i++) {
        document.write(`<li>${liText}</li>`);
    }

    document.write('</ul>');
}

lister('Erynto', 2);

// - створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [10, 56, 'Hi', false, 'By', -16];

function arrayList(array) {
    document.write('<ul>');

    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }

    document.write('</ul>');
}

arrayList(array);

// - створити функцію, яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objects = [
    {id: '@455', name: 'John', age: 37},
    {id: '@321', name: 'Jinny', age: 21},
    {id: '@698', name: 'Nancy', age: 45},
    {id: '@118', name: 'Kiany', age: 18},
    {id: '@039', name: 'Sam', age: 28}
];

function objShower(array) {
    for (const obj of array) {
        document.write(`<div>${obj.id} - ${obj.name} - ${obj.age}</div>`);
    }
}

objShower(objects);

// - створити функцію, яка повертає найменьше число з масиву
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function lowestNum(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

console.log(lowestNum(numbers));

// - створити функцію, sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(array) {
    let result = 0;
    for (const number of array) {
        result += number;
    }
    return result;
}

console.log(sum(numbers));

// - створити функцію, swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//-------------------------------------------------------------------------------//
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    switch (exchangeCurrency) {
        case 'USD':
            console.log(sumUAH / currencyValues[0].value);
            break;
        case 'EUR':
            console.log(sumUAH / currencyValues[1].value);
            break;
        default:
            console.error('Немає даної валюти');
    }
}

exchange(20000, [{currency: 'USD', value: 37}, {currency: 'EUR', value: 39}], 'USD');