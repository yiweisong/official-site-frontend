var header = `
    <div class="header">
                <div class="l">
                    <a href="index.html" class="logo">
                        <img src="static/images/logo.svg" alt="">
                    </a>
                </div>
                <div class="nav">
                    <div class="item">
                        <a href="products.html">Products</a>
                        <div class="level">
                            <div class="joke">
                                <a href="products.html">Current Sensors</a>
                                <a href="products2.html">Inertial Systems</a>
                                <a href="products2.html">Flow Sensors</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <a href="applications.html">Applications</a>
                    </div>
                    <div class="item">
                        <a href="resources.html">Support</a>
                    </div>
                    <div class="item">
                        <a href="news.html">News</a>
                    </div>
                    <div class="item">
                        <a href="about.html">About</a>
                    </div>
                </div>
                <div class="r">
                    <div class="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M6.8666 13.7332C3.08997 13.7332 0 10.6432 0 6.8666C0 3.08997 3.08997 0 6.8666 0C10.6432 0 13.7332 3.08997 13.7332 6.8666C13.7332 10.6432 10.6432 13.7332 6.8666 13.7332ZM6.8666 12.5888C10.0138 12.5888 12.5888 10.0138 12.5888 6.8666C12.5888 3.7194 10.0138 1.14444 6.8666 1.14444C3.7194 1.14444 1.14444 3.71941 1.14444 6.8666C1.14444 10.0138 3.71941 12.5888 6.8666 12.5888ZM11.101 13.5043C10.8721 13.2754 10.9293 12.8749 11.1582 12.7032C11.3871 12.5315 11.7877 12.5315 11.9593 12.7604L13.0465 14.0765C13.2754 14.3054 13.2182 14.706 12.9893 14.8776C12.7604 15.0493 12.3599 15.0493 12.1882 14.8204L11.101 13.5043Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="head_lag">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.40039 14.4C11.2664 14.4 14.4004 11.266 14.4004 7.4C14.4004 3.53401 11.2664 0.400002 7.40039 0.400002C3.5344 0.400002 0.400391 3.53401 0.400391 7.4C0.400391 11.266 3.5344 14.4 7.40039 14.4Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M0.400391 7.4H14.4004M7.40039 0.400002C9.15129 2.31685 10.1463 4.80443 10.2004 7.4C10.1463 9.99558 9.15129 12.4832 7.40039 14.4C5.64949 12.4832 4.65446 9.99558 4.60039 7.4C4.65446 4.80443 5.64949 2.31685 7.40039 0.400002Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>EN</p>
                        <svg class="jt" xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                            <path d="M0.400391 0.400002L4.40039 4.4L8.40039 0.400002" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
`
if (document.querySelector('header')) {
    $('header').append(header)
}

// var id = $('header[id]').attr('id')
// id ? $('.header .r .nav .item').eq(id).addClass('on') : ''

var footer = `
<div class="footer">
            <img src="static/images/light.png" class="light" aos="fade-in" alt="">
            <div class="wrap">
                <div class="top">
                    <div class="title" aos="fade-top">
                        Sensing What Matters — Powering the Future of Intelligence
                    </div>
                    <div class="foo_search" aos="fade-top" aos-delay="100">
                        <input type="text" placeholder="Enter a keyword to search" required data-msg name="foo_search">
                        <div class="button">Search...</div>
                    </div>
                </div>

                <div class="foo_nav" aos="fade-top" aos-delay="200">
                    <div class="item">
                        <a href="products.html">Products</a>
                        <div class="level">
                            <a href="products.html">Current Sensors</a>
                            <a href="products2.html">Inertial Systems</a>
                            <a href="products2.html">Flow Sensors</a>
                        </div>
                    </div>
                    <div class="item">
                        <a href="applications.html">Applications</a>
                        <div class="level">
                            <a href="applications.html">AI Data Centers & HPC AI</a>
                            <a href="applications.html">Electric Vehicles</a>
                            <a href="applications.html">Construction & Agriculture</a>
                            <a href="applications.html">Autonomous Vehicles & Robotics</a>
                            <a href="applications.html">Medical Devices</a>
                        </div>
                    </div>
                    <div class="item">
                        <a href="resources.html">Supports</a>
                        <div class="level">
                            <a href="resources.html">Resources</a>
                            <a href="resources.html">Forum</a>
                            <a href="quality.html">Quality System</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                    <div class="item">
                        <a href="news.html">News</a>
                        <div class="level">
                            <a href="news.html">News</a>
                        </div>
                    </div>
                    <div class="item">
                        <a href="about.html">About</a>
                        <div class="level">
                            <a href="about.html">About Aceinna</a>
                            <a href="about.html">About Aceinna</a>
                            <a href="about.html">History</a>
                            <a href="about.html">Leadership</a>
                            <a href="join.html">Join Us</a>
                        </div>
                    </div>
                </div>
                <div class="foo_media" aos="fade-top" aos-delay="300">
                    <div class="list">
                        <img src="static/images/m1.svg" alt="">
                    </div>
                    <div class="list">
                        <img src="static/images/m2.svg" alt="">
                    </div>
                    <div class="list">
                        <img src="static/images/m3.svg" alt="">
                    </div>
                    <div class="list">
                        <img src="static/images/m4.svg" alt="">
                    </div>
                </div>
                <div class="links" aos="fade-top" aos-delay="400">
                    <p>
                        Copyright © ️2026. Aceinna All Rights Reserved. <a href="">Privacy | Terms of use</a>
                    </p>
                    <a href="https://seniorweb.cn/" target="_blank">DESIGNED BY:SENJU</a>
                </div>
                <div class="big_text" aos="fade-in">
                    <img src="static/images/ace.svg" alt="">
                </div>
            </div>
        </div>
`
if (document.querySelector('footer')) {
    $('footer').append(footer)
}

// var links = ''
// var link = document.createElement('link')
// link.type = 'text/css'
// link.rel = 'stylesheet'
// link.href = links
// document.head.appendChild(link)

function isMobile() {
    return (
        (  /Android|iPhone|iPad|iPod|Windows Phone|HarmonyOS|OpenHarmony/i.test(navigator.userAgent) ||
            (window.matchMedia('(max-width: 768px)').matches && navigator.maxTouchPoints > 0) ) &&
        window.innerWidth <= 768
    );
}


var AOS = {
    init: function (e) {
        var allAos = document.querySelectorAll('*[aos]')
        for (let i = 0; i < allAos.length; i++) {
            !isMobile() ? perform() : execution()
            function perform() {
                allAos[i].classList.add('aos-init')
                var offset = allAos[i].getBoundingClientRect().top - document.documentElement.clientHeight
                if (offset < 0) {
                    allAos[i].classList.add('aos-animate')
                } else if (e.once !== true) {
                    allAos[i].classList.remove('aos-animate')
                }
            }

            function execution() {
                allAos[i].removeAttribute('aos')
                allAos[i].removeAttribute('aos-delay')
            }
        }
    }
}

const countItems = document.querySelectorAll('[data-to]');

function onIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const e = entry.target;
            animateCount(e);
            // observer.unobserve(e);
        }
    });
}

const observer = new IntersectionObserver(onIntersection);
countItems.forEach(item => observer.observe(item));

function animateCount(e) {
    var demo = {score: 0},
        scoreDisplay = e,
        to = e.getAttribute('data-to'),
        speed = e.getAttribute('data-speed') * 1;
    var re = /[^0123456789.]/g;
    var result;
    var array = [];
    while ((result = re.exec(to)) !== null) {
        result.index = to.length - result.index - 1
        array.unshift(result)
    }
    var automatic = 0;
    if (to !== null) {
        if (to.indexOf('.') !== -1) {
            automatic = (to.length - 1) - to.indexOf('.')
        }
    }
    if (speed === 0) {
        speed = 1;
    }
    TweenLite.to(demo, speed, {
        score: to.replaceAll(re, ''),
        onUpdate: showScore
    });

    function showScore() {
        let formatted = formatNumberWithCommasAndDecimal(demo.score, automatic, array);
        if (/^0\d+/.test(to)) {
            while (formatted.length < to.length) {
                formatted = "0" + formatted;
            }
        }
        scoreDisplay.innerHTML = formatted;
    }
}

function formatNumberWithCommasAndDecimal(number, decimalPlaces, separator) {
    var formattedNumber = number.toFixed(decimalPlaces);
    if (separator.length > 0) {
        for (let i = 0; i < separator.length; i++) {
            if (formattedNumber.length > separator[i].index) {
                formattedNumber = formattedNumber.slice(0, formattedNumber.length - separator[i].index) + separator[i][0] + formattedNumber.slice(formattedNumber.length - separator[i].index)
            }
        }
    }
    return formattedNumber;
}


$('video:not(video[muted])').trigger('pause')

function video_alert(e) {
    if (!isMobile()) {
        lenis.stop()
    }else {
        $('body,html').css('overflow','hidden')
    }
    $('.alert_video .joke .close').show()
    var data_video = $(e).attr('data-video')
    var alert = $('.alert_video')
    $('.alert_video .joke .video').html('<video src="' + data_video + '">')
    var video = $('.alert_video .joke .video video')
    $(video).attr('controls', '')
    $(video).attr('loop', '')
    $(alert).addClass('video_active')
    $(video).trigger('play');
    if ($(e).is('.all')) {
        $(alert).addClass('all')
    } else {
        $(alert).removeClass('all')
    }
}

function video_close() {
    if (!isMobile()) {
        lenis.start()
    }else {
        $('body,html').css('overflow','unset')
    }
    $('.alert_video .joke .close').hide()
    $('.alert_video').removeClass('video_active')
    $('.alert_video .joke .video video').trigger('pause');
    $('.alert_video .joke .item').removeClass('item_active')
    $('.alert_video .joke .video').html('')
}

$(document).on('click', '.alert_video .joke .close', function () {
    video_close()
})

$(document).on('click', '.alert_video .black', function () {
    video_close()
})

var video_html = '';
video_html += `<div class="alert_video">
    <div class="joke">
        <div class="video"></div>
        <div class="close">
            <svg t="1676432369827" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2743" width="64" height="64">
                <path d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z"
                      p-id="2744"></path>
            </svg>
        </div>
    </div>
    <div class="black"></div>
</div>`

if ($('*[onclick*="video_alert(this)"]').length > 0) {
    $('body').append(video_html)
}

function on(trigger, ...targets) {
    const index = $(trigger).index();
    $(trigger).addClass('on').siblings().removeClass('on');
    targets.forEach(selector => {
        $(selector).removeClass('on').eq(index).addClass('on');
    });
}

function log(t) {
    console.log(t)
}

function logLength(t) {
    console.log(t[0].getTotalLength())
}

document.querySelectorAll('[data-wheel]').forEach(function (element) {
    element.addEventListener('wheel', function (e) {
        e.stopPropagation();
    });
});

$('.common_stop').on('mousewheel', function (e) {
    return false;
});


$('.text_effect').each(function (index, ele) {
    var ly = $(ele).data('delay');
    if (ly === undefined) {
        ly = 20;
    }
    var text = $(ele).find('.appoint').text();
    $(ele).find('.appoint').html('<div class="fist">' + text + '</div> <div class="fist">' + text + '</div>');
    new SplitText($(ele).find('.fist'), {type: "chars"});
    $(ele).find('.fist').each(function (i, e) {
        $(e).find('div').each(function (i, e) {
            var delay = i * ly;
            $(e).css({
                'transition': '0.6s cubic-bezier(0.76, 0, 0.24, 1) ' + delay + 'ms'
            })
        })
    })
})

// magnets
var magnets = document.querySelectorAll('.hover_button');

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function (event) {
        gsap.to(event.currentTarget, 1.5, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut
        });
        gsap.to($(this).find(".hover_text"), 1.5, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut
        });
    });
});

// Mouse move
function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    !magnetsStrength ? magnetsStrength = 50 : magnetsStrength
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
    !magnetsStrengthText ? magnetsStrengthText = 20 : magnetsStrengthText

    gsap.to(magnetButton, 1.5, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
    gsap.to($(this).find(".hover_text"), 1.5, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
}


let d = document.querySelector(".cursor")
if (d) {
    let speed = document.querySelector('.cursor').getAttribute('data-speed')
    if (speed === null) {
        speed = 0.9
    } else {
        speed = speed / 10
    }

    function S() {
        d && function (e) {
            gsap.set(e, {
                xPercent: -50,
                yPercent: -50
            });
            let t = e,
                r = {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                o = {
                    x: r.x,
                    y: r.y
                },
                a = gsap.quickSetter(t, "x", "px"),
                n = gsap.quickSetter(t, "y", "px");
            document.body.addEventListener("mousemove", e => {
                o.x = e.x, o.y = e.y
            }), gsap.ticker.add(() => {
                const e = 1 - Math.pow(speed, gsap.ticker.deltaRatio());
                r.x += (o.x - r.x) * e, r.y += (o.y - r.y) * e, a(r.x), n(r.y)
            })
        }(d)
    }

    window.addEventListener("DOMContentLoaded", () => {
        S();
    })
}
(function ($) {
    function initDownPull(selector) {
        var $root = selector ? $(selector) : $(document)
        $root.find('.down_pull').each(function () {
            var $wrap = $(this)
            var $list = $wrap.find('.pull_list')
            var noPlaceholder = $wrap.is('[data-no-placeholder="true"]')
            if (!noPlaceholder && $list.find('p.placeholder').length === 0) {
                $('<p class="placeholder disabled">请选择</p>').prependTo($list)
            }
            if (!$wrap.data('initial-text')) {
                $wrap.data('initial-text', $wrap.find('.txt').text())
            }
            applySelectedFromHtml($wrap)
        })

        $root.on('click.downPull', '.down_pull', function (e) {
            e.stopPropagation()
            var $wrap = $(this)
            $('.down_pull').not($wrap).removeClass('on')
            $wrap.toggleClass('on')
        })
        $root.on('click.downPull', '.down_pull .pull_list p', function (e) {
            e.stopPropagation()
            var $item = $(this)
            var parentAll = $item.parents('.down_pull')
            var $wrap = $item.closest('.down_pull')
            if ($item.hasClass('placeholder')) {
                resetDownPull($wrap)
                return
            }
            var text = $item.text()
            var index = $item.prevAll('p:not(.placeholder)').length
            $item.addClass('on').siblings().removeClass('on')
            $wrap.find('.txt').text(text)
            $wrap.find('.down-input').val(text)
            $wrap.removeClass('on').addClass('selected')
            $wrap.trigger('down:change', {
                value: text,
                index: index,
                ele: parentAll
            })
        })
        $(document).on('click.downPull', function () {
            $('.down_pull').removeClass('on')
        })
    }
    function applySelectedFromHtml($wrap) {
        var $selected = $wrap.find('.pull_list p.on').first()
        if (!$selected.length) return
        var text = $selected.text()
        $wrap.find('.txt').text(text)
        $wrap.find('.down-input').val(text)
        $wrap.addClass('selected')
        $wrap.trigger('down:change', {
            value: text
        })
    }
    function resetDownPull($wrap) {
        var initialText = $wrap.data('initial-text') || ''
        $wrap.find('.txt').text(initialText)
        $wrap.find('.down-input').val('')
        $wrap.find('.pull_list p').removeClass('on')
        $wrap.removeClass('on selected')
        $wrap.trigger('down:change', {
            value: ''
        })
    }
    function clearDownPull(selector) {
        var $wraps = selector ? $(selector) : $('.down_pull')
        $wraps.each(function () {
            resetDownPull($(this))
        })
    }
    function setDownPull($wrap, options) {
        var $items = $wrap.find('.pull_list p')
        if (options.value) {
            $items.each(function () {
                if ($(this).text() === options.value) {
                    $(this).trigger('click')
                    return false
                }
            })
        }
    }
    window.initDownPull = initDownPull
    window.clearDownPull = clearDownPull
    window.setDownPull = setDownPull
})(jQuery)

initDownPull()

// $('.down_pull').on('down:change', function (e, data) {
//     console.log(data.value)
// })
// setDownPull($('.down_pull'), {
//     value: ''
// })
// setDownPull($('.down_pull'), {
//     index: 2
// })

var langText = $('*[onclick="getLang(this)"]').attr('data-text')
if(!langText) {
    langText = '选择您的语言'
    if ($('html').attr('lang') === 'en') {
        langText = 'Choose your language'
    }
}
var lang_html = '';
lang_html += `<div class="lang_mask">
    <div class="color"></div>
    <div class="box">
        <div class="close">
            <svg t="1747300309545" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7975" width="28" height="28"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" fill-opacity=".01" p-id="7976"></path><path d="M797.4912 183.0912a30.72 30.72 0 0 1 43.4688 43.4176l-614.4 614.4a30.72 30.72 0 0 1-43.4688-43.4176l614.4-614.4z" fill="#222222" p-id="7977"></path><path d="M183.0912 183.0912a30.72 30.72 0 0 1 43.4688 0l614.4 614.4a30.72 30.72 0 0 1-43.4688 43.4176l-614.4-614.4a30.72 30.72 0 0 1 0-43.4176z" fill="#222222" p-id="7978"></path></svg>
        </div>
        <div class="title">
            <h3>${langText}</h3>
        </div>
        <div class="select">
            <div class="list"></div>
        </div>
    </div>
</div>`

if ($('*[onclick*="getLang(this)"]').length > 0) {
    $('body').append(lang_html)
}

function getLang(ele) {
    if (!isMobile()) {
        lenis.stop()
    }else {
        $('body,html').css('overflow','hidden')
    }
    $('.lang_mask').addClass('active')
    var lang = $(ele).find('template').html()
    $('.lang_mask .box .select .list').html(lang)
}

$(document).on('click', '.lang_mask .color,.lang_mask .box .close', function () {
    if (!isMobile()) {
        lenis.start()
    }else {
        $('body,html').css('overflow','unset')
    }
    $('.lang_mask').removeClass('active')
})

function createMultipleScrollImageAnimations(configs) {
    const controllers = [];

    configs.forEach(config => {
        const containers = document.querySelectorAll(config.containerSelector);

        containers.forEach(container => {
            const canvas = container.querySelector('canvas');

            if (!canvas) {
                console.warn('Canvas not found in container:', container);
                return;
            }

            const context = canvas.getContext("2d");
            const images = [];
            const frameState = { frame: 0 };

            const getImagePath = i =>
                config.imagePath.replace('{index}', (i + 1).toString());

            function setCanvasSize() {
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
                render();
            }

            function render() {
                context.clearRect(0, 0, canvas.width, canvas.height);

                const img = images[frameState.frame];

                if (img && img.complete) {

                    const canvasRatio = canvas.width / canvas.height;
                    const imgRatio = img.width / img.height;

                    let drawWidth, drawHeight, offsetX, offsetY;

                    if (imgRatio > canvasRatio) {
                        drawHeight = canvas.height;
                        drawWidth = img.width * (canvas.height / img.height);
                        offsetX = (canvas.width - drawWidth) / 2;
                        offsetY = 0;
                    } else {
                        drawWidth = canvas.width;
                        drawHeight = img.height * (canvas.width / img.width);
                        offsetX = 0;
                        offsetY = (canvas.height - drawHeight) / 2;
                    }

                    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                }
            }

            setCanvasSize();
            window.addEventListener('resize', setCanvasSize);

            for (let i = 0; i < config.frameCount; i++) {
                const img = new Image();
                img.src = getImagePath(i);
                images.push(img);
            }

            images[0].onload = render;

            // ==========================
            // 支持 selector 和 数字两种 triggerSelector
            // ==========================

            let scrollTriggerConfig;

            if (typeof config.triggerSelector === "number") {

                const start = config.triggerSelector;

                scrollTriggerConfig = {
                    trigger: document.body,
                    start: start,
                    end: start + config.scrollDistance,
                    scrub: 0.5
                };

            } else {

                scrollTriggerConfig = {
                    trigger: config.triggerSelector,
                    start: "top top",
                    end: `+=${config.scrollDistance}`,
                    scrub: 0.5
                };

            }

            const scrollTween = gsap.to(frameState, {
                frame: config.frameCount - 1,
                snap: "frame",
                ease: "none",
                paused: false,
                scrollTrigger: scrollTriggerConfig,
                onUpdate: render
            });

            function playAllFrames(duration = 2) {
                scrollTween.pause();

                gsap.to(frameState, {
                    frame: config.frameCount - 1,
                    snap: "frame",
                    ease: "power1.inOut",
                    duration,
                    onUpdate: render
                });
            }

            controllers.push({
                container,
                playAllFrames
            });

        });

    });

    return controllers;
}
// const animations = createMultipleScrollImageAnimations([
//     {
//         containerSelector: '.images-canvas',
//         imagePath: 'static/all/{index}.png',
//         frameCount: 360,
//         scrollDistance: 500,
//         triggerSelector: '.box'
//     },
//     {
//         containerSelector: '.images-canvas2',
//         imagePath: 'static/all2/{index}.png',
//         frameCount: 360,
//         scrollDistance: 1000,
//         triggerSelector: '.box2'
//     }
// ]);

// animations[0].playAllFrames(1);



(function () {
    let timer = null;
    // 成功
    const successSvg = `
        <svg viewBox="0 0 1025 1024">
            <path d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"/>
        </svg>
    `;
    // 失败
    const errorSvg = `
        <svg viewBox="0 0 1024 1024">
            <path d="M511.8 63.3c-246.7 0-448.5 201.8-448.5 448.5s201.8 448.5 448.5 448.5 448.5-201.8 448.5-448.5S758.5 63.3 511.8 63.3z m214.3 603c15 15 15 42.4 0 57.3-7.5 7.5-17.4 12.5-29.9 12.5-10 0-22.4-5-29.9-12.5L521.8 579.1 377.3 723.6c-15 15-42.4 15-57.3 0s-15-42.4 0-57.3l144.5-144.5L320 377.3c-7.5-7.5-12.5-17.4-12.5-29.9 0-10 5-22.4 12.5-29.9 15-15 42.4-15 57.3 0L521.8 462l144.5-144.5c7.5-7.5 17.4-12.5 29.9-12.5 10 0 22.4 5 29.9 12.5s12.5 17.4 12.5 29.9c0 10-5 22.4-12.5 29.9L581.6 521.8l144.5 144.5z"/>
        </svg>
    `;
    function show(type, text, duration = 2000) {
        clearTimeout(timer);
        const old = document.querySelector('.fixed_prompt');
        if (old) old.remove();
        const el = document.createElement('div');
        el.className = `fixed_prompt ${type}`;
        el.innerHTML = `
            <div class="joke">
                ${type === 'success' ? successSvg : errorSvg}
                <p>${text}</p>
            </div>
        `;
        document.body.appendChild(el);
        requestAnimationFrame(() => {
            el.classList.add('show');
        });
        timer = setTimeout(() => {
            el.classList.remove('show');
            el.classList.add('hide');
            setTimeout(() => el.remove(), 350);
        }, duration);
    }
    window.toast = {
        success(text, time) {
            show('success', text, time);
        },
        error(text, time) {
            show('error', text, time);
        }
    };
})();


/**
 * 表单验证封装（支持中英文）
 * @param {string} formSelector  表单容器选择器
 * @param {string} btnSelector   提交按钮选择器
 * @param {function} callback    验证通过回调，参数为表单数据对象
 * @param {string} lang          语言 'cn' | 'en'，默认 'cn'
 */
function initFormValidate(formSelector, btnSelector, callback, lang) {

    var $form = $(formSelector);
    var $btn = $(btnSelector);
    lang = lang || 'cn';

    var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phoneReg = /^1[3-9]\d{9}$/;

    var i18n = {
        cn: {
            required: '请输入',
            email: '请输入正确的邮箱地址',
            phone: '请输入正确的手机号',
            required_fields: '必填项',
            success: '提交成功'
        },
        en: {
            required: 'Please enter ',
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number',
            required_fields: 'required fields',
            success: 'Submitted successfully'
        }
    };

    var creditCodeReg = /^[0-9A-Z]{18}$/

    var msg = i18n[lang] || i18n['cn'];

    $btn.click(function () {

        var $fields = $form.find('[required][name]');
        var passed = true;

        $fields.each(function () {
            var el = $(this);
            var val = $.trim(el.val());
            var ph = el.attr('placeholder')
            var ph2 = el.attr('data-prompt')

            var hasMsg = el.attr('data-msg') !== undefined;

            if (!val) {
                if (ph2) {
                    toast.error(ph2);
                } else {
                    ph === undefined ? ph = i18n[lang].required_fields : ph
                    toast.error(hasMsg ? ph : msg.required + ph);
                }
                el.focus();
                passed = false;
                return false;
            }


            if (el.hasClass('credit_code_validate') && !creditCodeReg.test(val)) {
                toast.error('请输入正确的统一社会信用代码')
                el.focus()
                passed = false
                return false
            }


            if (el.hasClass('phone_validate') && !phoneReg.test(val)) {
                toast.error(msg.phone);
                el.focus();
                passed = false;
                return false;
            }

            if (el.hasClass('email_validate') && !emailReg.test(val)) {
                toast.error(msg.email);
                el.focus();
                passed = false;
                return false;
            }
        });

        if (!passed) return;

        var data = {};
        $form.find('[name]').each(function () {
            var el = $(this);
            var key = el.attr('name');
            if (!key) return;
            data[key] = $.trim(el.val());
        });

        // toast.success(msg.success);
        callback && callback(data);
    });
}




