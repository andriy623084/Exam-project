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

var car = {};
var allCars = [];
var cName = document.getElementById('fName');
var model = document.getElementById('mName');
var engine = document.getElementById('engine');

function submitResults() {
     car.name = cName.value;
     car.model = model.value;
     car.engine = engine.value;
     console.log(car);
     allCars.push(car);
     console.log(allCars);
     if(allCars.length ===5){
         alert("stop!");
     }
}

