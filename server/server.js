import index from '../page/index';
import step from '../page/step';

const Koa = require('koa');
const Router = require('koa-router');
 
const app = new Koa();
const router = new Router();

router.use('/',index.routes());
router.use('/step',step.routes());

app.use(router.routes()).use(router.allowedMethods());
export default app;