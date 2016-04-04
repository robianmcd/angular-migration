var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function () {
    return gulp.src([
        'src/**/*.ts', 
        'typings/**/*.ts',
        //Taken from https://github.com/angular/angular/issues/7280
        'node_modules/angular2/typings/browser.d.ts'
    ])
        .pipe(ts({
            target: 'ES5',
            module: 'system',
            moduleResolution: 'node',
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            typescript: require('typescript')
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('default', ['ts'], function () {
    gulp.watch('src/**/*.ts', ['ts']);
});