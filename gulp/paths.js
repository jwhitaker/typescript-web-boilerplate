"use strict";

var path = require("path");

var root = path.dirname(__dirname);
var dist = root + "/dist";

module.exports = {
    dist: dist,
    ts: {
        source: root + "/src/**/*.ts",
        typings: root + "/typings/browser.d.ts",
        output: dist
    },
    templates: {
        source: root + "/src/**/*.html",
        output: dist
    },
    vendor: {
        source: [root + "/jspm_packages/**/*", root + "/config.js"],
        output: dist + "/jspm_packages"
    },
    sass: {
        source: root + "/src/styles/**/*.scss",
        output: dist + "/styles"
    }
};
