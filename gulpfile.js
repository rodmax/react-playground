const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('dev', shell.task('webpack-dev-server'));

gulp.task('webpack' , shell.task('webpack'));
