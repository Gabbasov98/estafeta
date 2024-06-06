$('.certificate-info__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.certificate-help__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.reports-events__slider-wrap').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.reports-events__prev'),
    nextArrow: $('.reports-events__next'),
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.reports-help__cards').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

 let nav = document.querySelector('.tabs')

        window.onresize = function(event) {
            setActiveTabVisible()
        };

        window.addEventListener('DOMContentLoaded', () => {
            setActiveTabVisible()
        })

        function setActiveTabVisible() {
            if (window.innerWidth > 992) {
                return
            }
            if (nav) {
                let navLinks = document.querySelectorAll('.tabs .tab')
                let activeLink = document.querySelector('.tabs .is-active')
                activeLink.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: 'nearest',
                })
            }
        }

// Tabs
$(".reports-main__tab").click(function () {
    let path = $(this).attr("data-tab-path")
    $(this).siblings(".reports-main__tab").removeClass("reports-main__tab--active")
    $(this).addClass("reports-main__tab--active")

    $(this).parents(".reports-main__tabs").find(".reports-main__content").removeClass("reports-main__content--active")
    $(this).parents(".reports-main__tabs").find(`.reports-main__content[data-content-path="${path}"]`).addClass("reports-main__content--active")
})
