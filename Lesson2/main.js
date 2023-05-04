// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let key = [100, 'Hi', true, 3.14, -15, 'By', 66, 203, 'Ok', 99];
console.log(key);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1 = {
    title: 'The Witcher',
    pageCount: 321,
    genre: 'fantasy'
}

let book_2 = {
    title: 'The Lord of the Rings',
    pageCount: 543,
    genre: 'fantasy'
}

let book_3 = {
    title: 'Schindler`s Ark',
    pageCount: 400,
    genre: 'historical novel'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book_4 = {
    title: 'IT',
    pageCount: 296,
    genre: 'horror',
    authors: {
        name: 'Stephen King',
        age: 75
    }
}

let book_5 = {
    title: 'Harry Potter',
    pageCount: 450,
    genre: 'fantasy',
    authors: {
        name: 'Joanne Rowling',
        age: 57
    }
}

let book_6 = {
    title: 'A Song of Ice and Fire',
    pageCount: 600,
    genre: 'fantasy',
    authors: {
        name: 'George Martin',
        age: 74
    }
}

// - Створити масив з 10 об'єктами, які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'John', username: 'John.03', password: 'carlsberg05'},
    {name: 'Devon', username: 'ArmWrestler', password: 'champ01'},
    {name: 'Levan', username: 'Hulk', password: 'hulk7'},
    {name: 'Lana', username: 'Girl-#1', password: 'Lana0917'},
    {name: 'Kris', username: 'Capitan', password: 'America01'},
    {name: 'Jack', username: 'Sparrow', password: 'thecapitan'},
    {name: 'Steven', username: 'Dr.Strange', password: 'wizard56'},
    {name: 'Tony', username: 'Stark3000', password: 'mypepper'},
    {name: 'Timo', username: 'Ball#1', password: 'pingpong'},
    {name: 'Cristiano', username: 'CR7', password: 'goldenball'}
]
let userPasswords = [users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password];
console.log(userPasswords);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3

let x = 0;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
    x = x + 1;
}
if (x !== 0) {
    console.log('Вірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю чи четверту частину години).

let time = 44;

if (time > 0 && time <= 15) {
    console.log('First quarter');
} else if (time > 15 && time <= 30) {
    console.log('Second quarter');
} else if (time > 30 && time <= 45) {
    console.log('Third quarter')
} else if (time > 45 && time < 60) {
    console.log('fourth quarter');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 32;

if (day > 0 && day <= 11) {
    console.log('Перша декада');
} else if (day > 11 && day <= 21) {
    console.log('Друга декада');
} else if (day > 21 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Це шо за день такий?');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let weekday = 'Неділя';

switch (weekday) {
    case 'Понеділок':
        console.log('Робота');
        break;
    case 'Вівторок':
        console.log('Настільний теніс');
        break;
    case 'Середа':
        console.log('Наука');
        break;
    case 'Четвер':
        console.log('Волейбол');
        break;
    case 'П`ятниця':
        console.log('Плавання');
        break;
    case 'Субота':
        console.log('Барбекю');
        break;
    case 'Неділя':
        console.log('Сум за п`ятницею');
        break;
    default:
        console.log('Не знаю, шо ти від мене хочеш.');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number_1 = +prompt('Введіть перше число');
let number_2 = +prompt('Введіть друге число');

if (number_1 > number_2) {
    console.log(number_1);
} else if (number_1 < number_2) {
    console.log(number_2);
} else if (number_1 === number_2) {
    console.log('Числа рівні');
}

//     - є змінна b, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній b значення "default"  якщо значення змінної b являється falsy (хибноподібні, тобто приводиться до false)

let b = 0;

if (b === NaN || b === undefined || b === null || b === 0) {
    b = 'default';
}
console.log(b);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('JavaScript Super!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Java Super!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Python Super!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('QA Super!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('FullStack Super!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Frontend Super!');
}
/*--------------------Варіант2-----------------------*/
if (coursesAndDurationArray[0].monthDuration > 5 || coursesAndDurationArray[1].monthDuration > 5 || coursesAndDurationArray[2].monthDuration > 5 || coursesAndDurationArray[3].monthDuration > 5 || coursesAndDurationArray[4].monthDuration > 5 || coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
}


