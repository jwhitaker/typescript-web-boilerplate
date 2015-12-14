var gulp = require("gulp"),
    gulpSequence = require("gulp-sequence");

var config = {
    paths: {
        node_modules: "./node_modules",
        jspm_packages: "./jspm_packages",
        typings: "./typings",
        views: "./src/**/*.html",
        source: "./src/**/*.ts",
        vendor: ["./jspm_packages/**/*", "./config.js"],
        build: "./build",
        build_debug: "./build/debug"
    }
};

function getTask(file, options) {
    return require("./gulp/" + file)(gulp, config, options);
}

gulp.task("clean:build", getTask("clean", { paths: [config.paths.build] }));

gulp.task("clean:install", getTask("clean", { paths: [config.paths.node_modules, config.paths.jspm_packages, config.paths.typings]}));

gulp.task("clean:all", ["clean:build", "clean:install"]);

gulp.task("vendor", getTask("vendor"));

gulp.task("templates", getTask("templates"));

gulp.task("compile:source", getTask("compile-source"));

gulp.task("webserver", getTask("webserver"));

gulp.task("watch", ["compile:source", "templates"], function() {
    gulp.watch(config.paths.source, ["compile:source"]);
    gulp.watch(config.paths.views, ["templates"]);
});

gulp.task("dev", gulpSequence("clean:build", "watch", "vendor", "webserver"));

gulp.task("build:release", gulpSequence("clean:build", ["compile:source", "templates", "vendor"]));

gulp.task("default", ["build:release"]);
