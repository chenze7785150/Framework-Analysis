'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  async index() {
    const { ctx, service } = this;
    const result = await service[this.ctrName].select();
    ctx.body = {
      code: 200,
      data: 'success',
      result,
    };
  }
  async create() {
    const { ctx, service } = this;
    const user = ctx.request.body;
    const result = await service[this.ctrName].create(user);
    ctx.body = {
      code: 200,
      data: 'success',
      result,
    };
  }
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const user = ctx.request.body;
    user.id = id;
    await service[this.ctrName].update(user);
    ctx.body = {
      code: 200,
      data: 'success',
    };
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    await service[this.ctrName].destroy(id);
    ctx.body = {
      code: 200,
      data: 'success',
    };
  }
}

module.exports = BaseController;
