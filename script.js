$(':checkbox').on('click', function() {
    noscroll();
});

function noscroll() {
    $('body').toggleClass('no-scroll', $(':checkbox').prop('checked'));
}
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#spinner").style.visibility = "visible";
    } else {
    document.querySelector(
        ".inline").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
    }
  };

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
const duration = 2000; // Animasyon süresi (ms)

if (numberElements) {
    let startTime;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        numberElements.forEach(function (numberElement) {
            const targetNumber = parseInt(numberElement.dataset.number);
            const currentValue = Math.round(targetNumber * progress);
            numberElement.innerHTML = currentValue;
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}




// const elements = document.querySelectorAll('.clickable');
// const titles = document.querySelectorAll('.bottom p');

// const savedColor = localStorage.getItem('selectedColor');
// if (savedColor) {
//   elements.forEach(element => {
//     element.classList.remove('selected');
//   });
//   const selectedElement = Array.from(elements).find(element => element.innerText === savedColor);
//   if (selectedElement) {
//     selectedElement.classList.add('selected');
//     titles.forEach(title => title.classList.add('d-none'));
//     titles[Array.from(elements).indexOf(selectedElement)].classList.remove('d-none');
//   }
// } else {
//   elements[0].classList.add('selected');
//   localStorage.setItem('selectedColor', elements[0].innerText);
//   titles[0].classList.remove('d-none');
// }

// elements.forEach((element, index) => {
//   element.addEventListener('click', () => {
//     elements.forEach(el => el.classList.remove('selected'));
//     titles.forEach(title => title.classList.add('d-none'));
    
//     element.classList.add('selected');
//     titles[index].classList.remove('d-none');
//     localStorage.setItem('selectedColor', element.innerText);
//   });
// });

