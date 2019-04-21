const categoryRepository = require('../persistence/categoryRepository');

function getCategories() {
    return categoryRepository.getCategories();
}

module.exports = {
    getCategories: getCategories
};