function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            promise.then((result) => {
                results[index] = result;
                completed++;

                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
}
const promise1 = Promise.resolve('promise1');
const promise2 = Promise.resolve('promise2');
const promise3 = Promise.resolve('promise3');

promiseAll([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); 
    })
    .catch((error) => {
        console.error(error);
    });
