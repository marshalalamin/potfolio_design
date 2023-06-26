
    $(document).ready(function () {
      $(".bannar_carousel").owlCarousel({

        items: 1,
        loop: true,
        autoplay: false,

        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']



      }
      );
    });

    


    $(document).ready(function () {
      $(".recent_carousel").owlCarousel({

        items: 2,
        loop: true,
        autoplay: true,

        autoplayTimeout: 3000,
        smartSpeed: 1500,
        nav: false,
        dots: true,

        responsive: {
          0: {
            items :1,
          },
          992: {
            items: 2,
          }
        }

      }
      );
    });


    $(document).ready(function () {
      $(".clint_carousel").owlCarousel({

        items: 2,
        loop: true,
        autoplay: true,

        autoplayTimeout: 3000,
        smartSpeed: 1500,
        nav: false,
          dots: true,
          responsive: {
          0: {
            items :1,
          },
          992: {
            items: 2,
          }
        }



      }
      );
    });





    // =========wow
    new WOW().init();






    // STICKY HEADER

 

  // STICKY HEADER END
    var lastScroll = 0;
    var isScrolled = false;
    window.addEventListener("scroll", function () {
      var topHeader = document.querySelector(".sticky");
      var currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      var scrollDirection = currentScroll < lastScroll;
      var shouldToggle = isScrolled && scrollDirection;
      isScrolled = currentScroll > 100;
      topHeader.classList.toggle("navactive", shouldToggle);
      lastScroll = currentScroll;
    });




    // TOOGLE 
'use strict';

document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
});
// =========END

// COUNTER UP 
jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 7000
            });
        });
//  END










// PRE LOADER 
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    main.style.transition = "1s ease-in";
        loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}

init();
// pre loader end

