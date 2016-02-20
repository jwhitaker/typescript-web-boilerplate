"use strict";

var gulp = require("gulp"),
    gulpSequence = require("gulp-sequence"),
    browserSync = require("../../browserSync"),
    paths = require("../../paths");

gulp.task("pre-serve", ["watch"]);

gulp.task("serve", ["pre-serve"], function() {
    browserSync.default.init({
        open: false,
        server: {
            baseDir: paths.dist
        }
    });
});
