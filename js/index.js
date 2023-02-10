window.addEventListener('load', function () {
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var focus = document.querySelector(".focus");
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;
 
    focus.addEventListener("mouseenter", function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // 自动停止定时轮播
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener("mouseleave", function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 自动重启定时轮播
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000)
    })
 
    for(var i = 0; i < ul.children.length; i++){
        // 动态创建li
        var li = document.createElement("li");
        // 1、li添加索引号index
        li.setAttribute('index',i);
        // 将li添加到ol
        ol.appendChild(li);
 
        // 2、点击的圆圈高亮，排他思想
        li.addEventListener('click', function(){
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 3、点击圆圈得到对应的index
            var index = this.getAttribute('index');
            // num、index 赋值的作用是点击圆圈的同时改变num和index的默认值，防止出现bug
            num = index;
            circle = index;
            // console.log(index);
            // console.log(focusWidth);
            // console.log(-index * focusWidth);
 
            // 4、点击圆圈图片滚动
            animate(ul, -index * focusWidth);
            // 遇到的bug：index和focusWidth数值确实有，animate函数也没问题，但是动画没有滑动
            // 原因是animate的obj参数中没有使用绝对定位
        })
    }
    // 圆圈默认第一个
    ol.children[0].className = 'current';
 
    // 5、点击左右侧按钮图片无缝滚动 
    var num = 0;
    var circle = 0;
    var firstImg = ul.children[0].cloneNode(true); //深克隆（true）第一张图片，并添加至最后
    ul.appendChild(firstImg);
    // 右侧按钮
    arrow_r.addEventListener('click',function(){
        if(num == ul.children.length - 1){
            // 走到最后一张图片是迅速定位到第一张图片
            ul.style.left = 0;
            num = 0; //要重置为0
        }
        num++;
        animate(ul, -num * focusWidth);
 
        // 点击按钮后圆圈跟着变化
        circle++;
        if(circle == ol.children.length){
            circle = 0; //要重置为0
        }
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current'
    })
    // 左侧按钮
    arrow_l.addEventListener('click',function(){
        if(num == 0){       
            // 走到第一张图片是迅速定位到最后一张图片
            ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';
            num = ul.children.length - 1; //要重置为0
        }
        num--;
        animate(ul, -num * focusWidth);
 
        // 点击按钮后圆圈跟着变化
        circle--;
        if(circle < 0){
            circle = ol.children.length - 1; //要重置为0
        }
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current'
    })
 
    // 自动播放，加一个定时器
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000)
})