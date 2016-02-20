"use strict";

var gulp = require("gulp"),
    paths = require("../../paths");

gulp.task("vendor", function() {
    gulp.src(paths.vendor.source, { base: paths.dist })
        .pipe(gulp.dest(paths.vendor.output));
});
