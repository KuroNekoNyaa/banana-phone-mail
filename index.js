// 工具函数
var getCls = function (cls) {
    return document.getElementsByClassName(cls)[0];
};

var addCls = function (elem, cls) {
    document.getElementsByClassName(elem)[0].classList.add(cls);
};

var removeCls = function (elem, cls) {
    document.getElementsByClassName(elem)[0].classList.remove(cls);
};

window.onload = function () {
    // header init
    addCls("header", "header_active_1");

    // screen-1 init
    addCls("screen-1__heading", "screen-1__heading_animate_init");
    addCls("screen-1__phone", "screen-1__phone_animate_init");
    addCls("screen-1__shadow", "screen-1__shadow_animate_init");

    // screen-2 init
    addCls("screen-2__heading", "screen-2__heading_animate_init");
    addCls("screen-2__subheading", "screen-2__subheading_animate_init");
    addCls("screen-2__phone", "screen-2__phone_animate_init");

    // screen-3 init
    addCls("screen-3__heading", "screen-3__heading_animate_init");
    addCls("screen-3__subheading", "screen-3__subheading_animate_init");
    addCls("screen-3__phone", "screen-3__phone_animate_init");
    addCls("screen-3__features", "screen-3__features_animate_init");

    // screen-4 init
    addCls("screen-4__heading", "screen-4__heading_animate_init");
    addCls("screen-4__subheading", "screen-4__subheading_animate_init");
    addCls("screen-4__type", "screen-4__type_animate_init");

    // screen-5 init
    addCls("screen-5__heading", "screen-5__heading_animate_init");
    addCls("screen-5__subheading", "screen-5__subheading_animate_init");
    addCls("screen-5__back", "screen-5__back_animate_init");

    // screen-1 定时器
    setTimeout(function () {
        getCls("screen-1__heading").style.visibility = "visible";
        getCls("screen-1__phone").style.visibility = "visible";
        getCls("screen-1__shadow").style.visibility = "visible";

        removeCls("screen-1__heading", "screen-1__heading_animate_init");
        addCls("screen-1__heading", "screen-1__heading_animate_done");

        removeCls("screen-1__phone", "screen-1__phone_animate_init");
        addCls("screen-1__phone", "screen-1__phone_animate_done");

        removeCls("screen-1__shadow", "screen-1__shadow_animate_init");
        addCls("screen-1__shadow", "screen-1__shadow_animate_done");
    }, 500);


    // header
    getCls("header__nav-item_i_1").onclick = function () {
        document.documentElement.scrollTop = 0;
    };

    getCls("header__nav-item_i_2").onclick = function () {
        document.documentElement.scrollTop = 1 * 800 - 60;
    };

    getCls("header__nav-item_i_3").onclick = function () {
        document.documentElement.scrollTop = 2 * 800 - 60;
    };

    getCls("header__nav-item_i_4").onclick = function () {
        document.documentElement.scrollTop = 3 * 800 - 60;
    };

    getCls("header__nav-item_i_5").onclick = function () {
        document.documentElement.scrollTop = 4 * 800 - 60;
    };

    getCls("header__nav").onmouseout = function () {
        getCls("header__nav-item-tip").style.left = "";
    };
    getCls("header__nav-item_i_1").onmouseover = function () {
        getCls("header__nav-item-tip").style.left = (0 * 100 + 20) + "px";
    };
    getCls("header__nav-item_i_2").onmouseover = function () {
        getCls("header__nav-item-tip").style.left = (1 * 100 + 20) + "px";
    };
    getCls("header__nav-item_i_3").onmouseover = function () {
        getCls("header__nav-item-tip").style.left = (2 * 100 + 20) + "px";
    };
    getCls("header__nav-item_i_4").onmouseover = function () {
        getCls("header__nav-item-tip").style.left = (3 * 100 + 20) + "px";
    };
    getCls("header__nav-item_i_5").onmouseover = function () {
        getCls("header__nav-item-tip").style.left = (4 * 100 + 20) + "px";
    };


    // outline
    getCls("outline__item_i_1").onclick = function () {
        document.documentElement.scrollTop = 0;
    };

    getCls("outline__item_i_2").onclick = function () {
        document.documentElement.scrollTop = 1 * 800 - 60;
    };

    getCls("outline__item_i_3").onclick = function () {
        document.documentElement.scrollTop = 2 * 800 - 60;
    };

    getCls("outline__item_i_4").onclick = function () {
        document.documentElement.scrollTop = 3 * 800 - 60;
    };

    getCls("outline__item_i_5").onclick = function () {
        document.documentElement.scrollTop = 4 * 800 - 60;
    };
};


window.onscroll = function () {
    var top = document.documentElement.scrollTop;
    console.log(top);
    if (top < 100) {
        getCls("header").setAttribute("class", "header header_active_1");
        removeCls("header", "header_status_black");
    } else {
        addCls("header", "header_status_black");  // 透明黑底
    }

    if (top < 400) {
        getCls("outline").style.opacity = 0;
    } else {
        getCls("outline").style.opacity = 1;
        getCls("outline").setAttribute("class", "outline outline_active_1");
    }

    if (top > 1 * 800 - 61) {  // header 60px高度 以header下边界刚刚超出screen-2的时候 就触发动画  所以是800 - 60 - 1
        getCls("header").setAttribute("class", "header header_status_black header_active_2");

        removeCls("screen-2__heading", "screen-2__heading_animate_init");
        removeCls("screen-2__subheading", "screen-2__subheading_animate_init");
        removeCls("screen-2__phone", "screen-2__phone_animate_init");

        addCls("screen-2__heading", "screen-2__heading_animate_done");
        addCls("screen-2__subheading", "screen-2__subheading_animate_done");
        addCls("screen-2__phone", "screen-2__phone_animate_done");

        getCls("outline").setAttribute("class", "outline outline_active_2");
    }

    if (top > 2 * 800 - 61) {
        getCls("header").setAttribute("class", "header header_status_black header_active_3");

        removeCls("screen-3__heading", "screen-3__heading_animate_init");
        removeCls("screen-3__subheading", "screen-3__subheading_animate_init");
        removeCls("screen-3__phone", "screen-3__phone_animate_init");
        removeCls("screen-3__features", "screen-3__features_animate_init");

        addCls("screen-3__heading", "screen-3__heading_animate_done");
        addCls("screen-3__subheading", "screen-3__subheading_animate_done");
        addCls("screen-3__phone", "screen-3__phone_animate_done");
        addCls("screen-3__features", "screen-3__features_animate_done");

        getCls("outline").setAttribute("class", "outline outline_active_3");

    }

    if (top > 3 * 800 - 61) {
        getCls("header").setAttribute("class", "header header_status_black header_active_4");

        removeCls("screen-4__heading", "screen-4__heading_animate_init");
        removeCls("screen-4__subheading", "screen-4__subheading_animate_init");
        removeCls("screen-4__type", "screen-4__type_animate_init");

        addCls("screen-4__heading", "screen-4__heading_animate_done");
        addCls("screen-4__subheading", "screen-4__subheading_animate_done");
        addCls("screen-4__type", "screen-4__type_animate_done");

        getCls("outline").setAttribute("class", "outline outline_active_4");
    }

    if (top > 4 * 800 -61) {
        getCls("header").setAttribute("class", "header header_status_black header_active_5");


        removeCls("screen-5__heading", "screen-5__heading_animate_init");
        removeCls("screen-5__subheading", "screen-5__subheading_animate_init");
        removeCls("screen-5__back", "screen-5__back_animate_init");

        addCls("screen-5__heading", "screen-5__heading_animate_done");
        addCls("screen-5__subheading", "screen-5__subheading_animate_done");
        addCls("screen-5__back", "screen-5__back_animate_done");

        getCls("outline").setAttribute("class", "outline outline_active_5");


    }
};