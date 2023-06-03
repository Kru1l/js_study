// function Person(name, sex, weapon, wifeName, wifeStatus) {
//     this.name = name;
//     this.sex = sex;
//     this.weapon = weapon;
//     this.wife = {name: wifeName, status: wifeStatus};
//
//     console.log(this);
// }
//
// let user1 = new Person('Kiany', 'male', 'guns', 'Julia', 'dead');
//
//
// Person.prototype.shooting = function () {
//     return `Hi, my name is ${this.name}`;
// }
// let user2 = new Person('Johnny', 'male', 'knifes', 'Suyuki', 'alive');
// console.log(user1.shooting());
//
// user2.crying = function () {
//     return `I'm ${this.name} and I'm crying`;
// };
//
// let user3 = new Person('Katara');
// console.log(user2.crying.apply(user3)); // підміна this, .call майже те саме
//
// Person.prototype.calculating = function (a, b) {
//     return `I'm ${this.name} and I'm plussing ${a} to ${b}, and it's ${a + b}`;
// };
//
// console.log(user2.crying());
// console.log(user3.calculating(100, 45));
//
// let rat = Object.assign(user2);
// console.log(rat);
//
// class User {
//     constructor(name, sex) {
//         this.name = name;
//         this.sex = sex;
//     }
//
//     hug() {
//         return `My hugs`;
//     }
// }
//
// let man = new User('Sam', 'male');
// console.log(man);
//
// class Customer extends User {
//
//     constructor(name, sex, weapon) {
//         super(name, sex);
//         this.weapon = weapon;
//     }
//     hug() {
//         return super.hug();
//     }
// }
//
// function User1(name, sex) {
//     this.name = name;
//     this.sex = sex;
// }
//
// function Customer(name, sex, weapon) {
//     User1.apply(this, arguments);
// }
//
// let boy = new Customer('Harry', 'male', 'fork');
// console.log(boy)
// console.log(man.hug());

//------------------------------------hw-------------------------------------//

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
for (let i = 1; i < 11; i++) {
    let user = new User(i, 'Bob', 'Zoltan', `bob_${i}@gmail.com`, i + 910);
    users.push(user);
}
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenUsers = users.filter(user => user.id % 2 === 0);
console.log(evenUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Jaf', 'Claud', `jaf_1@gmail.com`, 100, ['g1', 'h6']),
    new Client(14, 'Jaf', 'Claud', `jaf_2@gmail.com`, 100, ['g1', 'h6', 'gt7', 'q45']),
    new Client(5, 'Jaf', 'Claud', `jaf_3@gmail.com`, 100, ['g1']),
    new Client(4, 'Jaf', 'Claud', `jaf_4@gmail.com`, 100, ['g1', 'h6', 'gt7']),
    new Client(56, 'Jaf', 'Claud', `jaf_5@gmail.com`, 100, ['g1', 'h6',]),
    new Client(18, 'Jaf', 'Claud', `jaf61@gmail.com`, 100, ['g1', 'h6', 'gt7', 'Leopard']),
    new Client(96, 'Jaf', 'Claud', `jaf_7@gmail.com`, 100, ['g1', 'h6', 'gt7', 'b-54,f-16', 'Abrams', 'Himars']),
    new Client(82, 'Jaf', 'Claud', `jaf_8@gmail.com`, 100, ['g1', 'h6', 'gt7', 'q45', 'b-54']),
    new Client(45, 'Jaf', 'Claud', `jaf_9@gmail.com`, 100, ['g1', 'h6', 'gt7', 'b-54,f-16', 'Bayractar']),
    new Client(36, 'Jaf', 'Claud', `jaf_10@gmail.com`, 100, ['g1', 'h6', 'gt7'])
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, mSpeed, capacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.mSpeed = mSpeed;
    this.capacity = capacity;
}

let car1 = new Car('RAV4', 'Toyota', 2012, 230, 2.2);
console.log(car1);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.mSpeed} на годину`;
}
console.log(car1.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    return `Model - ${this.model}, Сar Brand - ${this.producer}, Year - ${this.year}, Max speed - ${this.mSpeed}k/h, Engine capacity - ${this.capacity}`
}
console.log(car1.info());

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.mSpeed += newSpeed;
    return `New Max speed now is ${this.mSpeed}k/h`
}
console.log(car1.increaseMaxSpeed(50));

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
    return `New year is ${newValue}`
}
console.log(car1.changeYear(2015));

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}
car1.addDriver('Jacob');
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Carr {
    constructor(model, producer, year, mSpeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.mSpeed = mSpeed;
        this.capacity = capacity;
    }
}

let carr1 = new Carr('Q8', 'Audi',2018, 260, 2.6);
console.log(carr1);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Carr.prototype.drive = function () {
    return `Їдемо зі швидкістю ${this.mSpeed} на годину`
}
console.log(carr1.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Carr.prototype.info = function () {
    return `Model - ${this.model}, Сar Brand - ${this.producer}, Year - ${this.year}, Max speed - ${this.mSpeed}k/h, Engine capacity - ${this.capacity}`
}
console.log(carr1.info());

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Carr.prototype.increaseMaxSpeed = function (newSpeed) {
    this.mSpeed += newSpeed;
}
carr1.increaseMaxSpeed(-20);
console.log(carr1);

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Carr.prototype.changeYear = function (newValue) {
    this.year = newValue;
}
carr1.changeYear(2020);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Carr.prototype.addDriver = function (driver) {
        this.driver = driver;
}
carr1.addDriver('Bob');
console.log(carr1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let princesses = [
    new Cinderella('Jane', 24, 41),
    new Cinderella('Katara', 21, 39),
    new Cinderella('Tophy', 19, 35),
    new Cinderella('Fiona', 26, 38),
    new Cinderella('Ino', 18, 40),
    new Cinderella('Hinata', 17, 39),
    new Cinderella('Korra', 20, 42),
    new Cinderella('Triss', 35, 41),
    new Cinderella('Wednesday', 18, 37),
    new Cinderella('Rin', 15, 34)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella{
    constructor(name, age, foundShoeSize) {
        super(name, age);
        this.foundShoeSize = foundShoeSize;
    }

    findPrincess(arr) {
        for (const girl of arr) {
            if (this.foundShoeSize === girl.footSize) {
                love.push(girl, prince);
            }
        }
    }
}

let prince = new Prince('Shrek', 28, 38);
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let love = [];
prince.findPrincess(princesses);
console.log(love);

// for (const girl of princesses) {
//     if (girl.footSize === prince.foundShoeSize) {
//         love.push(girl, prince);
//     }
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
Prince.prototype.foundPrincess  = function (arr) {
    return arr.find(girl => {
        if (girl.footSize === prince.foundShoeSize) {
            return girl;
        }
    })
}
console.log(prince.foundPrincess(princesses));