import koa from 'koa-router';

const app = new koa().get('/',ctx => {
    ctx.body = 'Hello step';
}).get('/tt',ctx => {
    ctx.body = 'step tt';
}).get('/ss',ctx => {
    ctx.body = 'step ss';
}).get('/gg',ctx => {
    ctx.body = 'step gg';
});

export default app;