//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
  var me = {
    name: "Hermione Granger",
    age: 23
  }

  alert(me.name);

//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
    band: "The Weird Sisters",
    food: "Molly Weasley's lamb chops and goat-cheese risotto",
    person: "Ron Weasley...or sometimes my sister-in-law Ginny if he's driving me nuts",
    book: "I CAN'T PICK JUST ONE! Hogwarts, A History, or perhaps Pride & Prejudice, a wonderful Muggle novel",
    movie: "Wonder Woman",
    holiday: "Christmas"
  };


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = "Flying Ford Anglia";
  favoriteThings.brand = "They'll never let me live it down but honestly, Weasly's Wizard Wheezes";


//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  favoriteThings.food = "Chicken Nuggets";
  favoriteThings.book = "Harry Potter";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {};
  var item = 'firstPocket';
  backPack[item] = 'chapstick';
  backPack.color = 'deep sapphire blue';

//After you do the above, alert your entire backPack object.

  alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var alsoMe = {
    name: 'Hermione Granger',
    age: 23,
    height: '5\'3',
    gender: 'Female',
    married: 'married',
    eyeColor: 'hazel-green',
    hairColor: 'brunette'
  }

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  for (let prop in alsoMe) {
    alert(alsoMe[prop]);
  }




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    "You Belong With Me": "3:45",
    "Love Story": "3:45",
    "Only the Good Die Young": "3:45",
    "Sweet Dreams": "3:45",
    "Shut Up and Dance": "3:45"
  }

//Now, loop through your album object alerting every song title individually.

  for (let prop in album) {
    alert(prop);
  }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  var states = {
    Utah: 10000,
    Colorado: 100000,
    Washington: 83974,
    California: 92364787123,
    Oregon: 23847612
  }

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  for (let state in states) {
    states[state] > 30000 ? alert(state) : 0;
  }




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  for (let prop in user1) {
    (!user1[prop]) ? delete user1[prop] : 0;
  }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user1.name = "Jysn Erso";
  user1.username = "Stardust";




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user2.name = 'Tyler S. McGinnis';
  user2.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayEmail method that's on the user object which will alert the users email

  user2.sayEmail();




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection.alertHello = () => alert('hello');
  methodCollection.logHello = () => console.log('hello');

//Now call your alertHello and logHello methods.

  methodCollection.alertHello();
  methodCollection.logHello();



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  var makePerson = (name, birthday, ssn) => {
    return {"name": name, 
            "birthday": birthday, 
            "ssn": ssn
          };
  };



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  var makeCard = (cardNumber, expirationDate, securityCode) => {
    return {"cardNumber": cardNumber, 
            "expirationDate": expirationDate, 
            "securityCode": securityCode
          };
  };



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  var bindCard = (person, creditcard) => {
    var newObj = {};
    for (let prop in person) {
      newObj[prop] = person[prop];
    }
    for (let prop in creditcard) {
      newObj[prop] = creditcard[prop];
    }
    return newObj;
  }
