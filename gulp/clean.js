var del = require("del");

module.exports = function(gulp, config, options) {
    return function() {
        return del(options.paths);
    }
}
