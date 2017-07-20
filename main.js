"use strict"

function video3() {
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


function video4() {
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


function video5() {
   let name = 'jon';

   function makeUpperCase(word) {
      return word.toUpperCase();
   }

   let template = `<h1>${makeUpperCase('Hello')}, ${name}</h1><p>This is a simple templat
   e in Javascript</p>`;
   document.getElementById('template5').innerHTML = template;
}


function video6() {
   let theString = "Hello my name is David and I love Javascript";

   console.log(theString.startsWith('Hello'));
   console.log(theString.endsWith('Javascript'));
   console.log(theString.includes('love'));


   // hex
   console.log(0xFF);
   // binary
   console.log(0b1010101);
   // octal
   console.log(0o543);
   console.log(Number.isFinite(3));
   console.log(Number.isFinite(Infinity));
   console.log(Number.isFinite(NaN));
   console.log(Number.isNaN('asdf'));
   console.log(Number.isInteger(-25));
}


function video7() {
   function greet($greeting = 'Hello World') {
      console.log($greeting);
   }

   greet();

   // spread operator !!!!!!!!

   let args = [1,2,3];

   function test() {
      console.log(args);
   }

   test(...args);
}


function video8() {
   let myArray = [11,22,34,65,34];
   let mySet = new Set(myArray);
   mySet.add('100');
   mySet.add({a: 1, b: 2});
   mySet.delete(22);
   mySet.add('100');
   mySet.add('200');
   console.log(mySet);
   mySet.forEach(function(val) {
      console.log(val);
   });

   let myMap = new Map([['a1','Hello'],['b2','goodbye']]);
   myMap.set('cs','foo');
   myMap.delete('a1');
   console.log(myMap);
   console.log(myMap.size);

   let carWeakSet = new WeakSet();

   let car1 = {
      make:'Honda',
      model:'Civic'
   }

   carWeakSet.add(car1);

   let car2 = {
      make:'Toyota',
      model:'Camry'
   }

   carWeakSet.add(car2);
   console.log(carWeakSet);

   carWeakSet.delete(car1);
   console.log(carWeakSet);

   let carWeakMap = new WeakMap();

   let key1 = {
      id: 1
   }

   let car1m = {
      make: 'Honda',
      model: 'Civic'
   }

   let key2 = {
      id: 2
   }

   let car2m = {
      make: 'Toyota',
      model: 'Camry'
   }

   carWeakMap.set(key1, car1m);
   carWeakMap.set(key2, car2m);

   carWeakMap.delete(key1);
   console.log(carWeakMap);
}


function video9() {
   function Prefixer(prefix) {
      this.prefix = prefix;
   }

   Prefixer.prototype.prefixArray = function(arr) {
      // let that = this;
      return arr.map((x) => {
         console.log(this.prefix + x);
      });
   }
   let pre = new Prefixer('Hello ');
   pre.prefixArray(['Brad','David']);
   /*
   // OLD WAY
   let add = function(a,b) {
      let sum = a + b;
      console.log(sum);
      return false;
   }
   */

   // NEW (arrow function) WAY
   let add = (a,b) => {
      let sum = a+b;
      console.log(sum);
      return false;
   }

   add(10,2);
}


function video10() {
   /* PROMISES */
   // represents an operation that hasn't completed yet but is expected in the future

   // An immediately resolved promise:
   /*
   var myPromise = Promise.resolve('foo');

   myPromise.then((res) => console.log(res));
   */

   var myPromise = new Promise(function(resolve, reject) {
      setTimeout(() => resolve(4), 2000);
   });

   myPromise.then((res) => {
      res +=3;
      console.log(res);
   });

   function getData(method, url) {
      return new Promise(function(resolve, reject){
         var xhr = new XMLHttpRequest();
         xhr.open(method, url);
         xhr.onload = function() {
            if(this.status >= 200 && this.status < 300) {
               resolve(xhr.response);
            } else {
               reject({
                  status: this.status,
                  statusText: xhr.statusText
               });
            }
         };
         xhr.onerror = function() {
            reject({
               status: this.status,
               statusText: xhr.statusText
            });
         };
         xhr.send();
      });
   }
   getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data) {
      let todos = JSON.parse(data);
      let output = '';
      for(let todo of todos) {
         output += `
            <li>
               <h4>${todo.title}</h4>
               <p class="lead">Completed: ${todo.completed}</p>
            </li>
         `;
      }

      document.getElementById('template10').innerHTML = output;
   }).catch(function(err) {
      console.log(error);
   });


}


function video11() {
   // GENERATORS

   // functions that can be paused and resumed

   function *g1() {
      console.log('Hello');
      yield "Yield 1 ran..";
      console.log('World');
      yield "Yield 2 ran..";
   }

   // g1(); does not work, have to set to a variable

   var g = g1();
   /*
   console.log(g.next().value);
   console.log(g.next().value);
   console.log(g.next().value);
   */

   for(let val of g){
      console.log(val);
   }


}


/*























*/
