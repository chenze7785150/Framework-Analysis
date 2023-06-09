'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // index.html 默认回去 view 文件夹寻找，Egg 已经封装好这一层了
    await ctx.render('index.html', {
      title: '你妈贵姓',
    });
  }
  async login() {
    const { ctx } = this;
    ctx.body = 'hi, login';
  }
  async user() {
    const { ctx } = this;
    const { username } = ctx.query;
    ctx.body = username + '111';
  }
}

module.exports = HomeController;
