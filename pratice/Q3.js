function gen(seed) {
    nextseed = seed + 2;
    return nextseed <= 10 ? [seed, nextseed] : false

}

function gen2(iterator, seed) {
    result = [];
    let next = iterator(seed);
    while (next !== false) {
        [value, nextval] = next;
        result.push(value);
        next = iterator(nextval);
    }

    return result
}

console.log(gen2(gen, 0))