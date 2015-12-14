module.exports = function(gulp, config, options) {
    return function() {
        return gulp.src(config.paths.vendor, { base: "./" })
            .pipe(gulp.dest(config.paths.build_debug));
    }
}
