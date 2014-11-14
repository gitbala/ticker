var gulp = require('gulp'),
	handlebars = require('gulp-handlebars'),
	defineModule = require('gulp-define-module'),
	sass = require('gulp-sass'),
	jsbeautify = require('gulp-beautify'),
	merge = require('merge-stream');


// js beautification task
gulp.task('jsbeautify', function() {
  var models = gulp.src('scripts/models/*.js')
			    .pipe(jsbeautify({indentSize: 4}))
			    .pipe(gulp.dest('scripts/models/')
			  ),
  	 views = gulp.src('scripts/views/*.js')
			    .pipe(jsbeautify({indentSize: 4}))
			    .pipe(gulp.dest('scripts/views/')
			  );
	return merge(models, views);
});	

// template task
gulp.task('templates', function() {
  gulp.src(['templates/*.hbs'])
	    .pipe(handlebars())
	    .pipe(defineModule('amd'))
	    .pipe(gulp.dest('templates/')
    );
});

// styles task
gulp.task('styles', function() {
  gulp.src(['styles/*.scss'])
	    .pipe(sass())	    
	    .pipe(gulp.dest('styles/')
    );
});

// build all task
gulp.task('build', ['jsbeautify', 'templates', 'styles']);

gulp.task('default', ['build']);