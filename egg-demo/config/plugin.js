'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },

  // 开启跨域插件
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};

// eslint-disable-next-line eggache/no-override-exports
// exports.cors = {
//   enable: true,
//   package: 'egg-cors',
// };
