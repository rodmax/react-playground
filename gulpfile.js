const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('dev', shell.task('webpack-dev-server', {verbose: true}));

gulp.task('webpack' , shell.task('webpack', {verbose: true}));

gulp.task('eslint', shell.task('eslint --ext .js --ext .jsx ./', {verbose: true}));


gulp.task('pre-push', ['eslint', 'webpack']);
gulp.task('pre-commit', shell.task('echo "pre-commit hook not implemented yet :)"'));

gulp.task('install-hooks', shell.task(
    [].concat(
        getShellCommandsToCreateHook('pre-commit'),
        getShellCommandsToCreateHook('pre-push')
    ),
    {verbose: true}
));


function getShellCommandsToCreateHook(hook) {
    return [
        `echo '#!/bin/sh' > .git/hooks/${hook}`,
        `echo gulp ${hook} >> .git/hooks/${hook}`,
        `chmod a+x .git/hooks/${hook}`
    ];
}
