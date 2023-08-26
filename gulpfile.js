const gulp = require('gulp');

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