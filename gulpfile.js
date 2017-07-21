const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('dev', shell.task('webpack-dev-server', {verbose: true}));

gulp.task('webpack' , shell.task('webpack', {verbose: true}));

gulp.task('eslint', shell.task('eslint --ext .js --ext .jsx ./', {verbose: true}));
