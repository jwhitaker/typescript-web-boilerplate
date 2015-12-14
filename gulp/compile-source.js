var ts = require("gulp-typescript"),
    merge = require("merge2");

var tsProject = ts.createProject("./src/tsconfig.json");

module.exports = function(gulp, config, options) {
    return function() {
        var tsResult = gulp.src(config.paths.source)
            .pipe(ts(tsProject));

        return merge([
            tsResult.dts.pipe(gulp.dest("./typings/project/")),
            tsResult.js.pipe(gulp.dest(config.paths.build_debug))
        ]);
    };
}
