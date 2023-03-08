export const distToDocs = () => {
  return app.gulp.src('./dist/**/*.*')
    .pipe(app.gulp.dest('./docs'))
};