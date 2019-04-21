const Q = require('q');

function getCategories() {

    let deferred = Q.defer();

    setTimeout(() => {
        deferred.resolve([
            {
                id: 1,
                name: '전시'
            },
            {
                id: 2,
                name: '뮤지컬'
            }
        ]);
    }, 500);

    return deferred.promise;
}

module.exports = {
    getCategories: getCategories
};