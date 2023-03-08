// main module
import gulp from "gulp";

// paths import
import { path } from "./gulp/config/path.js";
// plugins import
import { plugins } from "./gulp/config/plugins.js";

// global variables
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  isExpanded: process.argv.includes('--expanded'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// tasks import
import { copy } from "./gulp/tasks/copy.js";
import { favicon } from "./gulp/tasks/favicon.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// ------------------------------------------------
import { distToDocs } from "./gulp/tasks/dist-to-docs.js"

// watcher
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// main tasks
const mainTasks = gulp.parallel(copy, html, scss, js, images, favicon);

// scenarios
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
// ------------------------------------------------
const copyDistToDocs = gulp.series(distToDocs);

// scenarios export
export { dev };
export { build };
// ------------------------------------------------
export { copyDistToDocs };

// default scenario
gulp.task("default", dev);
