var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function () {
    return gulp.src(['app/**/*.ts', 'typings/**/*.ts'])
        .pipe(ts({
            target: 'ES5',
            module: 'system',
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            typescript: require('typescript')
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('default', ['ts'], function () {
    gulp.watch('app/**/*.ts', ['ts']);
});