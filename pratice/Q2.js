const isbrowser = () => ![typeof window, typeof document].includes('undefined');

console.log(isbrowser())
