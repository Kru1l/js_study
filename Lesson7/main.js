try {
    console.log(r);
} catch (e) {
    console.log(e);
}

let y = {};

console.log(y.name?.second);

let time = new Date(1999, 9, 30, 18);
let timeNow = new Date();
console.log(timeNow);

console.log(time.getTime());
let bday = new Date(941295600000);
console.log();

let me = {name: 'Marian', age: 23, bday: new Date(941295600000)};
console.log(me);

let actor = {
    name: 'Kiany',
    movie: 'CDPR',
    stuntman: {
        name: 'John',
        gun: 'P16'
    },
    shooting() {}
};
console.log(actor);

let {stuntman: {name: stName}, stuntman} = actor;
console.log(stName);

let {movie, name} = actor;
console.log(name, '-', movie);

let bnr = (({name}) => console.log(name));
bnr(actor);

let {name: actName, movie: firstMov} = actor;
console.log(actName);

let nums = [-9, 45, 65, 1, 77];

let [x, , k, , l] = nums;
console.log(x, k, l);

let clone = {...actor};
console.log(clone);
console.log(clone.shooting === actor.shooting);

let fullClone = JSON.stringify(actor);
console.log(fullClone);

let parseClone = JSON.parse(fullClone);
console.log(actor);
console.log(parseClone);

let vt = structuredClone(parseClone);
console.log(vt.name === actor.name);

let gt = structuredClone(nums);
console.log(gt[0] === nums[0]);

let copy = Object.assign({}, actor);
console.log(copy.name === actor.name);
