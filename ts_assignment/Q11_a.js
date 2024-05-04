"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClassFromA = void 0;
const Q11_b_1 = require("./Q11_b"); // Import from moduleB
class MyClassFromA {
    someMethod() {
        console.log("Method from MyClassFromA in moduleA");
        const instanceB = new Q11_b_1.MyClassFromB(); // Use imported class
        instanceB.someMethodFromB();
    }
}
exports.MyClassFromA = MyClassFromA;
