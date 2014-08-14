var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        host: 'ang5.lh',
	port: 9090,
        root: 'app',
	livereload: true
    });
});

gulp.task('reload', function () {
    gulp
        .src('./app/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/**/*'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
