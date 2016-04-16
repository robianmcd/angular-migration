var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function () {
    return gulp.src(['src/**/*.ts', 'typings/**/*.ts'])
        .pipe(ts({
            target: 'ES5'
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('default', ['ts'], function () {
    gulp.watch('src/**/*.ts', ['ts']);
});