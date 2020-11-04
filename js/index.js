//Анимация инпута/Animation input

const inputSearch = document.querySelector('.input');
const btnSearch = document.querySelector('.search-btn');


btnSearch.addEventListener('click', btnClick)


function btnClick() {
        inputSearch.classList.toggle('active-input');
        inputSearch.classList.toggle('input');
}
// Кнопка скрола верх/Button GoBtn;

function scrollTo(to, duration = 700) {
  const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
          const currentDate = +new Date();
          const currentTime = currentDate - startDate;
          element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
          if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
          }
          else {
              element.scrollTop = to;
          }
      };
  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#toTop');
  window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
          btn.classList.add('show');
          // Иначе прячем
      } else {
          btn.classList.remove('show');
      }
  });

  // При клике прокручиываем на самый верх
  btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 10);
  }
});

// Второй слайдер.Second Slider

$('.one-time').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow:'<button type="button" class="prev-two" style="width: 25px;"><img src="img/arrow.png" ></button>',
  nextArrow:'<button type="button" class="next-two"><img src="img/slick.png" ></button>',
  adaptiveHeight: true
});

// Первый слайдер/First Slider
$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:'<button type="button" class="prev" style="width: 25px;"><img src="img/arrow.png" ></button>',
  nextArrow:'<button type="button" class="next"><img src="img/slick.png" ></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Реализация клавиш слайдера 

$('#container').on( "click", '#button-2', function(e){
  $('#button-1').trigger(e.type);
  alert('CLICKED 2');
});