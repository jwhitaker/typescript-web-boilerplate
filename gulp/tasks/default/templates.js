"use strict";

var gulp = require("gulp"),
    browserSync = require("../../browserSync"),
    paths = require("../../paths");

gulp.task("templates", function() {
    gulp.src(paths.templates.source)
        .pipe(gulp.dest(paths.templates.output))
        .pipe(browserSync.default.stream({ once: true }));
});

gulp.task("templates:watch", ["templates"], function() {
    gulp.watch(paths.templates.source, ["templates"]);
});
