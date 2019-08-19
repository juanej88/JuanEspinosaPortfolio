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

   // This function animates the function light/dark mode

   $('.lightAndDarkMode').on('click', () => {
      $('.sun').toggleClass('moon');
      $('.sunBeams').toggleClass('transparentSunBeams');
   });

   // This function will switch all the properties needed between light
   // and dark mode

   $('.lightAndDarkMode').on('click', () => {
      $('#webMenu').toggleClass('headerDarkMode');
      $('.horizontalLine').toggleClass('horizontalLineDarkMode');
      $('.barLines').toggleClass('barLinesDarkMode');

      $('.about').toggleClass('sectionDarkMode');
      $('.skills').toggleClass('sectionDarkMode');
      $('.projects').toggleClass('sectionDarkMode');
      $('.contact').toggleClass('sectionDarkMode');

      $('footer').toggleClass('footerDarkMode');
   });

   // This function makes a smooth transition when clicking
   // a link a getting to the new section

   $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 350, 'linear');
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
            $('.navigationLinks').addClass('removeColor');
            $('.homeLink').removeClass('removeColor');
            $('.homeLink').addClass('barColor1');
         } else if (windowPosition >= $homeHeight && windowPosition < $aboutHeight) {
            $('.navigationLinks').addClass('removeColor');
            $('.aboutLink').removeClass('removeColor');
            $('.aboutLink').addClass('barColor2');
         } else if (windowPosition >= $aboutHeight && windowPosition < $skillsHeight) {
            $('.navigationLinks').addClass('removeColor');
            $('.skillsLink').removeClass('removeColor');
            $('.skillsLink').addClass('barColor3');
         } else if (windowPosition >= $skillsHeight && windowPosition < $projectsLink) {
            $('.navigationLinks').addClass('removeColor');
            $('.projectsLink').removeClass('removeColor');
            $('.projectsLink').addClass('barColor4');
         } else if (windowPosition >= $projectsLink && windowPosition < $contactHeight) {
            $('.navigationLinks').addClass('removeColor');
            $('.contactLink').removeClass('removeColor');
            $('.contactLink').addClass('barColor5');
         }
      });
   };

   addColor();

   // This function will add the classes to the arrow
   // in order to animate it when scrolling down from the
   // homeSection

   const arrowMovement = () => {

      $(window).scroll(() => {

         const windowPosition = $(window).scrollTop();

         let $section1Height = $('#homeSection').height();
         let normalArrow1 = $section1Height * 0.15;
         let flatArrow1 = $section1Height * 0.45;
         let $section2Height = $('#aboutSection').height() * 0.95;
         let normalArrow2 = ($('#aboutSection').height() * 0.15) + $('#homeSection').height();
         let flatArrow2 = ($('#aboutSection').height() * 0.45) + $('#homeSection').height();
         let $section3Height = $('#skillsSection').height() * 0.95 + $('#homeSection').height();
         let normalArrow3 = ($('#skillsSection').height() * 0.15) + $('#homeSection').height() + $('#aboutSection').height();
         let flatArrow3 = ($('#skillsSection').height() * 0.45) + $('#homeSection').height() + $('#aboutSection').height();
         let $section4Height = $('#projectsSection').height() * 0.95 + $('#homeSection').height() + $('#aboutSection').height();
         let normalArrow4 = ($('#projectsSection').height() * 0.15) + $('#homeSection').height() + $('#aboutSection').height() + $('#skillsSection').height();
         let flatArrow4 = ($('#projectsSection').height() * 0.45) + $('#homeSection').height() + $('#aboutSection').height() + $('#skillsSection').height();

         if (windowPosition < normalArrow1) {
            $('.leftSide').removeClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').removeClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition >= normalArrow1 && windowPosition <= flatArrow1) {
            $('.leftSide').addClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').addClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition > flatArrow1 && windowPosition <= $section2Height) {
            $('.leftSide').addClass('hiddenArrow');
            $('.rightSide').addClass('hiddenArrow');
         } else if (windowPosition < normalArrow2) {
            $('.leftSide').removeClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').removeClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition >= normalArrow2 && windowPosition <= flatArrow2) {
            $('.leftSide').addClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').addClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition > flatArrow2 && windowPosition <= $section3Height) {
            $('.leftSide').addClass('hiddenArrow');
            $('.rightSide').addClass('hiddenArrow');
         } else if (windowPosition < normalArrow3) {
            $('.leftSide').removeClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').removeClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition >= normalArrow3 && windowPosition <= flatArrow3) {
            $('.leftSide').addClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').addClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition > flatArrow3 && windowPosition <= $section4Height) {
            $('.leftSide').addClass('hiddenArrow');
            $('.rightSide').addClass('hiddenArrow');
         } else if (windowPosition < normalArrow4) {
            $('.leftSide').removeClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').removeClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition >= normalArrow4 && windowPosition <= flatArrow4) {
            $('.leftSide').addClass('flatArrow');
            $('.leftSide').removeClass('hiddenArrow');
            $('.rightSide').addClass('flatArrow');
            $('.rightSide').removeClass('hiddenArrow');
         } else if (windowPosition > flatArrow4) {
            $('.leftSide').addClass('hiddenArrow');
            $('.rightSide').addClass('hiddenArrow');
         }
      });
   };

   arrowMovement();

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

      $('.navMenu').toggleClass('slideDown');
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
      $('.navMenu').removeClass('slideDown');
      $('.solidBar').removeClass('bottomLine');

      if ($('#webMenu').hasClass('slideUp')) {
         setTimeout(() => {
            $('#webMenu').removeClass('allScreenMenu');
            $('.navMenu').removeClass('navVisible');
         }, 350);
      }
   });

   // This function will give a fixed position to the footer
   // and add an animation to the arrowUp in section 5

   const fixedFooter = () => {

      $(window).scroll(() => {

         const windowPosition = $(window).scrollTop();

         let $totalHeight = $('#homeSection').height() + $('#aboutSection').height() + $('#skillsSection').height() + ($('#projectsSection').height() * 0.98);
         let $ArrowUp = $totalHeight - ($('#contactSection').height() * 0.05);

         if (windowPosition < $ArrowUp) {
            $('footer').removeClass('fixedFooter');
            $('.leftSideTop').addClass('hiddenArrow');
            $('.rightSideTop').addClass('hiddenArrow');
         } else if (windowPosition >= $ArrowUp && windowPosition < $totalHeight) {
            $('footer').removeClass('fixedFooter');
            $('footer').addClass('popOutFooter');
            $('.leftSideTop').addClass('flatArrow');
            $('.rightSideTop').addClass('flatArrow');
            $('.leftSideTop').removeClass('hiddenArrow');
            $('.rightSideTop').removeClass('hiddenArrow');
            $('.leftSideTop').removeClass('leftSideTopAnimation');
            $('.rightSideTop').removeClass('rightSideTopAnimation');
         } else if (windowPosition >= $totalHeight) {
            $('footer').removeClass('popOutFooter');
            $('footer').addClass('fixedFooter');
            $('.leftSideTop').removeClass('hiddenArrow');
            $('.rightSideTop').removeClass('hiddenArrow');
            $('.leftSideTop').addClass('leftSideTopAnimation');
            $('.rightSideTop').addClass('rightSideTopAnimation');
         }
      });
   };

   fixedFooter();

});
