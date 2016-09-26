"use strict";

var gulp = require("gulp"),
    browserSync = require("../../browserSync"),
    sourcemaps = require("gulp-sourcemaps"),
    ts = require("gulp-typescript"),
    tslint = require("gulp-tslint"),
    paths = require("../../paths"),
    tsProject = ts.createProject("tsconfig.json");

gulp.task("ts:tslint", function() {
    return gulp.src(paths.ts.source)
        .pipe(tslint({
            formatter: "verbose"
        }));
});

gulp.task("ts", ["ts:tslint"], function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.ts.output))
        .pipe(browserSync.default.stream({ once: true }));
});

gulp.task("ts:watch", ["ts"], function() {
    gulp.watch(paths.ts.source, ["ts"]);
});
