"use strict";

var gulp = require("gulp"),
    requireDir = require("require-dir"),
    gulpSequence = require("gulp-sequence");

requireDir("./gulp/tasks", { recurse: true });

gulp.task("build", gulpSequence(
    "clean",
    ["sass", "vendor", "templates", "ts"]
));

gulp.task("build:dev", ["serve"]);

gulp.task("default", ["app"]);
