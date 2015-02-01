var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('default', function() {
  gulp.src(['src/*.js', 'node_modules/closure-library/closure/goog/**/*.js'])
    .pipe(closureCompiler({
      compilerPath: 'node_modules/closure-compiler/lib/vendor/compiler.jar',
      fileName: 'build.js',
      compilerFlags: {
        closure_entry_point: 'ReactKeyboardshortcut',
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        externs: [],
        extra_annotation_name: 'jsx',
        // Some compiler flags (like --use_types_for_optimization) don't have value. Use null. 
        // use_types_for_optimization: null, 
        only_closure_dependencies: true,
        output_wrapper: '%output%;\n\nmodule.exports=ReactKeyboardshortcut;',
        jscomp_off: ['es5Strict', 'globalThis'],
        warning_level: 'VERBOSE'
      }
    }))
    .pipe(gulp.dest('dist'));
});
