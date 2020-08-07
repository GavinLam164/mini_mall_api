
const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        await this.ctx.render('home/index.html', {
            content: 'hello, world'
        })
    }
}

module.exports = HomeController