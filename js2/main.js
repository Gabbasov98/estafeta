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
