const indexService = require('../service/indexService');

module.exports = {
    index : index
};

function index() {
    return {
        title: indexService.index()
    }
}