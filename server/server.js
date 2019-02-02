/**
 * This is a module Entry
 * 这个是模块入口文件
 */
import api from 'nsite-api';

const apiRouter = api.router;
import index from '../page/index';
import step from '../page/users.coffee';

api.generator.addJoiRouter(step);
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.use('/', index.routes());
router.use(step.middleware());
router.use(apiRouter.middleware());
app.use(router.routes()).use(router.allowedMethods());

export default app;