var gulp = require('gulp'),
sass = require("gulp-sass"),
browserSync = require("browser-sync").create(),
plumber = require("gulp-plumber"),
autoPrefixer = require("gulp-autoprefixer"),
minify = require('gulp-minify'),
rename = require('gulp-rename');

var srcDir = 'src',
    destDir = 'src';

gulp.task("sass", function(done){
    gulp.src([srcDir + "/sass/**/*.scss", srcDir + "/sass/**/*.sass"])
    .pipe(plumber())
    .pipe(autoPrefixer({
            //browsers: ['last 4 versions'],
            cascade: false
        }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(destDir + "/css"))
    .pipe(browserSync.stream());
    done()
});

gulp.task('watch', function(done){
    gulp.watch([srcDir + "/sass/**/*.scss", srcDir + "/sass/**/*.sass"], ['sass']);
    done();
});

gulp.task('default', gulp.series('sass','watch'));