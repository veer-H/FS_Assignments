async function sequentialOperations(operations) {
    for (const operation of operations) {
        const result = await operation();
        console.log(`Operation result: ${result}`);
    }
}

// Example asynchronous operations (replace these with your actual operations)
function asyncOperation1() {
    return new Promise((resolve) => setTimeout(() => resolve("Operation 1 completed"), 1000));
}

function asyncOperation2() {
    return new Promise((resolve) => setTimeout(() => resolve("Operation 2 completed"), 500));
}

const operations = [asyncOperation1, asyncOperation2];

(async () => {
    await sequentialOperations(operations);
})();
