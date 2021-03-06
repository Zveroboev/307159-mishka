"use strict"

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
    svgstore     = require("gulp-svgstore"),
    run          = require("run-sequence"),
    del          = require("del");

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
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("serve", function() {
  server.init({
    server: "./build",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", ["html:update"]);
  gulp.watch("js/**/*.js", ["js:update"]);
});

gulp.task("html:copy", function() {
  return gulp.src("*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("html:update", ["html:copy"], function(done) {
  server.reload();
  done();
});

gulp.task("js:copy", function() {
  return gulp.src("js/*.js")
    .pipe(gulp.dest("build/js/"));
});

gulp.task("js:update", ["js:copy"], function(done) {
  server.reload();
  done();
});

gulp.task("images", function() {
  var img = gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
  var svg = gulp.src("build/img/**/**.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function() {
  var cart = gulp.src("build/img/icon-cart.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite-cart.svg"))
    .pipe(gulp.dest("build/img"));

  var social = gulp.src([
    "build/img/icon-fb.svg",
    "build/img/icon-twitter.svg",
    "build/img/icon-insta.svg"
    ])
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite-social.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("build", function(fn) {
  run("clean", "copy", "style", "images", "sprite", fn);
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});
