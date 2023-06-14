// let urlUsersTodos = new URL('https://jsonplaceholder.typicode.com/todos');
//
// urlUsersTodos.searchParams.set('userId', '5');
//
// fetch(urlUsersTodos)
//     .then(res => res.json())
//     .then(console.log);
//
//
// let url = new URL(location.href);
// console.log(url.searchParams.get('name'));
// console.log(url.searchParams.get('age'));

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            const div = document.createElement('div');
            div.classList.add('user')

            const p = document.createElement('p');
            p.innerText = user.name + ', ID: ' + user.id

            // const form = document.createElement('form');
            // form.action = 'user-details.html?data=' + JSON.stringify(user);

            const a = document.createElement('a');
            a.href = 'user-details.html?data=' + JSON.stringify(user);

            const button = document.createElement('button');
            button.innerText = 'More info about the User'

            // form.appendChild(button);
            a.appendChild(button)
            div.append(p, a/*form*/);
            document.body.appendChild(div);
        }
    })