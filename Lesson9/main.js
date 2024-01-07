// let elementById = document.getElementById("list_1");
// console.log(elementById);
// let tagName = document.getElementById('list_2');
// console.log(tagName);
// // for (const elem of tagName) {
// //     console.log(elem);
// // }
// let text = document.getElementById('par');
// console.log(text.innerHTML = 'dvvfdvcbvr  grcgr');
// text.style.background = 'silver';
// text.style.color = 'blue';
// // tagName.classList.add('new');
//
// let div = document.getElementById('tt');
// console.log(div);
// div.classList.add('vv');
// console.log(div.classList.item(1));
// console.log(div.classList.contains('ggg'));
// div.classList.forEach(item => console.log(item));
// console.log(div.classList.toggle('jj'));
// console.log(div);
// div.classList.forEach(item => console.log(item));
// console.log(text.getAttribute('id'));
//
// // let ul =
// console.log(text.nextElementSibling);
//
//
// let uls = document.querySelectorAll('body > ul');
// console.log(uls);
// for (const ul of uls) {
//     ul.classList.toggle('tyi');
// }
//
// let tyis = document.querySelector('body > .tyi');
// console.log(tyis.getAttribute('class'));
//
// console.log(tagName.children[4].innerText = 'elem 5 5');
// tagName.children[4].style.color = 'red';
// console.log(tagName.childNodes);
//
// let footer = document.createElement('footer');
// footer.innerText = 'I am a footer';
// document.body.appendChild(footer);
// let div1 = document.createElement('div');
// let h1 = document.createElement('h1');
// h1.innerText = 'The whole World';
// h1.style.textAlign = 'center';
// h1.style.background = 'silver';
// h1.style.color = 'purple';
// h1.style.borderRadius = '5px';
// div1.appendChild(h1);
// footer.appendChild(div1);

/*-------------------------------------------hw9----------------------------------------*/

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
let block = document.createElement('div');
// block.classList.toggle('wrap');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
console.log(block.classList);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'cornflowerblue';
block.style.color = 'black';
block.style.fontSize = '20px';

// - додати цей блок в body.
document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
let cloneBlock = block.cloneNode(true);
cloneBlock.innerText = 'Abagalamaga';
document.body.appendChild(cloneBlock);
const img = document.createElement('img');

// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul, всередині якої будуть лежати елементи масиву (кожен в своєму li)
let list = document.createElement('ul');
block.appendChild(list);
for (const item of arr) {
    let liElement = document.createElement('li');
    liElement.innerText = item;
    list.appendChild(liElement);
}

// - Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = item.title + ' - ' + item.monthDuration;
    div.appendChild(p);
    document.body.appendChild(div);
}
// =========================
//
//     - Є масив
let coursesAndDurationArray_1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомогою скріпта, для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray_1) {
    let div = document.createElement('div');
    div.classList.toggle('item');
    let h1 = document.createElement('h1');
    h1.classList.toggle('heading');
    h1.innerText = item.title;
    let p = document.createElement('p');
    p.classList.toggle('description');
    p.innerText = item.monthDuration;
    div.append(h1, p);
    document.body.appendChild(div);
}

// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    const hr1 = document.createElement('hr');
    document.body.appendChild(hr1);

    const div = document.createElement('div');
    div.classList.toggle('member');

    const h3 = document.createElement('h3');
    h3.innerText = simpson.name + ' ' + simpson.surname + ' - ' + simpson.age;

    const p = document.createElement('p');
    p.innerText = simpson.info;

    const image = document.createElement('img');
    // image.setAttribute('scr', simpson.photo);
    // image.setAttribute('alt', simpson.name);
    image.src = simpson.photo;
    image.alt = simpson.name;

    div.append(h3, image, p);
    document.body.appendChild(div);
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
            'angular',
            'mongodb',
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
let hr = document.createElement('hr');
document.body.appendChild(hr);
for (const course of coursesArray) {
    let mainDiv = document.createElement('div');     /*Головний div*/
    mainDiv.classList.toggle('course');
    let titleDiv = document.createElement('div');    /*Другорядний*/
    titleDiv.classList.toggle('title');

    let h1 = document.createElement('h1');
    h1.innerText = course.title;
    titleDiv.appendChild(h1);

    let durationDiv = document.createElement('div');   /*Другорядний*/
    durationDiv.classList.toggle('duration');
    let monthsDiv = document.createElement('div');
    monthsDiv.classList.toggle('months');
    monthsDiv.innerText = course.monthDuration;
    let hoursDiv = document.createElement('div');
    hoursDiv.classList.toggle('hours');
    hoursDiv.innerText = course.hourDuration;
    durationDiv.append(monthsDiv, hoursDiv);

    let modulesDiv = document.createElement('div');    /*Другорядний*/
    modulesDiv.classList.toggle('modules');
    let list = document.createElement('ul');
    modulesDiv.appendChild(list);

    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        list.appendChild(li);
    }

    mainDiv.append(titleDiv, durationDiv, modulesDiv);
    document.body.appendChild(mainDiv);
}
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------