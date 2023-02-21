// main module
import gulp from "gulp";

// paths import
import { path } from "./gulp/config/path.js";
// plugins import
import { plugins } from "./gulp/config/plugins.js";

// global variables
global.app = {
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

// scenarios export
export { dev };
export { build };

// default scenario
gulp.task("default", dev);
