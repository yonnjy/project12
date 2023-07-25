$(function () {
    $('.main_content').fullpage({

        anchors: ['main_vi', 'main_coll', 'main_view'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        //아랜 속도 부분... https://jqueryui.com/easing/ 참고.
        // easing: 'easeOutBounce',
        //easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        afterRender: function () {
            $('.main_content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            // $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            // console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }

        }
    });

    $('.main_slide').slick({
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
        $('.main_vi .slide_num span').text("0" + (c ? (c + 1) : 1));
        $('.main_vi .slide_num strong').text("0" + (s.slideCount));
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});