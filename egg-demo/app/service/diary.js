'use strict';

const Service = require('egg').Service;

class DiaryService extends Service {
  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.select('user_table');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async add(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user_table', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = DiaryService;
