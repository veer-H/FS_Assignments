/* //Generators as Iterables
Instead of manually enumerating all 52 card values, you can create a generator 
function that computes all permutations of the different suits and numbers, 
yielding each one by one. Also show all 52 cards? 

*/

function* allCards() {
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (const suit of suits) {
        for (const rank of ranks) {
            yield `${suit} ${rank}`; // Yield the card combination
        }
    }
}

// Print all cards using a for...of loop (generators are iterable)
for (const card of allCards()) {
    console.log(card);
}
