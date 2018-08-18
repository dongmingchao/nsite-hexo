let app = require("./server").default;

const server = app.listen(3000);

if (module.hot) {
    module.hot.accept("./server", () => {
        try {
            server.removeAllListeners("request", server);
            app = require('./server').default;
            server.on("request", app.callback());
        } catch (err) {
            console.log(err);
        }
    });
    module.hot.accept();
    module.hot.dispose(() => {
        server.close()
    })
}