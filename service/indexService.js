const userRepository = require("../persistence/indexRepository");


function index() {
    return userRepository.index();
}

module.exports = {
  index : index
};
