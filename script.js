"use strict"

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        Object.freeze(this);
    }

    showPerson () {
        console.log(this);
    }
}

const admin = new Person ('Ivan', 20);
admin.showPerson();
