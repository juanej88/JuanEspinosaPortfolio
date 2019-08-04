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

   // This section will change the languages every 2.5 seconds

   const allLanguages = ['english', 'spanish', 'french', 'slovak', 'italian', 'russian', 'german'];
   let language = 0;

   let interval = setInterval(() => {
      if (language <= 6) {
         $('#greeting').html(`${greetings[allLanguages[language]][actualHour]},`).css({opacity: "0.0"}).animate({opacity: "1"}, 250);
         language++;
      }
      else {
         language = 0;
      }
   }, 2250);

};

changingGreeting();

// This sections is the JavaScript which will be working
// after the website is completely loaded.

$(document).ready(() => {

console.log('The page is ready to load the rest of javascript');

});
