'use strict';

// const { Controller } = require('egg');
const BaseController = require('./base');
class UserController extends BaseController {
  constructor(...args) {
    super(...args);
    this.ctrName = 'user';
  }
}

module.exports = UserController;
