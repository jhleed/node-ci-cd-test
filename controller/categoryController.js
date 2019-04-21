const categoryService = require('../service/categoryService');

function getCategories(req, res, next) {
    return categoryService.getCategories().then((val) => {
        res.send(val);
    });
}


module.exports = {
    getCategories: getCategories
};