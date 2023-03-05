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
  const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });
