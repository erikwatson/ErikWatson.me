const gulp = require('gulp')
const standard = require('gulp-standard')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const minify = require('gulp-minify-css')

const config = require('./.config.json')
const paths = config.paths

gulp.task('default', ['build'], () => {})
gulp.task('watch', ['watch:sass', 'watch:js'], () => {})

gulp.task('watch:sass', () => {
  gulp.watch(paths.sass, ['build:sass'])
})

gulp.task('watch:js', ['watch:js:lib', 'watch:js:app'], () => {})

gulp.task('watch:js:lib', () => {
  gulp.watch(paths.js.lib, ['build:js:lib'])
})

gulp.task('watch:js:app', () => {
  gulp.watch(paths.js.all, ['build:js:app'])
})

gulp.task('build', ['build:js', 'build:sass'], () => {})

gulp.task('build:sass', () => {
  return gulp.src('./client/sass/init.sass')
    .pipe(sass())
    .pipe(concat(paths.css.file))
    .pipe(minify())
    .pipe(gulp.dest(paths.css.dir))
})

gulp.task('build:js', ['build:js:lib', 'build:js:app'], () => {})
gulp.task('build:js:lib', () => {})
// gulp.task('build:js:app', ['check:js'], () => {})

gulp.task('build:js:app', ['check:js'], () => {
  // NOTE: We do JS Source Mapping from WebPack - so we don't need to here
  return gulp.src(paths.js.app)
    .pipe(webpack(require(paths.webpack.config)))
    .pipe(gulp.dest(paths.js.dir))
})

gulp.task('check:js', () => {
  return gulp.src(paths.js.all)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

