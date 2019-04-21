const assert = require('assert');
const userRepository = require('../../persistence/userRepository');

describe('userRepository', () => {
    it('should return 2 elements when call userCategories', function (done) {
        userRepository.getUsers().then((val) => {
            assert.deepStrictEqual(val, [
                {
                    id: 1,
                    name: '이종호'
                },
                {
                    id: 2,
                    name: '임퍼뚱'
                }
            ]);
            done();
        })
    });
});