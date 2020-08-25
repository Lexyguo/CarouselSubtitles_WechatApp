const { watch, src, dest } = require('gulp');
const fs = require('fs'),
  path = require('path'),
  rename = require('gulp-rename'),
  changed = require('gulp-changed'),
  sass = require('gulp-sass'),
  config = {
    src: ['./components/**/*.scss', './pages/**/*.scss'],
  };

// sass 处理
// 上线后改用compressed
function scss(cb) {
  src(config.src)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      rename(function (path) {
        path.extname = '.wxss';
      })
    )
    .pipe(
      dest(function (p) {
        console.log('开始编译: ' + p.dirname + '/' + p.basename);
        if (p.dirname.indexOf('components') > -1) {
          return './components';
        } else {
          return './pages';
        }
      })
    )
    .on('end', function () {
      console.log('[完成] sass 编译完毕');
    });
  cb();
}

function gulpWatch() {
  console.log('start watch...');
  watch(config.src, scss);
}

exports.scss = scss;
exports.default = gulpWatch;
