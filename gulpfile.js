//Gulp plugin
var gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    log = util.log;
var reload = browserSync.reload;

var sassFiles = "app/assets/scss/**/*.scss";
let autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8',
    'IE 8', 'IE 9', 'IE 10', 'IE 11'
];

gulp.task("sass", function () {
    log("Compile CSS files " + (new Date()).toString());
    gulp.src(sassFiles)
        .pipe(sass({
            style: 'expanded',
        }))
        .pipe(autoprefixer({
            browsers: autoprefixBrowsers,
        }))
        .pipe(gulp.dest("app/assets/css"))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(reload({
            stream: true
        }));

});

// Live reload
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("app/assets/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task("default", ["sass", 'browser-sync'], function () {
    gulp.watch(sassFiles, ["sass"]);
});