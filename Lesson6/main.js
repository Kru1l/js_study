let array = [44, 55, 66, [454, 'Wont', ['Tony', [0, 'In', ['side', 12, 'you'], 336, 1], true], -95, false], 64, [555, 'of', 4], -992, 520];

let newArr = [];
let rock = (arr) => {
    for (const item of arr) {
        if (Array.isArray(item)) {
            rock(item);
        } else
            newArr.push(item);
    }
    return newArr;
}
console.log(rock(array));

// let str = ' dirty string   ';
// console.log(str.length);
// console.log(str.substring(6, 9));
// console.log(str.indexOf('i'));
// console.log(str.lastIndexOf('i'));
// console.log(str.charAt(10));

// let stringToarray = str => str.split(' ');
//
// let arr = stringToarray(str_1);
// console.log(arr);
// arr.push('&&&')
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('&&&');
// console.log(arr);

// console.log(arr);
// let yuy = ['fgh', 56, '&&&'];
// let concat =  yuy.concat(arr);
// console.log(concat);

//--------------------------------hw_6----------------------------------//

// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let text = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(text[0].length);
console.log(text[1].length);
console.log(text[2].length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(text[0].toUpperCase());
console.log(text[1].toUpperCase());
console.log(text[2].toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let text_2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
console.log(text_2[0].toLowerCase());
console.log(text_2[1].toLowerCase());
console.log(text_2[2].toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.substring(str.indexOf('d'), str.indexOf('g') + 1));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str_1 = 'Ревуть воли як ясла повні';
let stringToarray = str => str.split(' ');

let arr = stringToarray(str_1);
console.log(arr);

let yuy = ['fgh', 56, '&&&'];
let concat = yuy.concat(arr);
console.log(concat);
concat.splice(concat.indexOf('ясла'), 1);
console.log(concat);
let l = concat.slice(1, 3);
console.log(l)
console.log(concat);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
numbers = numbers.map(value => value.toString());

console.log(numbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

let sortNums = ((array, direction) => {
    switch (direction) {
        case 'ascending':
            array.sort((a, b) => a - b);
            return array;
        case 'descending':
            array.sort((a, b) => b - a);
            return array;
    }
});

console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);

// -- відсортувати його за спаданням за monthDuration
filteredCourses.sort((a, b) => b.monthDuration - a.monthDuration);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
filteredCourses = filteredCourses.map((value, index) => ({id: index += 1, ...value,}));
console.log(filteredCourses);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];

// - знайти піковий туз
let foundAce = cards.find(item => item.cardSuit === 'spade' && item.value === 'ace');
console.log(foundAce);

// - всі шістки
let foundSixes = cards.filter(item => item.value === '6');
console.log(foundSixes);

// - всі червоні карти
let foundReds = cards.filter(item => item.color === 'red');
console.log(foundReds);

// - всі буби
let foundDiamonds = cards.filter(item => item.cardSuit === 'diamond');
console.log(foundDiamonds);

// - всі трефи від 9 та більше
let foundClubs = cards.filter(item => ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(item.value) && item.cardSuit === 'clubs');
console.log(foundClubs);

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let all = cards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'spade') {
//         accumulator.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         accumulator.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         accumulator.hearts.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card);
//     }
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
let all = cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(all);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// title: 'JavaScript Complex',
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']

// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.find(item => item.modules.includes('sass'));
console.log(sass);

// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(item => item.modules.includes('docker'));
console.log(docker);