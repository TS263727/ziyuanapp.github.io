        // 运动框架
        window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            return setTimeout(fn, 1000 / 60)
        }
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

        let navBtn = document.getElementsByClassName('navBtn'),
            alink = document.getElementsByClassName('alink'),
            topNav = document.getElementsByClassName('topListNav')[0];
        let state = 0;
        console.log(topNav.innerHTML)
        showNav = function () {
            if (state == 0) {
                state = 1
                animation(topNav, 'height', 150, 20.5)
                // 点出来得高度
            } else {
                state = 0
                animation(topNav, 'height', 0, 60)
            }
        }
        //运动框架开始
        function animation(ele, attr, value, step) {
            value = parseFloat(value);
            step = parseFloat(step);
            var startAttr = parseFloat(getStyle(ele)[attr]), // 拿到要控制的初始属性值
                isDirection = startAttr > value; // true : 起始值大（要减step）

            if (isDirection) {
                step = -step; 	// 确定方向
            } // 
            fn();
            function fn() {
                startAttr += step;
                if (isDirection ? startAttr <= value : startAttr >= value) {
                    // 一旦进来 就是达到目标值
                    startAttr = value;
                } else {
                    requestAnimationFrame(fn)
                }
                ele.style[attr] = startAttr + "px";
            }
        }

        function getStyle(ele) {
            return ele.currentStyle || getComputedStyle(ele);
        }
        console.log(alink.length)
        for (let i = 0; i < alink.length; i++) {
            alink[i].index = i;
            alink[i].addEventListener('click', function () {

                alink[i].className = 'alinkActive alink'
            })
        }