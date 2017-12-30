var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];


gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);
    var wiredepOptions = {
        bowerJson: require('./bower.json'),
        directory: './bower_components',
        ignorePath: '../../bower_components/'
    };
    var injectOptions = {
        ignorePath: '/public/'
    };
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('server', ['style', 'inject'], function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        watch: jsFiles
    }
    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting Server...');
        })
});