const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
        
}

function funcaoPadrao(callback) {
    console.log("Executando via gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá gulp");
    diizTchau();
    callback();
}

function diizTchau() {
    console.log("tchau gulp")
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial:false }, gulp.series(compilaSass));
}