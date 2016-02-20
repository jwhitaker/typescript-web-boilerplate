"use strict";

var gulp = require("gulp"),
    sasslint = require("gulp-sass-lint"),
    browserSync = require("../../browserSync"),
    sass = require("gulp-sass"),
    paths = require("../../paths"),
    error = require("../../error-handler");

gulp.task("sass:lint", function() {
    return gulp.src(paths.sass.source)
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
});

gulp.task("sass", ["sass:lint"], function() {
    gulp.src(paths.sass.source)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.output))
        .pipe(browserSync.default.stream());
});

gulp.task("sass:watch", ["sass"], function() {
    gulp.watch(paths.sass.source, ["sass"]);
})
