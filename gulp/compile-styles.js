var ts = require("gulp-typescript"),
    sass = require("gulp-sass");

module.exports = function(gulp, config, options) {
    return function() {
        return gulp.src(config.paths.styles)
            .pipe(sass().on("error", sass.logError))
            .pipe(gulp.dest(config.paths.styles_build_debug));
    };
}
