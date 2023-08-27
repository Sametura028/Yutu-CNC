$(':checkbox').change(noscroll);
function noscroll() {
    $('body').toggleClass('no-scroll', !$(':checkbox').prop('checked'));


}



var body = document.getElementsByTagName("body")[0]

function showSearch() {
    var searchBox = document.getElementById("search-box");

    searchBox.style.transform = "translate(0)";
    body.style.overflow = "hidden"
}

function hideSearch() {
    var searchBox = document.getElementById("search-box");
    searchBox.style.transform = "translate(150%)";
    body.style.overflowY = "scroll"
}

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    customPaging: function (slider, i) {

        return "<div class='rectangle'></div>";

    },
    arrows: false,
});
$('.autoplay').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 5000,
    loop: true,
    infinite: true,
    autoplay: true,
    swipe: false,
    cssEase: 'linear',
    pauseOnHover: false,
    dots: false,
    arrows: false,
    responsive: [{}, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1

        }
    },
  
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1

            }
        }
    ]
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 0,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
          

const numberElements = document.querySelectorAll('.counter');

if (numberElements) {
    numberElements.forEach(function (numberElement) {
        const targetNumber = parseInt(numberElement.dataset.number);
        let startNumber = 0;

        function counterUp() {
            startNumber++;
            numberElement.innerHTML = startNumber;

            if (startNumber >= targetNumber) {
                clearInterval(stop);
            }
        }
        let stop = setInterval(function () {
            counterUp();
        }, 50);
    });
}