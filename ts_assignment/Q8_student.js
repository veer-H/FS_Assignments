"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
exports.Student = Student;
