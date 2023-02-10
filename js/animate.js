function animate(obj, target, callback) {
    clearInterval(obj.timer); //缺少清除定时器可能会出现bug
    obj.timer = setInterval(function () {
      var step = (target - obj.offsetLeft) / 10; // 原理公式
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (obj.offsetLeft == target) {
        clearInterval(obj.timer);
        // if (callback) {
        //   callback();
        // }
        callback && callback();
      }
      //匀速动画
      // obj.style.left = obj.offsetLeft + 1 + "px";
 
      //缓动动画
      obj.style.left = obj.offsetLeft + step + "px";
    }, 10);
  }
