'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  async select() {
    return await this.app.mysql.select(this.ctrName); // 查询所有用户
  }
  async create(user) {
    return await this.app.mysql.insert(this.ctrName, user); // 插入一条用户
  }
  async update(user) {
    return await this.app.mysql.update(this.ctrName, user); // 编辑用户
  }
  async destroy(id) {
    return await this.app.mysql.delete(this.ctrName, { id }); // 编辑用户
  }
}
module.exports = BaseService;
