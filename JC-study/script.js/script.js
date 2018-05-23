// // prompt("vovk");
// // document.write("5"+1);
// if(10 =="10"){
//     document.write(5 );
// }
// var date = new Date();
// document.write(date);

// function rundommer(min, max) {
//     var random = Math.random(min, max);
//     document.write(random);
//
// }

// console.log(4/9)
// var y=90
// var x= 6-y;
// console.log(x);

// let vovk = 'Best of the best';
// console.log(typeof vovk);

// let m;
// m = false;
// console.log(typeof m);
//

// var g=[4,6,8];
// console.log(typeof g);

// let a=9;
// let b=4;
// let c=5;
// let d=6;
// let e=7;
// var i= 'Hello vovk';
// console.log(c-b);
// console.log(a+b);
// console.log(d*b);
// console.log(a+i);
// console.log(b!=a);

// let p=prompt('Enter a number','');
// console.log(parseFloat(p)+20.4);
// console.log(isNaN('99'));

// let a=8;
// let b=8;
// if (a<b)alert('Why you did it bitch,a=9?');
//     else if (a>b) alert('a>b');
// else {
//     alert('a!=9');
// }

//ternarniy operator
// let infoBig=[44,22,89,86];
// console.log(infoBig .length);
// var infoWays=[55,'my health',false];
// console.log(infoWays[1]);
// infoWays[1]='health changed';
// infoWays[5]='my 5th massive';
// console.log(infoWays);
// delete infoWays[5];
// console.log(infoWays);

// let infoTable = document.getElementById('just');
// let str = '';
// for (let i=0; i<infoWays.length; i++){
//     if (infoWays[i]!==undefined) str += infoWays[i];
// }
// infoTable.innerHTML=str;

// var p = document.getElementsByTagName('p');
// for(i=0;i<=p.length;i++){
//     p[i].style.color = 'red';
// }

//Appartment task - not working
// document.getElementById('calc').onclick = function () {
//     let flat = document.getElementById('flat').value;
//     flat = parseInt(flat);
//     if (flat >=1 && flat <=20) alert('First Enter in the building');
//     else if (flat>=21 && flat <=30) alert('Second Enter into building');
//     else alert('Mistake');
// }

// //Debuger
// let a = 8;
// let b = 9;
// let c;
// c = a+b;
// alert(c);

//Circle
// let out = document.getElementById('out');
// for (let i =0; i<20; i=i+1){
//     if (i==5)break;
//     console.log(i);
// }
//

// let i = 3
// while (i<8){
//     i=i+1;
//     console.log(i);
// }

// var Math = document.getElementById('Math');
// var History = document.getElementById('History');
// var Chemistry = document.getElementById('Chemistry');
// var Science = document.getElementById('Science');
// var Biology = document.getElementById('Biology');
// function submitResults () {
//     var allSubj = document.getElementsByTagName('input');
//     for (var i = 0; i< allSubj.length; i++){
//         if(allSubj[i].value < 60){
//             allSubj[i].innerHTML = 'You loose';
//         }
//     }
// }

// var out = document.querySelector('#out');
// console.log(out);

// var car = {};
// var allCars = [];
// var cName = document.getElementById('fName');
// var model = document.getElementById('mName');
// var engine = document.getElementById('engine');
//
// function submitResults() {
//      car.name = cName.value;
//      car.model = model.value;
//      car.engine = engine.value;
//      console.log(car);
//      allCars.push(car);
//      console.log(allCars);
//      if(allCars.length ===5){
//          alert("stop!");
//      }
// }
//

//
// var mainWrapper = document.getElementById("main-wrapper");
// var mapWrapper =  document.getElementById("map-wrapper");
// var mainPage = document.getElementById('Home');
// var mainVideo = document.getElementById('video');
//
// mainPage.classList.add('active');
//
// function showMap(){
//         if (mainWrapper.style.display === "none") {
//             mainWrapper.style.display = "block";
//             mapWrapper.style.display = "none";
//         } else {
//             mainWrapper.style.display = "none";
//             mainPage.classList.remove('active');
//             mainVideo.classList.add('active');
//         }
// }

// let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
//
// let shortWords = words.filter(function(word) {
//     return word.length < 9;
// });
// console.log(shortWords);

// let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
//
// let longFavoriteWords = favoriteWords.filter(favoriteWords => favoriteWords.length > 7);
// console.log(longFavoriteWords);
//
// let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
//
// // Something is missing in the method call below
//
// console.log(words.filter(function (vovk) {
//     return word.length < 9;
// }));

// let day = "Tuesday";
// let alarm = '';
// let person = {
//     name: 'Andriy',
//     age: 23,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM'
// };
// console.log(person['name']);
// console.log(person['age']);
// if(day === "Saturday" || day === "Sunday"){
//     alert(person['weekendAlarm'])
// }else{
//     alert(person['weekAlarm']);
// }

// let person = {
//     name: 'Tyron',
//     age: 40,
//     weekendAlarm: 'No alarms needed',
//     weekAlarm: 'Alarm set to 7AM',
//
//     sayHello: function() {
//         return `Hello, my name is ${this.name}`;
//     },
//
//     sayGoodbye() {
//         return 'Goodbye!';
//     }
//
// };
//
// let friend = {name: 'Bohdan'}
// friend.sayHello = person.sayHello;
// console.log(person.sayHello());
//
// person.hobbies = ['Basketball', 'Coaching'];
// person.hobbies = ['Basketball'];
// console.log(person.hobbies);
//
//
// console.log(person['name']);
// console.log(person['age']);
//
// let day = 'Tuesday';
// let alarm;
//
// if (day === 'Saturday' || day === 'Sunday' ) {
//     alarm = 'weekendAlarm';
// } else {
//     alarm = 'weekAlarm';
// }
//
// console.log(person[alarm]);
// console.log(friend.sayHello())
// console.log(typeof friend['sayHello']);


// let person = {
//     _name: 'Lu Xun',
//     _age: 137,
//     set age(newAge){
//         if(typeof age === number){
//             console.log('yes, correct')
//         }else {
//             console.log('Invalid input');
//         }
//     }
// };

// let person = {
//     _name: 'Lu Xun',
//     _age: 137,
//
//     set age(ageIn) {
//         if (typeof ageIn === 'number') {
//             this._age = ageIn;
//         }
//         else {
//             console.log('Invalid input');
//             return 'Invalid input';
//         }
//     },
// get age() {return '${this.name} is ${this.age} years old.'}
// };


//
// // person.age = 'Thirty-nine';
// person.age = 39;
// console.log(person.age);

// class Dog {
//     constructor(name) {
//         this.name = name;
//         this.behavior = 0;
//     }
// }
//
// const halley = new Dog('Halley'); // Create new Dog instance
// console.log(halley.name); // Log the name value saved to halle
// console.log(Dog.name);

// class Surgeon {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//     }
// }
//
// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// class Surgeon {
//     constructor(name, department) {
//         this._name = name;
//         this._department = department;
//         this._remainingVacationDays = 20;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     get department() {
//         return this._department;
//     }
//
//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }
//
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }
//
// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular', 'hom');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
// console.log(surgeonCurry.name)

// class HospitalEmployee{
//     constructor (name){
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }
//     get name(){
//         return this._name;
//     }
//     get remainingVacationDays(){return this._remainingVacationDays;
//     }
//     takeVacationDays(daysOff){
//         return this._remainingVacationDays -= daysOff;
//     }
// }
// const vacation = new HospitalEmployee('Andriy', 24);
// console.log(vacation.remainingVacationDays);

// class HospitalEmployee {
//     constructor(name ) {
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }
//
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }
// class Nurse extends HospitalEmployee{
//     constructor(name , certifications){
//         super(name);
//         this._certifications = certifications;
//     }
//     get certifications(){
//         return this._certifications;
//     }
//     addCertification(add){
//         this._certifications += add;
//     }
// }
// const nurseOlynyk = new Nurse('Olynyk' , ['Trauma', 'Pediatrics']);
// console.log(nurseOlynyk.certifications)

//javascript kiev task 7
// for(let b = 7; b<63;b+=7){
//     console.log(b);
// }
//

// function one(a){
//     console.log(a)
// }
// one(2,3,4);
// function makeColor() {
//     var colorB = document.getElementsByTagName('p');
// }
// makeColor();

