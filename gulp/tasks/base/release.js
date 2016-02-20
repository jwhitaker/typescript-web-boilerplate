var gulp = require("gulp"),
    del = require("del"),
    jspm = require("gulp-jspm"),
    gulpSequence = require("gulp-sequence"),
    htmlreplace = require("gulp-html-replace"),
    paths = require("../../paths");


gulp.task("release:clean", function() {
    return del("./release");
});

gulp.task("release:ts", function() {
    return gulp.src("./dist/app/Main.js")
        .pipe(jspm({
            // verbose: true,
            mangle: true,
            selfExecutingBundle: true,
            minify: true
        }))
        .pipe(gulp.dest("./release"));
});

gulp.task("release:templates", function() {
    return gulp.src("./dist/index.html")
        .pipe(htmlreplace({
            "js": "Main.bundle.js"
        }))
        .pipe(gulp.dest("./release/"));
});


gulp.task("release", gulpSequence("build", "release:clean", "release:ts", "release:templates"));
