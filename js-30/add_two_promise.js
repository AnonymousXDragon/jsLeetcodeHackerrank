var addTwoPromises = async function(promise1, promise2) {

    return Promise.all([promise1,promise2])
            .then((values) =>  values)
            .then((val) => {
                return sum = val[0] + val[1]
            })
    
};


promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)) 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1,promise2).then(console.log);