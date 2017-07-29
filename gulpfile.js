const gulp = require('gulp');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const env = require('./devtools/env');


gulp.task('dev', shell.task('webpack-dev-server', {verbose: true}));


// BUILD TASKS
gulp.task('clean-build', () => {
    return gulp.src(env.buildDir, {read: false})
    .pipe(clean());
});
gulp.task('webpack' , shell.task('webpack --hide-modules', {verbose: true}));

gulp.task('build-gh-pages', () => {
    return runSequence(
        'clean-build',
        'webpack'
    );
});


// LINTERS
gulp.task('eslint', shell.task('eslint --ext .js --ext .jsx ./', {verbose: true}));
gulp.task('tslint', shell.task('tslint -t stylish ./src/**/*ts{x,}', {verbose: true}));

gulp.task('lint', ['eslint', 'tslint']);


// HOOKS
gulp.task('pre-push', ['lint', 'webpack']);
gulp.task('pre-commit', shell.task('echo "pre-commit hook not implemented yet :)"'));

gulp.task('install-hooks', shell.task(
    [].concat(
        makeGitHookCreateScript('pre-commit'),
        makeGitHookCreateScript('pre-push')
    ),
    {verbose: true}
));


function makeGitHookCreateScript(hook) {
    return [
        `echo '#!/bin/sh' > .git/hooks/${hook}`,
        `echo gulp ${hook} >> .git/hooks/${hook}`,
        `chmod a+x .git/hooks/${hook}`
    ];
}
