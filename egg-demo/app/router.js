'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/api/user', controller.user);
  // router.get('/user', controller.user.getUser);
  // router.get('/add', controller.home.add);
  // router.get('/list', controller.home.list);
};
