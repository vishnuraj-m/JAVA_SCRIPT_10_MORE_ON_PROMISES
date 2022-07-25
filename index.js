const makeMeAPromise = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                car: 'BMW',
                color: 'red',
                year: '2018'
            });
        }, 700)
    })
}



const makeMeAPromiseEs6 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: 'BMW',
            color: 'red',
            year: '2018'
        });
    }, 700)
})

export default makeMeAPromise;