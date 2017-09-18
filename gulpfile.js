/**
 * Gulp Dependencies
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const html2pug = require('gulp-html2pug');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');

/**
 * Location Constants
 */

// Inputs
const sassIn = 'app/sass/**/*.sass';
const es6In = 'app/js/**/*.js';
const imagesIn = 'app/images/**/*';
const htmlIn = 'app/*.html';

// Outputs
const sassOutDev = 'app/css';
const sassOutProd = 'app/build/css';
const es6OutDev = 'app/js';
const es6OutProd = 'app/build/js';
const imagesOut = 'app/build/images';
const htmlOut = 'app/build';

/**
 * Compile, minify and concatenate sass files
 */
gulp.task('compile-sass', () => {
   gulp.src(sassIn)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(concat('styles.bundle.css'))
      .pipe(gulp.dest(sassOutDev))
      .pipe(gulp.dest(sassOutProd))
      .pipe(browserSync.stream());
});

/**
 * Compile, minify and concatenate es6 files
 */
gulp.task('compile-es6', () => {
   gulp.src([es6In, '!app/js/main.bundle.js']) // Don't recompile bundle
      .pipe(sourcemaps.init())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(uglify())
      .pipe(concat('main.bundle.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(es6OutDev))
      .pipe(gulp.dest(es6OutProd))
      .pipe(browserSync.stream());
});

/**
 * Optimize images
 */
gulp.task('minify-images', () => {
   gulp.src(imagesIn)
      .pipe(imagemin())
      .pipe(gulp.dest(imagesOut))
      .pipe(browserSync.stream());
});

/**
 * Compile views to pug
 */
gulp.task('pug', () => {
   gulp.src(htmlIn)
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(html2pug())
      .pipe(gulp.dest(htmlOut));
});

/**
 * Monitor files for changes
 */
gulp.task('watch-files', () => {
   browserSync.init({
      server: {
         baseDir: './app',
         index: 'homepage.html'
      }
   });
   gulp.watch(sassIn, ['compile-sass']);
   gulp.watch(es6In, ['compile-es6']);
   gulp.watch(imagesIn, ['minify-images']);
   gulp.watch(htmlIn, ['pug']);
   gulp.watch(htmlIn).on('change', browserSync.reload);
});

gulp.task('build', ['compile-sass', 'compile-es6', 'minify-images', 'pug']);
gulp.task('default', ['watch-files']);