"use strict";

var gulp = require("gulp"),
    browserSync = require("../../browserSync"),
    sourcemaps = require("gulp-sourcemaps"),
    ts = require("gulp-typescript"),
    tsconfig = require("gulp-tsconfig-files"),
    tslint = require("gulp-tslint"),
    paths = require("../../paths"),
    projectTsConfig = require("../../../tsconfig.json");

var tsProject = ts.createProject(projectTsConfig.compilerOptions);

gulp.task("ts:tsconfig", function() {
    return gulp.src([paths.ts.source, paths.ts.typings])
        .pipe(tsconfig());
});

gulp.task("ts:tslint", ["ts:tsconfig"], function() {
    return gulp.src(paths.ts.source)
        .pipe(tslint({
            formatter: "verbose"
        }));
});

gulp.task("ts", ["ts:tslint"], function() {
    return gulp.src([paths.ts.source, paths.ts.typings])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.ts.output))
        .pipe(browserSync.default.stream({ once: true }));
});

gulp.task("ts:watch", ["ts"], function() {
    gulp.watch(paths.ts.source, ["ts"]);
});
