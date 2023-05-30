function observe(obj) {
  console.log('obj======', obj);
    for (const key in obj) {
        let internalVal = obj[key];
        let funcs = [];
        Object.defineProperty(obj, key, {
            get: function () {
              // 依赖收集，记录：是哪个函数在调用
              if(window._func && !funcs.includes(window._func)){
                funcs.push(window._func);
              }
              return internalVal;
            },
            set: function (val) {
              internalVal = val;
              // 派发更新，运行；执行我的函数
              for(var i = 0;i<funcs.length; i++){
                funcs[i]();
              }
            }
        })
    }
}

function autoRun(fn){
  window._func = fn;
  fn();
  window._func = null;
}