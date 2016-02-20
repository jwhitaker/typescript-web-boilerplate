var gulp = require("gulp"),
    gulpSequence = require("gulp-sequence");

gulp.task("watch", gulpSequence(
    "clean",
    ["vendor", "ts:watch", "templates:watch", "sass:watch"]
));
