"use strict"

function video1() {
   /*
   var a = 'Test1';
   let b = 'Test2';

   console.log(a);
   console.log(b);
   */
   function testVar() {
      var a = 30;
      if (true) {
         a = 50;
         console.log(a);
      }
      console.log(a);
   }

   function testLet() {
      let a = 30;
      if (true) {
         let a =50;
         console.log(a);
      }
      console.log(a);
   }

   for (let i = 0; i < 10; i++) {
      console.log(i);
   }
   try {
      console.log(i);
   } catch (e) {
      console.log(e);
   }
   testVar();
   testLet();


   const colors = [];

   colors.push('red');
   colors.push('blue');
   try {
      colors = '';
   } catch (e) {
      console.log(e);
   }

   console.log(colors);
}


function video2() {
   class User {
      constructor(username, email, password) {
         this.username = username;
         this.email = email;
         this.password = password;
      }

      static countUsers() {
         console.log('There are 50 users');
      }

      register() {
         console.log(this.username + ' is now registered');
      }
   }

   class Member extends User {
      constructor(username, email, password, memberPackage) {
         super(username, email, password);
         this.package = memberPackage;
      }

      getPackage() {
         console.log(this.username + ' is subscribed to the ' + this.package + ' package.');
      }
   }

   let bob = new User('bob', 'bob@gmail.com', '1234');
   console.log(bob.username);

   bob.register();

   let mike = new Member('mike', 'mike@gmail.com', '1234', 'standard');
   mike.getPackage();
   mike.register();
}


function video3() {
   let name = 'jon';

   function makeUpperCase(word) {
      return word.toUpperCase();
   }

   let template = `<h1>${makeUpperCase('Hello')}, ${name}</h1><p>This is a simple templat
   e in Javascript</p>`;
   document.getElementById('template').innerHTML = template;
}


function video4() {
   
}


function video5() {

}


function video6() {

}


function video7() {

}


function video8() {

}


video4();


/*























*/
