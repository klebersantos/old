var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', gulp.series( function() {
    return gulp.src([
        '../assets/css/estilo.scss'
    ])
    // .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', notify.onError(function(error) {
    return 'Erro ao compilar CSS: ' + error.message;
	})))
	.pipe(cleanCSS())
    .pipe(concat('all.css'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('../build/css'))
    .pipe(notify({ message: 'CSS concluído', onLast: true }));
}));

gulp.task('imagem', gulp.series( function() {
   gulp.src('../assets/images/*/**')
        .pipe(imagemin())
        .pipe(gulp.dest('../build/images'));
}));

 
gulp.task('js', gulp.series( function() {
    return gulp.src([
        '../assets/js/jquery.min.js',
        '../assets/js/owl.carousel.min.js',
        '../assets/js/script.js'
    ])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../build/js'))
    .pipe(notify({ message: 'Scripts concluídos', onLast: true }));
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['../assets/css/*.scss'], gulp.parallel( ['sass'] ));
    gulp.watch(['../assets/images/*'], gulp.parallel( ['imagem'] ));
    gulp.watch(['../assets/js/*.js'], gulp.parallel( ['js'] ));
}));

gulp.task('default', gulp.series( ['sass', 'imagem', 'js', 'watch'] ));
