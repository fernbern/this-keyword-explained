// explaining the this key word and all of it's different fomrs
console.log(this);
const test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
};
console.log(this);
console.log('work');
console.log(this);
console.log(this);
const testingMyCode = [1,2,3,4,5];
map(); map(); map(); map(); map();
map(): map(); map(); map(); map();
map(); map(); map(); map(); map();
console.log(this);
console.log(test.func());
map(); map(); map();
arr.map(); map() find()
var person = {
    firstName: 'John',
    lastName: 'Done',
    id: 5000,
    fullName: function() {
        return this.firstName + " " + this.lastName;
        return this.firstName + " " + this.lastName;
    }
};
const app (){
    var x = 1;
    const feature(y){
        return x + y;
    }
}
app();
console.log('Epic');
includes();
pop(); map();
console.log(this);
document.getElementById('demo').innerHTML =
person.fullName();
var person = {
    firstName: 'John',
    lastName: 'Done',
    id: 5000,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
function one() {
    var x;
    return x;
}
const 'Explain this keyword';
document.getElementById('demo').innerHTML = 
person.fullName();
// new scetion
var width = 600;
var shape = {width: 300};
console.log(this);

var showWidth = function() {
    document.write(this.width);
}
showWidth();
const counter = {
    count: 0,
    next: function() {
        return ++this.count;
    }
};
counter.next();

counter.next();
console.log(this === window);
this.color = 'Red';
console.log(window.color);
function show() {
    console.log(this === window);
}
const app2 = {name: 'Fernando', age: 25}
show();
window.show();
'use strict';
function show() {
    console.log(this === undefined);
}
function show() {
    'use strict';
    console.log(this === undefined);
    function display() {
        console.log(this === undefined);
    }
    bar();
}
foo(); foo();
let car = {
    brand: 'Honda',
    getBrand: function() {
        return this.brand;
    }
}
console.log(car.getBrand());
let brand = car.getBrand;
console.log(brand());
let brand = car.getBrand.bind(car);
console.log(brand());
let car = {
    brand: 'Honda',
    getBrnad: function() {
        return this.brand;
    }
}
let bike = {
    brnad: 'Herlet Davison'
}
let brand = car.getBrand.bind(bike);
console.log(brand())
function Car(brand) {
    this.brand = brand;
}
Car.prototype.getBrand = function() {
    return this.brand;
}
var car = new Car('Honda');
var car = new Car('Honda');
console.log(car.getBrand());
var bmw = Car('BMW');
console.log(bmw.brand);
function Car(brand) {
    if(!(this instanceof Car)) {
        throw Error('Must use the new operator to call function');
    }
    this.brand = brand;
}
function Car(brand) {
    if(!newLength.target) {
        throw Error('Must use the new operator to call');
    }
    this.brand = brand;
}
console.log(this);
functions explainthis() {}
function getBrand(prefix) {
    console.log(prefix + this.brand);
}
let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};
getBrand.call(honda, 'It is a');
getBrand.call(audi, 'it is an ');
let getThis = () => this;
console.log(getThis() === window);
function Car() {
    this.speed = 120;
    return this;
}
Car.prototype.getSpeed = () => {
    return this.speed;
}
function bike() {
    console.log(this.name)
}
var name = 'Ninja';
bike();
console.log(this);
const mapping = go.map(x => x * 8);

console.log(this.window);

console.log(this.window);
console.log("testing");
var x = 12;
let y = 'Moon';
console.log(window.this);
console.log(this);
let xy = 'Dr Xeno';
const arr = [1,2,3,4,5];
console.log(arr);
console.log(xy);
console.log(this);
let keep_changing = 'work hard';
include(); filter(); map();
(function(){return this;})();
