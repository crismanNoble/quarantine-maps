var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var minify = require('gulp-minify');
var replace = require('gulp-replace');

var fs = require('fs');
 
gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
});

// gulp.task('js', function() {
//   return gulp.src('./src/*.js')
//     .pipe(minify())
//     .pipe(gulp.dest('./dist/js/'))
// });

gulp.task('copy-img', function() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('./dist/img/'))
});

gulp.task('replace', function() {
  return gulp.src('./src/*.html')
    .pipe(replace('{{style}}', '<style>'+fs.readFileSync('./dist/css/page.css', 'utf8')+'</style>'))
    // .pipe(replace('{{script}}', '<script>'+fs.readFileSync('./dist/js/page-min.js', 'utf8')+'</script>'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('img:watch', gulp.series('copy-img', function (done) {
  gulp.watch('./src/img/*', gulp.series('copy-img'));
  done();
}));

gulp.task('sass:watch', gulp.series('sass', 'replace', function (done) {
  gulp.watch('./src/*.scss', gulp.series('sass','replace'));
  done();
}));

// gulp.task('js:watch', gulp.series('js', 'replace', function (done) {
//   gulp.watch('./src/*.js', gulp.series('js','replace'));
//   done();
// }));

gulp.task('html:watch', gulp.series('replace', function (done) {
  gulp.watch('./src/*.html', gulp.series('replace'));
  done();
}));

gulp.task('watch',gulp.parallel('sass:watch', 'html:watch','img:watch', function(done){
  done();
}));

gulp.task('default', gulp.series('watch', function(done) {    
  done();
}));