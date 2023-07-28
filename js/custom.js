$(function () {

    const txt = document.querySelectorAll('.text p');
    //360/배열.length 7.4

    txt.forEach(it => {
        it.innerHTML = it.innerText.split('').map(
            (char, i) =>
                `<span style="transform:rotate(${7.4 * i}deg)">${char}</span>`
        ).join('');
    })

    // txt.innerHTML = txt.innerText.split('').map(
    //     (char, i) =>
    //         `<span style="transform:rotate(${i * 7.4}deg)">${char}</span>`
    // ).join('');

    // const C_TXT = document.querySelector('.case');
    // const I_TXT = document.querySelector('.text');
    // const TXT = 'Lorem^^*ipsumdolorsitamet';


    // const TC = t => {
    //     const n = t.length;
    //     const r = [...t].map(it => `<span>${it}</span>`).join('');

    //     I_TXT.innerHTML = r;
    //     const SPAN = document.querySelectorAll('.text span');
    //     //console.log(t, n, r, SPAN);
    //     SPAN.forEach((it, idx) => {
    //         it.style.cssText = `
    //         position: absolute;
    //         top:0;
    //         left: 50%;
    //         transform: translate(-50%,0) rotate(${360 / n * idx}deg);
    //         transform-origin: center bottom;
    //         height: 50%;
    //         width: 20px;
    //         font-size: 40px;
    //         font-weight: bolder;
    //         text-transform: uppercase;
    //         color : #ddd;
    //         `
    //     });
    // }

    // TC(TXT);

    // const RT = e => {
    //     let SCT = window.scrollY;
    //     //console.log(e, SCT);
    //     C_TXT.style.cssText = `
    //     transform: translate(-50%, -50%) rotate(${SCT / 5}deg);
    //     `
    // }
    // window.addEventListener('scroll', RT);

    
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
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        $('.main_vi .slide_num span').text("0" + (c ? (c + 1) : 1));
        $('.main_vi .slide_num strong').text("0" + (s.slideCount));
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.con_list').slick({
        arrows: false,
        dots: true,
        fade: true,
    });


    $('.con_list').on('init afterChange', function (e, s, c) {
        $('.tap_list li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_coll .arrows .left').on('click', function () {
        $('.con_list').slick('slickPrev');
    });

    $('.main_coll .arrows .right').on('click', function () {
        $('.con_list').slick('slickNext');
    });


    $('.main_coll .tap_list>li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');

        $('.con_list').slick('slickGoTo', idx);
    });

    $('.main_view .view_wrap>*').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    })
});