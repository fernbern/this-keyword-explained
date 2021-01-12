// explaining the this key word and all of it's different fomrs
console.log(this);
const test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
};
console.log(test.func());
var person = {
    firstName: 'John',
    lastName: 'Done',
    id: 5000,
    fullName: function() {
        return this.firstName + " " + this.lastName;
        return this.firstName + " " + this.lastName;
    }
};
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
document.getElementById('demo').innerHTML = 
person.fullName();