const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

// Compila Scripts Task
gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

// Watch Task
gulp.task('watch', ['scripts'], () => {
	gulp.watch('src/**/*.ts', ['scripts']);
});

// Start Task
gulp.task('start', () => {
	nodemon({
		script: 'dist/index.js',
		ext: 'html js'
	});
});

// Definición Tareas
gulp.task('default', ['start', 'watch']);