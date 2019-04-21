const Q = require('q');
const User = require('../models').User;

function getUsers() {

    let deferred = Q.defer();

    // const category = User.findAll({});

    // deferred.resolve(category);

    setTimeout(() => {

        // const category = User.findAll({});
        //
        // deferred.resolve(category);

        deferred.resolve([
            {
                id: 1,
                name: '이종호'
            },
            {
                id: 2,
                name: '임퍼뚱'
            }
        ]);
    }, 500);

    return deferred.promise;
}

module.exports = {
    getUsers: getUsers
};