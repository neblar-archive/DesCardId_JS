/**
 * GULP Builder for DesCardId
 * this file takes care of building our application
 */

/**
 * DesCardId specifics
 */
let src         = "src",
    dest        = "build",
    name        = "DesCardId",
    bannerJS    = "";

/**
 * GULP packages
 */
const babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    del         = require('del'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    header      = require('gulp-header'),
    pkg         = require('./package.json'),
    pump        = require('pump'),
    runSequence = require('run-sequence'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify');

/**
 * Main entry level functions that user will get to know by default
 */

gulp.task('default', ['info']);

gulp.task('info', function(){
    gutil.log('Gulp for DesCardId');
    gutil.log('use \'gulp watch\' to start auto-development');
    gutil.log('use \'gulp build\' to build for production');
    gutil.log('use \'gulp build --type=dev\' to build for development');
});

gulp.task('build', function(){
    gutil.log('Building DesCardId');
    const date = new Date().toLocaleString('en-gb',{year: 'numeric', month: 'long', day: 'numeric'})
    bannerJS    = ['/**',
        ' * '+name,
        ' * <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @since '+date,
        ' * @link http://neblar.com',
        ' * @copyright 2017 Neblar Technologies',
        ' * @license MIT',
        ' */',
        ''].join('\n');

    switch(gutil.env.type){
        case 'dev'          :   dest = dest+"/dev";
            break;
        case 'test'         :   dest = dest+"/test";
            break;
        case 'production'   :
        default             :   dest = dest+"/production";
            gutil.env.type = 'production';
    }

    runSequence(
        'clean',
        'build-js'
    );
});

gulp.task('watch', function(){
    gutil.log('Gulp is watching DesCardId');
    gutil.env.type = 'dev';
    gulp.watch(src+'/**/*', ['build']);
});


/**
 * Sub functions that power the main build and watch functions
 */

gulp.task('build-js', function(cb){

    const minify = gutil.env.type === 'dev' ?  gutil.noop() : uglify();
    const sourceMapsInit  = gutil.env.type === 'dev' ? sourcemaps.init() : gutil.noop();
    const sourceMapsWrite = gutil.env.type === 'dev' ? sourcemaps.write() : gutil.noop();
    const gsrc = [
        src+'/ValidationConstants.js',
        src+'/ValidationFunctions.js',
        src+'/CardNumberValidator.js',
        src+'/TextManipulator.js',
        src+'/CardIdentifier.js',
    ];
    if(gutil.env.type === 'test'){
        gsrc.push(src+'/TestExports.js');
    }
    pump([
            gulp.src(gsrc),
            sourceMapsInit,
            concat(name+'.js'),
            babel({
                presets: ['es2015']
            }),
            minify,
            sourceMapsWrite,
            header(bannerJS, { pkg : pkg } ),
            gulp.dest(dest)
        ],
        cb
    );

});

gulp.task('clean', function(){
    del.sync(dest);
});