"use strict";

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    plumber      = require("gulp-plumber"),
    postcss      = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    server       = require("browser-sync").create(),
    mqpacker     = require("css-mqpacker"),
    minify       = require("gulp-csso"),
    rename       = require("gulp-rename"),
    imagemin     = require("gulp-imagemin"),
    svgmin       = require("gulp-svgmin"),
    svgstore     = require("gulp-svgstore");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("sprite", function() {
  var cart = gulp.src("img/icon-cart.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite-cart.svg"))
    .pipe(gulp.dest("img"));

  var social = gulp.src([
    "img/icon-fb.svg",
    "img/icon-twitter.svg",
    "img/icon-insta.svg",
    ])
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite-social.svg"))
    .pipe(gulp.dest("img"));
});
