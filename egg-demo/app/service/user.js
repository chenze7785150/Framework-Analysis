'use strict';

// const Service = require('egg').Service;
const BaseService = require('./base');

class UserService extends BaseService {
  constructor(...args) {
    super(...args);
    this.ctrName = 'user';
  }
}
module.exports = UserService;
