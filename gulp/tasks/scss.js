import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserlist: ['last 3 versions'],
          cascade: true,
        })
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          groupCssMediaQueries(),
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          app.plugins.replace('\n', '')
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          cleanCss(),
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild && app.isExpanded,
          app.plugins.gulpPrettier(),
        )
      )
      // .pipe(groupCssMediaQueries())
      // .pipe(app.plugins.replace('\n', '')) /* kills all breaks of groupCssMediaQueries */
      // .pipe(cleanCss())
      .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
      .pipe(app.plugins.browsersync.stream())
  );
};
