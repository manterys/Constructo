(function (html) {
  // Preloader
  function dkPreloader() {

    html.classList.add('preload');

    const preloader = document.querySelector('.preloader');

    window.addEventListener("load", function () {
      html.classList.remove('preload');
      html.classList.add('loaded');

      preloader.addEventListener("transitionend", function () {
        preloader.style.display = "none";

        // AOS
        // https://github.com/michalsnik/aos
        AOS.init({
          duration: 700,
          offset: 150,
          once: true,
        });
      });
    });
  }

  // Navigation
  function dkNavigation() {
    
    const navLink = document.querySelectorAll(".offcanvas-body a");
    navLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const offcanvas = document.getElementById('offcanvasNavbar');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);

        bsOffcanvas.hide();
      });
    });


    const pxShowScrolled = 100;
    body = document.body;

    if (window.scrollY >= pxShowScrolled) body.classList.add('scrolled');

    window.onscroll = function () {

        if (window.scrollY >= pxShowScrolled) {
            body.classList.add('scrolled');
        }
        else {
            body.classList.remove('scrolled');
        }
    };
  }

  // MoveTo
  // https://github.com/hsnaydd/moveTo
  function dkMoveTo() {
    const easeFunctions = {
      easeInOutCubic: function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      },
    };

    const triggers = document.querySelectorAll(".smoothscroll");

    const moveTo = new MoveTo(
      {
        tolerance: 40,
        duration: 1000,
        easing: "easeInOutCubic",
        container: window,
      },
      easeFunctions
    );

    triggers.forEach(function (trigger) {
      moveTo.registerTrigger(trigger);
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkHeroSwiper() {
    const heroSwiper = new Swiper('.hero .swiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkPortfolioSwiper() {
    const portfolioSwiper = new Swiper('.portfolio .swiper', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 1,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
              slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          }
        }
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkLogosSwiper() {
    const logosSwiper = new Swiper('.logos .swiper', {
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 20,
        breakpoints: {
          992: {
            slidesPerView: 5,
            spaceBetween: 30,
          }
        }
    });
  }

  // GLightbox
  function dkGlightbox() {
    // https://github.com/biati-digital/glightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        zoomable: false,
        touchNavigation: true,
        loop: false,
        autoplayVideos: true,
    });
  }

  // Form
  function dkForm() {
    const formElem = document.getElementById('form');
    const alertSuccess = document.querySelector('.alert-success');
    const alertDanger = document.querySelector('.alert-danger');

    formElem.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('mail.php', {
            method: 'POST',
            body: formData,
        }).then(function() {
            alertSuccess.style.display = 'block';
            setTimeout(() => (alertSuccess.style.display = 'none'), 4000);
            formElem.reset();
        }).catch(function() {
            alertDanger.style.display = 'block';
            setTimeout(() => (alertDanger.style.display = 'none'), 4000);
        });
    });
  }

  // ProgressBar
  function dkProgressBar() {
    const progressBar = document.querySelectorAll('.progress-bar')
    
    window.addEventListener('scroll', checkProgressBar)

    checkProgressBar()

    function checkProgressBar() {
      const triggerBottom = window.innerHeight / 5 * 4
      
      progressBar.forEach(el => {

        if(el.getBoundingClientRect().top < triggerBottom) {
          el.classList.add('show')
        } else {
          el.classList.remove('show')
        }
      })
    }
  }

  // Video
  function dkVideo() {
    const videoPlayerOverlay = document.querySelectorAll('.video-player-overlay');
    const videoPlay = document.querySelectorAll('.video-icon');
    const iframe = document.querySelector('iframe');

    videoPlay.forEach(link => {
        link.addEventListener('click', () => {
            videoPlayerOverlay.forEach(overlayEl => {
                overlayEl.classList.add('video-visible');
            });
        });
    });

    videoPlayerOverlay.forEach(overlayEl => {
        overlayEl.addEventListener('click', () => {
            overlayEl.classList.remove('video-visible');
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        });
    });
  }

  dkPreloader();
  dkNavigation();
  dkMoveTo();
  dkHeroSwiper();
  dkPortfolioSwiper();
  dkLogosSwiper();
  dkGlightbox();
  dkForm();
  dkProgressBar();
  dkVideo();
})(document.documentElement);
