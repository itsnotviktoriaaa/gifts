$(document).ready(function () {

    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: `<span class="prev-arrow">
<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7916 13H5.20829" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 5.70825L5.20833 12.9999L12.5 20.2916" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>`,
        nextArrow: `<span class="next-arrow">
<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20837 13H19.7917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 5.70825L19.7917 12.9999L12.5 20.2916" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>`,
        dotsClass: "my-dots",
        responsive: [
            {
                breakpoint: 1197,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
        // autoplay: true
    });

    $('.multiple-items-middle').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<span class="prev-arrow">
<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7916 13H5.20829" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 5.70825L5.20833 12.9999L12.5 20.2916" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>`,
        nextArrow: `<span class="next-arrow">
<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20837 13H19.7917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 5.70825L19.7917 12.9999L12.5 20.2916" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>`,
        dotsClass: "my-dots",
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        // autoplay: true
    });

});