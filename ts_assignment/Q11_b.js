"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClassFromB = void 0;
const Q11_a_1 = require("./Q11_a"); // Import from moduleA
class MyClassFromB {
    someMethodFromB() {
        console.log("Method from MyClassFromB in moduleB");
        const instanceA = new Q11_a_1.MyClassFromA(); // Use imported class
        instanceA.someMethod();
    }
}
exports.MyClassFromB = MyClassFromB;
