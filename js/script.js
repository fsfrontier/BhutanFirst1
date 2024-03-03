
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector('.prev-slide').addEventListener('click', prevSlide);
    document.querySelector('.next-slide').addEventListener('click', nextSlide);

    // Show the initial slide
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling; // Get the next element (answer)
            answer.classList.toggle('show'); // Toggle the 'show' class
            this.classList.toggle('show'); // Toggle the 'show' class on the question
        });
    });
});


var splide = new Splide( '.splide', {
    autoplay:true,
    autoScroll: {
      speed: 2000,
    },
    perPage: 3,
    focus: 'center',
    gap: '2rem',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        height : '6rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        height : '6rem',
      },
    },
  } );
  
  splide.mount();