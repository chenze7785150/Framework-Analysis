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
  async list() {
    const { ctx } = this;
    const result = await ctx.service.diary.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
  // 添加记录
  async add() {
    const { ctx } = this;
    const params = {
      id: 2,
      title: '小张',
      content: '前端要努力',
      date: '2023-06-17',
      url: 'https://www.jianshu.com/p/6ef0e4d39917',
    };
    const result = await ctx.service.diary.add(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
      };
    }
  }
  async user() {
    const { ctx } = this;
    const { username } = ctx.query;
    ctx.body = username;
  }
}

module.exports = HomeController;
