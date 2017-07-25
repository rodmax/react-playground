const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const debug = require('gulp-debug');
const env = require('./devtools/env');


// DEV
gulp.task('dev', shell.task('webpack-dev-server', {verbose: true}));


// BUILD TASKS
gulp.task('clean-build', () => {
    return gulp.src(env.buildDir, {read: false})
    .pipe(clean());
});
gulp.task('webpack' , shell.task('webpack', {verbose: true}));
gulp.task('copy-static-to-build', () => {
    return gulp
    .src([
        path.join(env.srcDir, 'index.html'),
        path.join(env.srcDir, 'assets/*')
    ], {base: env.srcDir})
    .pipe(gulp.dest(env.buildDir));
});

gulp.task('build-gh-pages', () => {
    return runSequence(
        'clean-build',
        ['copy-static-to-build', 'webpack']
    );
});


// LINTERS
gulp.task('eslint', shell.task('eslint --ext .js --ext .jsx ./', {verbose: true}));
gulp.task('tslint', shell.task('tslint -t stylish ./src/**/*ts{x,}', {verbose: true}));

gulp.task('lint', ['eslint', 'tslint']);


// HOOKS
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


gulp.task('js-to-ts', () => {
    const rename = require('gulp-rename');
    return gulp.src([
        path.join(env.srcDir, '*.{js,jsx}'),
        path.join(env.srcDir, '**/*.{js,jsx}'),
    ])
    .pipe(debug({title: 'dbg1'}))
    .pipe(rename(filePath => {
        filePath.extname = filePath.extname.replace('js', 'ts');
    }))
    .pipe(debug({title: 'dbg'}))
    .pipe(gulp.dest(env.srcDir));
});
