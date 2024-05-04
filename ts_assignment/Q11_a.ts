import { MyClassFromB } from './Q11_b'; // Import from moduleB

export class MyClassFromA {
    public someMethod(): void {
        console.log("Method from MyClassFromA in moduleA");
        const instanceB = new MyClassFromB(); // Use imported class
        instanceB.someMethodFromB();
    }
}
