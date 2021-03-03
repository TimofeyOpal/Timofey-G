const {src,dest,watch, parallel} = require('gulp');
const scss         = require('gulp-sass');
const concat       = require('gulp-concat');
var browserSync    = require('browser-sync').create();
let uglify         = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');

function scripts(){
    return src('app/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/'))
        .pipe(browserSync.stream())
}

function build(){
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html',
        'app/assets/img/**/*'



    ],{base: 'app'})
        .pipe(dest('dist/'))
}
function browsersync(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function styles(){
    return src('app/scss/style.scss')
        .pipe(scss())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            cascade: false
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}
function watching(done){
    watch(['app/scss/**/*.scss'], styles);
    watch(['assets/img/**/*']);
    watch(['app/js/main.js','!app/js/main.min.js'], scripts);
    watch('app/index.html').on('change', browserSync.reload);

}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.build = build;
exports.default = parallel( watching,scripts,browsersync);