const assert = require('assert');
const categoryRepository = require('../../persistence/categoryRepository');

describe('categoryRepository', () => {
    it('should return 2 elements when call getCategories', function (done) {
        categoryRepository.getCategories().then((val) => {
            assert.deepStrictEqual(val, [
                {
                    id: 1,
                    name: '전시'
                },
                {
                    id: 2,
                    name: '뮤지컬'
                }
            ]);
            done();
        })
    });
});