// зробити файл user-details.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const wrap = document.body.getElementsByClassName('wrap')[0];
const BASEURL = 'http://jsonplaceholder.typicode.com/users';
const btnPost = document.createElement('button');
btnPost.classList.add('button');
btnPost.innerText = 'Post';
const postDiv = document.body.getElementsByClassName('post')[0];
postDiv.appendChild(btnPost);

btnPost.onclick = (ev) => {
    fetch(BASEURL, {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
            name: 'Kollin Rumsy',
            username: 'wildrabbit',
            phone: '+3804628452'
        }),
        headers: {'Content-type': 'application/json'}
    })
        .then(res => res.json())
        .then(user => console.log(user))
}
fetch(BASEURL)
    .then(res => res.json())
    .then(users => users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        const pId = document.createElement('p');
        pId.innerText = 'User ID: ' + user.id;
        const pName = document.createElement('p');
        pName.innerText = 'Name: ' + user.name;

        const a = document.createElement('a');
        a.innerText = 'Details';
        a.href = `user-details.html?id=${user.id}`;

        userDiv.append(pId, pName, a);
        wrap.appendChild(userDiv);
    }))