// 全局变量
var scrollTop = 0,
    all_mobile = 768,
    clientWidth = document.documentElement.clientWidth,
    clientHeight = document.documentElement.clientHeight,
    body = document.querySelector('body'),
    header = document.querySelector('.header'),
    common_banner = document.querySelector('.common_banner'),
    parallax = document.querySelector('.parallax')

if (!isMobile()) {
    var lenis = new Lenis({
        lerp: 0.09,
        wheelMultiplier: 0.9,
        smoothTouch: false,
        easing: (t) => {
            return 1 - Math.pow(1 - t, 4);
        },
    })
    lenis.on('scroll', (e) => {
        scrollTop = e.actualScroll
        getScrollTop(scrollTop)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    getScrollTop(lenis.actualScroll)
}else {
    window.addEventListener('scroll',function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        getScrollTop(scrollTop)
    })
    getScrollTop(document.documentElement.scrollTop || document.body.scrollTop)
}

function pageInit() {
    getAnchor()
    Text()
    setTimeout(function () {
        common_banner ? common_banner.classList.add('on') : ''
        $('.parallax .common_bg').addClass('on')
        $('.each_animate').addClass('on')
    },10)
}
pageInit()

// 滚动处理
function getScrollTop(scrollTop) {
    AOS.init({mobile: all_mobile, once: false});
    header ? scrollTop > 200 ? header.classList.add('on') : header.classList.remove('on') : ''
    parallax ? getTransform(parallax,scrollTop) : ''
    if ($('.index1').length) {
        getHorizontal('.index3')
    }
}

// anchor
function getAnchor() {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var idParameter = url.searchParams.get('scrollTo');
    if (idParameter) {
        setTimeout(function () {
            if (!isMobile()) {
                lenis.scrollTo('#'+idParameter)
            }else {
                $('html,body').animate({
                    scrollTop: $('#'+idParameter).offset().top
                })
            }
        },300)
    }
}

var currentUrl = window.location.href;
var url = new URL(currentUrl);
var idParameter = url.searchParams.get('id');
if (idParameter) {
    console.log(idParameter);
}

function getTransform(ele,y) {
    ele.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${y}, 0, 1)`;
}

function clickDown(e) {
    $(e).parents('.item').toggleClass('on')
    $(e).parents('.item').siblings().removeClass('on')
    $(e).siblings().stop().slideToggle(300)
    $(e).parents('.item').siblings().find('.hide').slideUp(300)
}

// Horizontal
function getHorizontal(ele) {
    var speed = 0.6
    $(ele).each(function (i,e) {
        var height = ($(e).find('.x').width() - $(e).find('.wrap').width()) + clientHeight
        var start = $(e).position().top
        var end = (start + height) - clientHeight
        if (height >= clientHeight) {
            $(e).css('height', height + 500 + 'px')
        }
        if (scrollTop >= start && scrollTop <= end) {
            gsap.to($(e).find('.x'), {
                x: -(scrollTop - start),
                duration: speed,
                ease: 'power2.out',
            })
        }else if (scrollTop <= start) {
            gsap.to($(e).find('.x'), {
                x: 0,
                duration: speed,
                ease: 'power2.out',
            })
        }
        if (scrollTop >= end) {
            gsap.to($(e).find('.x'), {
                x: -(height-clientHeight) ,
                duration: speed,
                ease: 'power2.out',
            })
        }
    })
}

// animateText
function Text() {
    $('[animateText]').each(function (i, e) {
        let allChars = [];
        $(e).find('*').each(function (_, el){
            let split = new SplitText(el, { type: "chars" });
            allChars.push(...split.chars);
        });
        gsap.from(allChars, {
            autoAlpha: 0,
            rotationX: -90,
            duration: 1,
            stagger: {
                each: 0.03,
                from: "start"
            }
        });

    });
}

$('.each_animate').each(function (index, ele) {
    var sync = $(ele).is('[data-sync]')
    if(sync && $(ele).children().length>0){
        $(ele).children().each(function(_,e){
            each_animate(e)
        })
    }else{
        each_animate(ele)
    }
});

function each_animate(ele) {
    var text = $(ele).text();
    var html = '';
    text = text.replace(/>\s+</g, '><').trim()
    var reg = /(<.*?>|<\/.*?>)/
    var parts = text.split(reg);
    var currentDelay = 0.20;
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (reg.test(part)) {
            html += part;
        } else{
            for (var j = 0; j < part.length; j++) {
                var char = part[j];
                if (char === ' ') {
                    html += `<span style="display: inline-block;">&nbsp;</span>`;
                } else {
                    html += `<span style="display: inline-block; transition-delay: ${currentDelay.toFixed(2)}s; opacity: 0; transform: translateX(10px);">${char}</span>`;
                    currentDelay += 0.03;
                }
            }
        }
    }
    $(ele).html(html);
}

function backTop() {
    if (!isMobile()) {
        window.pageYOffset !== 0 ? lenis.scrollTo(0,{lerp:0.08}) : ''
    }else {
        $('body,html').animate({
            scrollTop: 0
        })
    }
}

initFormValidate('.foo_search', '.foo_search .button', function (data) {
    console.log(data)
});

function bigTextInit() {
    $('.big_text').each(function () {
        const box = this;
        const move = $(this).find('.move')[0];

        gsap.set(move, {
            xPercent: -50,
            x: 0
        });

        $('.footer').on('mousemove', function (e) {
            const rect = box.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const centerX = rect.width / 2;

            gsap.to(move, {
                x: mouseX - centerX,
                duration: 3,
                ease: 'power3.out',
                overwrite: true
            });
        });

        $('.footer').on('mouseleave', function () {
            gsap.to(move, {
                x: 0,
                duration: 3,
                ease: 'power3.out',
                overwrite: true
            });
        });
    });
}
bigTextInit()