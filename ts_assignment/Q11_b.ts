import { MyClassFromA } from './Q11_a'; // Import from moduleA

export class MyClassFromB {
    public someMethodFromB(): void {
        console.log("Method from MyClassFromB in moduleB");
        const instanceA = new MyClassFromA(); // Use imported class
        instanceA.someMethod();
}
}
