// The changingGreeting function will start
// working before the page is completely loaded,
// toggling the greeting message in 4 different languages,
// depending the time that the user visits the website.

const changingGreeting = () => {

   // I added the letters 'í', 'é', 'ý' and 'ň' with
   // the HTML entities 'i&#769', 'e&#769', 'y&#769' and
   // '&#328' respectively

   const greetings = {
      english: ['Good morning', 'Good afternoon', 'Good evening'],
      spanish: ['Buenos di&#769as', 'Buenas tardes', 'Buenas tardes'],
      french: ['Bonjour', 'Bonjour', 'Bonsoir'],
      slovak: ['Dobre&#769 ra&#769no', 'Dobry&#769 de&#328', 'Dobry&#769 de&#328']
   };

   // This section will define the time when the user visits the website
   // and then will set up the message correctly (morning, afternoon or evening)

   let actualDate = new Date();
   let actualHour = actualDate.getHours();

   if (actualHour >= 18) {
      actualHour = 2;
   } else if (actualHour >= 12) {
      actualHour = 1;
   } else {
      actualHour = 0;
   }

   // This section will change the languages every 2.5 seconds

   const allLanguages = ['english', 'spanish', 'french', 'slovak'];
   let language = 0;

   let interval = setInterval(() => {
      if (language <= 3) {
         $('#greeting').html(`${greetings[allLanguages[language]][actualHour]},`);
         language++;
      }
      else {
         language = 0;
      }
   }, 2500);

};

changingGreeting();

// This sections is the JavaScript which will be working
// after the website is completely loaded.

$(document).ready(() => {

console.log('The page is ready to load the rest of javascript');

});
