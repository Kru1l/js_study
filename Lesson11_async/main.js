// setTimeout(() => {
//     console.log('Hoh');
//     setTimeout(() => {
//         console.log('????');
//         setTimeout(() => {
//             console.log('!!!!');
//             setTimeout(() => {
//                 console.log(2333);
//                 setTimeout(() => {
//                     console.log('Hoh');
//                     setTimeout(() => {
//                         console.log('????');
//                         setTimeout(() => {
//                             console.log('!!!!');
//                             setTimeout(() => {
//                                 console.log(2333);
//                                 setTimeout(() => {
//                                     console.log('Hoh');
//                                     setTimeout(() => {
//                                         console.log('????');
//                                         setTimeout(() => {
//                                             console.log('!!!!');
//                                             setTimeout(() => {
//                                                 console.log(2333);
//                                             }, 500)
//                                         }, 500)
//                                     }, 500)
//                                 }, 500);
//                             }, 500)
//                         }, 500)
//                     }, 500)
//                 }, 500);
//             }, 500)
//         }, 500)
//     }, 500)
// }, 500);

// setTimeout(() => {
// const div = document.createElement('div');
// div.classList.add('wrap');
// document.body.appendChild(div);
//
//     setTimeout(() => {
//         const itemDiv1 = document.createElement('div');
//         const itemDiv2 = document.createElement('div');
//         const itemDiv3 = document.createElement('div');
//         itemDiv2.innerText = 'sdvfv';
//         itemDiv1.classList.add('item');
//         itemDiv2.classList.add('item');
//         itemDiv3.classList.add('item');
//         div.append(itemDiv1, itemDiv2, itemDiv3);
//     }, 1000);
// }, 1000);

// new Promise(resolve => {
//     setTimeout(() => {
//         const block = document.createElement('div');
//         block.classList.add('wrap');
//         document.body.appendChild(block);
//         resolve(block);
//     }, 1000);
// })
//     .then(value => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 const itemDiv1 = document.createElement('div');
//                 const itemDiv2 = document.createElement('div');
//                 const itemDiv3 = document.createElement('div');
//                 itemDiv2.innerText = 'sdvfv';
//                 itemDiv1.classList.add('item');
//                 itemDiv2.classList.add('item');
//                 itemDiv3.classList.add('item');
//                 value.append(itemDiv1, itemDiv2, itemDiv3);
//                 resolve(value);
//             }, 1000);
//         });
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             if (value.children.length === 3) {
//                 setTimeout(() => {
//                     value.children[1].style.background = 'green';
//                     resolve(value);
//                 }, 1000);
//             } else reject('Issues');
//         });
//     })
//     .then(value => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 value.children[2].style.background = 'red';
//             }, 1000)
//         });
//     })
//     .catch(reason => console.log(reason));

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => value.forEach(user => console.log(user.name)))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => value.map(user => {
//         return {superId: user.id + 100, ...user}
//     }))
//     .then(value => console.log(value))

const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json());

const posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json());

// console.log(users)
// console.log(posts)

let resultAll = Promise.all(
    [users, posts]
    // [
    //     fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()),
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
    // ]
);
resultAll.then(result => console.log(result));
