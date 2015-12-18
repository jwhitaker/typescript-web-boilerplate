var ts = require("gulp-typescript"),
    merge = require("merge2");

var tsProject = ts.createProject("./src/app/tsconfig.json");

module.exports = function(gulp, config, options) {
    return function() {
        var tsResult = gulp.src(config.paths.source)
            .pipe(ts(tsProject));

        return merge([
            tsResult.js.pipe(gulp.dest(config.paths.build_debug))
        ]);
    };
}
