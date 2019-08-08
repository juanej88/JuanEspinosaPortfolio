// The changingGreeting function will start
// working before the page is completely loaded,
// toggling the greeting message in 4 different languages,
// depending the time that the user visits the website.

const changingGreeting = () => {

   const greetings = {
      english: ['Good morning', 'Good afternoon', 'Good evening'],
      spanish: ['Buenos días', 'Buenas tardes', 'Buenas tardes'],
      french: ['Bonjour', 'Bonjour', 'Bonsoir'],
      slovak: ['Dobré ráno', 'Dobrý deň', 'Dobrý večer'],
      italian: ['Buongiorno', 'Buongiorno', 'Buonasera'],
      russian: ['Доброе утро', 'Добрый день', 'Добрый вечер'],
      german: ['Guten Morgen', 'Guten Tag', 'Guten Abend']
   };

   // This section will define the time when the user visits the website
   // and then will set up the message correctly (morning, afternoon or evening)

   let actualDate = new Date();
   let actualHour = actualDate.getHours();

   if (actualHour >= 17) {
      actualHour = 2;
   } else if (actualHour >= 12) {
      actualHour = 1;
   } else {
      actualHour = 0;
   }

   // This section will change the languages every 2.25 seconds

   const allLanguages = ['english', 'spanish', 'french', 'slovak', 'italian', 'russian', 'german'];
   let language = 1;

   $('#greeting').html(`${greetings[allLanguages[0]][actualHour]},`).css({opacity: '0'}).animate({opacity: '1'}, 250);

   let interval = setInterval(() => {
      if (language >= 1 && language <= 6) {
         $('#greeting').html(`${greetings[allLanguages[language]][actualHour]},`).css({opacity: '0'}).animate({opacity: '1'}, 250);
         language++;
      }
      else {
         $('#greeting').html(`${greetings[allLanguages[0]][actualHour]},`).css({opacity: '0'}).animate({opacity: '1'}, 250);
         language = 1;
      }
   }, 2250);

};

changingGreeting();

// This sections is the JavaScript which will be working
// after the website is completely loaded.

$(document).ready(() => {

   // This function makes a smooth transition when clicking
   // a link a getting to the new section

   $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 333, 'linear');
   });

   // This function will add the class '.addColor' to any anchor,
   // depending of the section where the user is interacting with,
   // leaving a gap of 15% before getting to the new section

   const addColor = () => {

      $(window).scroll(() => {

         const windowPosition = $(window).scrollTop();

         let $homeHeight = $('#homeSection').height() - ($('#aboutSection').height() * 0.15);
         let $aboutHeight = $('#aboutSection').height() + $homeHeight;
         let $skillsHeight = $('#skillsSection').height() + $aboutHeight;
         let $projectsLink = $('#projectsSection').height() + $skillsHeight;
         let $contactHeight = $('#contactSection').height() + $projectsLink;

         if (windowPosition < $homeHeight) {
            $('.navigationLinks').removeClass('addColor');
            $('.homeLink').addClass('addColor');
         } else if (windowPosition >= $homeHeight && windowPosition < $aboutHeight) {
            $('.navigationLinks').removeClass('addColor');
            $('.aboutLink').addClass('addColor');
         } else if (windowPosition >= $aboutHeight && windowPosition < $skillsHeight) {
            $('.navigationLinks').removeClass('addColor');
            $('.skillsLink').addClass('addColor');
         } else if (windowPosition >= $skillsHeight && windowPosition < $projectsLink) {
            $('.navigationLinks').removeClass('addColor');
            $('.projectsLink').addClass('addColor');
         } else if (windowPosition >= $projectsLink && windowPosition < $contactHeight) {
            $('.navigationLinks').removeClass('addColor');
            $('.contactLink').addClass('addColor');
         }
      });
   };

   addColor();

   // This function toggles the classes of the menu bars to
   // animate the opening and closing navigation menu

   $('.menuBars').on('click', () => {
      if ($('.menuBars').hasClass('close')) {
         $('.menuBars').removeClass('close');
         $('.firstLine').addClass('firstLineOpen');
         $('.secondLine').addClass('secondLineOpen');
         $('.thirdLine').addClass('thirdLineOpen');
         $('.firstLine').removeClass('firstLineClose');
         $('.secondLine').removeClass('secondLineClose');
         $('.thirdLine').removeClass('thirdLineClose');
      } else {
         $('.menuBars').addClass('close');
         $('.firstLine').removeClass('firstLineOpen');
         $('.secondLine').removeClass('secondLineOpen');
         $('.thirdLine').removeClass('thirdLineOpen');
         $('.firstLine').addClass('firstLineClose');
         $('.secondLine').addClass('secondLineClose');
         $('.thirdLine').addClass('thirdLineClose');
      }
   });

   // This function does the animation to slideUp and
   // slideDown the navigation menu when clicking the
   // menu icon

   $('.menuBars').on('click', () => {
      $('#webMenu').addClass('allScreenMenu');
      $('.navMenu').addClass('navVisible');

      $('#webMenu').toggleClass('slideDown');
      $('#webMenu').toggleClass('slideUp');
      $('.solidBar').toggleClass('bottomLine');

      if ($('#webMenu').hasClass('slideUp')) {
         setTimeout(() => {
            $('#webMenu').removeClass('allScreenMenu');
            $('.navMenu').removeClass('navVisible');
         }, 350);
      }
   });

   // This function does the animation to slideUp the
   // navigation menu when clicking any section link

   $('.navigationLinks').on('click', () => {
      $('.menuBars').addClass('close');

      $('.firstLine').removeClass('firstLineOpen');
      $('.secondLine').removeClass('secondLineOpen');
      $('.thirdLine').removeClass('thirdLineOpen');
      $('.firstLine').addClass('firstLineClose');
      $('.secondLine').addClass('secondLineClose');
      $('.thirdLine').addClass('thirdLineClose');

      $('#webMenu').addClass('slideUp');
      $('#webMenu').removeClass('slideDown');
      $('.solidBar').removeClass('bottomLine');

      if ($('#webMenu').hasClass('slideUp')) {
         setTimeout(() => {
            $('#webMenu').removeClass('allScreenMenu');
            $('.navMenu').removeClass('navVisible');
         }, 350);
      }
   });

   // This function will add the classes to the arrow
   // in order to animate it when scrolling down from the
   // homeSection

   $(window).scroll(() => {

      const windowPosition = $(window).scrollTop();

      if (windowPosition < 125) {
         $('.leftSide').removeClass('flatArrow');
         $('.leftSide').removeClass('hiddenArrow');
         $('.rightSide').removeClass('flatArrow');
         $('.rightSide').removeClass('hiddenArrow');
      } else if (windowPosition >=125 && windowPosition <= 425) {
         $('.leftSide').addClass('flatArrow');
         $('.leftSide').removeClass('hiddenArrow');
         $('.rightSide').addClass('flatArrow');
         $('.rightSide').removeClass('hiddenArrow');
      } else if (windowPosition > 425) {
         $('.leftSide').addClass('hiddenArrow');
         $('.rightSide').addClass('hiddenArrow');
      }
   });



});
