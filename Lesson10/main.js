// console.log(document.forms['f1'].userName);
// console.log(document.forms['f2'].userEmail);
//
// let block = document.getElementById('block');
// block.onclick = function (ev) {
//     block.style.background = 'black';
//     console.log(ev);
// }
// block.onmousemove = function (ev) {
//     console.log(ev.clientX, ev.clientY);
//     let r = ev.clientY;
//     let g = ev.clientX;
//     let b = ev.clientX;
//     this.style.background = `rgb(${r},${g},${b})`;
// }
// let input = document.getElementById('put');
// input.oninput = function () {
//     block.innerText = this.value;
// }

// let form = document.forms['f1'];
// form.onsubmit = function (ev) {
//     ev.preventDefault();
//     let user = {name: this.userName.value};
//     console.log(user);
// }
//
// localStorage.setItem('user', JSON.stringify({id: 31, name: 'Marian'}));
// // localStorage.clear();
// const userSt = localStorage.getItem('user');
// console.log(userSt);
// let user = JSON.parse(userSt)
// user.age = 23;
// console.log(user);
// localStorage.setItem('user', JSON.stringify(user));

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// let mainDiv = document.getElementsByClassName('main')[0];
// console.log(mainDiv)
//
// for (const product of products) {
//     const div = document.createElement('div');
//
//     const h2 = document.createElement('h2');
//     h2.innerText = product.title + ' - ' + product.price + ' грн.';
//
//     const img = document.createElement('img');
//     img.src = product.image;
//     img.alt = product.title;
//
//     const button = document.createElement('button');
//     button.innerText = 'Add to cart';
//
//     button.onclick = function () {
//         // localStorage.setItem(product.title, product.price);
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(product);
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }
//
//     div.append(h2, img, button);
//     mainDiv.appendChild(div);
// }

/*-----------------------------------hw10----------------------------------------*/

// Створити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт
// в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms['form'];
const div = document.createElement('div');
document.body.appendChild(div);

form.onsubmit = function (ev) {
    ev.preventDefault();
    let user = {name: this.username.value, surname: this.surname.value, age: this.age.value};
    let p = document.createElement('p');
    p.innerText = this.username.value + ' ' + this.surname.value + ', вік: ' + this.age.value;
    div.appendChild(p);
    console.log(user);
}


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const block = document.createElement('div');
const pNum = document.createElement('p');
block.appendChild(pNum);
document.body.appendChild(block);

const number = localStorage.getItem('number') || 39;
const newNum = JSON.parse(number) + 1;
pNum.innerText = newNum;
localStorage.setItem('number', newNum);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату
// та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настуні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const form_2 = document.forms['form_2'];
const div_2 = document.createElement('div');
const p_2 = document.createElement('p');
div_2.appendChild(p_2);
document.body.appendChild(div_2);

form_2.onsubmit = function (ev) {
    ev.preventDefault();
    if (this.age.value < 18) {
        p_2.innerText = 'Нажаль Ви не досягли 18 років. Будь ласка покиньте сторінку.';
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


// (Додаткова частина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
