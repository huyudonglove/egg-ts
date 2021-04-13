import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
    private readonly app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    async configWillLoad() {
        console.log('[configWillLoad: ]', this.app)
    }

    async serverDidReady() {
        // http / https server 已启动，开始接受外部请求
        // 此时可以从 app.server 拿到 server 的实例
        // (this.app as any).server.timeout = 0;
        // (this.app as any).server.keepAliveTimeout = 0;
    }
    async didLoad() {
       console.log(this.app, 1)
    }
}
