import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      // .pipe(groupCssMediaQueries())
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserlist: ["last 3 versions"],
          cascade: true,
        })
      )
      // .pipe(app.plugins.replace('\n', '')) /* kills all breaks of groupCssMediaQueries */
      .pipe(cleanCss())
      .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: true }))
      .pipe(app.plugins.browsersync.stream())
  );
};
