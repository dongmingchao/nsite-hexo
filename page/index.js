import koa from 'koa-router';

let app = new koa();
app.get('/',ctx => {
    ctx.body = 'Hello Koa index 233';
}).get('/help',ctx => {
    ctx.body = 'help';
}).get('/self',ctx => {
    ctx.body = 'abc123123';
});

export default app;