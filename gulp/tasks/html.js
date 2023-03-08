import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(
      app.plugins.if(
        app.isBuild && app.isExpanded,
        app.plugins.gulpPrettier(),
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
