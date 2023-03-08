import browsersync from "browser-sync";
import replace from "gulp-replace";
import ifPlugin from "gulp-if"
import gulpPrettier from 'gulp-prettier'

export const plugins = {
  browsersync: browsersync,
  replace: replace,
  if: ifPlugin,
  gulpPrettier: gulpPrettier,
}