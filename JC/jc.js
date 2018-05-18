// var car = {};
// var allCars = [];
// var cName = document.getElementById('fName');
// var model = document.getElementById('mName');
// var engine = document.getElementById('engine');
//
// function submitResults(){
//     car.name = cName.value;
//     car.model = model.value;
//     car.engine = engine.value;
//     console.log(car);
//     allCars.push(car);
//     console.log(allCars);
//    cName.value = "";
//    model.value ="";
//    engine.value = "";
// }


// Pizza function
// let orderCount = 0;
// const takeOrder = (topping, crustType) => {
//     orderCount++;
//     console.log('Order: ' + crustType + ' pizza topped with ' + topping);
// };
//
// takeOrder('mushroom', 'thin crust');
// takeOrder('spinach', 'whole wheat');
// takeOrder('pepperoni', 'brooklyn style');
//
// const getSubTotal = (itemCount) => {
//     return itemCount * 7.5;
// };
// console.log(getSubTotal(orderCount));
//
// function getTax() {
//     return getSubTotal(orderCount) * 0.06;
// }
// function getTotal(itemCount){
//     return getSubTotal(orderCount) + getTax();
// }
// console.log(getTotal());

// function isGreaterThan(numberOne,numberTwo){
//     if (numberOne > numberTwo){
//         return true;
//     }else {
//         return false;
//     }
// }


// let myPlaces = ['Los Angeles','San-Francisko','Chicago'];
// let friendPlaces = ['Bolivia','San-Francisko','Afganistan'];
//
// for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++ ){
//     for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
//         if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
//             console.log(friendPlacesIndex);
//         }
//     }
// }


//need explanation!!!!!
// let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
// var currentCard = 'Heart';
// while(currentCard != 'Spade'){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random() * 4)];
// }
// console.log("found a spade")


//tasks from java script Kiev .ua  - IF else  - find the block
// document.getElementById('findBlock').onclick = function getBlockResult (event) {
//     let field = document.getElementById('field').value;
//     field = parseInt(field);
//     if (field <= 20 ){
//         alert('first block');
//     }else if (field <= 48){alert('second block')}
//     else if (field <= 99){alert('third block')}
// };

// function allProperties() {
//     var allProp = window;
//    var pam = Object.keys(allProp);
//     for (var i in pam){
//         document.write(all[i] + '<br>');
//         console.log(pam);
//     }
// }
// function openWindow() {
//     var openWindowhere = window.open('https://www.codewars.com');
//     openWindowhere.resizeTo(200,200)
// }
// function sameWindow() {
//     window.open("https://www.w3schools.com", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
// }
// function openWin() {
//     myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
// }
// function w3schoolW() {
//     var myWindow = window.open("", "myWindow", "width=200,height=100");
//     myWindow.document.write("<p>This is 'myWindow'</p>");
//     myWindow.opener.document.write("<p>This is the source window!</p>");

//javascriptkiev.com - function - task 1
// function colorA() {
//     var ICatchIt = document.getElementsByTagName("p");
//     var emotyvariable;
//     for(emotyvariable = 0; emotyvariable < ICatchIt.length; emotyvariable++){
//         ICatchIt[emotyvariable].style.backgroundColor = 'red';
//     }
// }


//javascriptkiev.com - function - task 2
// function getShadowImg() {
//     var catchImage = document.getElementsByTagName('img');
//     var emptyAeay;
//     for(emptyAeay = 0; emptyAeay < catchImage.length; emptyAeay++){
//         catchImage[emptyAeay].style.boxShadow = "10px 20px 30px blue";
//     // var catchImage = document.getElementById('firstImage').style.boxShadow = "10px 20px 30px blue";
//     }
// }
// getShadowImg();


//javascriptkiev.com - function - task 3 - can`t write in HTML
// var pElements2 = document.getElementsByTagName('p').length;
// var index = 1;
//
// for(var p = 0;p<pElements2;p++){
//     console.log(index);
//     console.log(document.getElementsByTagName('p').item(p));
//     index++;
// }


//first variant of //javascriptkiev.com - function - task 4
//     var firstButton = document.getElementById('firstButton');
//     var result = document.getElementById('result');
//     var nCount = 0;
//    firstButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     nCount += 1;
//     switch(nCount) {
//         case 1:
//             result.innerHTML = 'One';
//             break;
//         case 2:
//             result.innerHTML = 'Two';
//             break;
//         default:
//             result.innerHTML = 'More than 2';
//     }
// }, false);


//second variant of //javascriptkiev.com - function - task 4
// var firstButton = document.getElementById('clickMe');
// var catchP = document.getElementById("result");
// var count = 0;
// function clickMe() {
//     count+=1;
//     firstButton.innerHTML = 'you clicked:' + count;
// }


//javascriptkiev.com - function - task 5
// function getTimesOfNumber(a,b) {
//    var result =  Math.pow(a,b);
//     alert(result);
// }
// getTimesOfNumber(6,3);


// javascriptkiev.com - function - task 6
// function getSomeTag(a) {
//     var ICatchIt = document.getElementsByTagName("p");
//     if (a === 'p'){
//         for(emotyvariable = 0; emotyvariable < ICatchIt.length; emotyvariable++){
//             ICatchIt[emotyvariable].style.textDecoration = "underline overline";
//         }
//     }
// }
// getSomeTag('p');
//

// javascriptkiev.com - function - task 7
// function ageOfUser(a) {
//     if(a>=16){
//      document.getElementById('result').innerHTML = 'добро пожаловать'
//     }else if(a<16){
//         document.getElementById('result').innerHTML = 'вы еще молоды'
//     }
// }
// ageOfUser(15);


// javascriptkiev.com - function - task 8
// function ageOfUser(a) {
//     if(a>=16){
//         document.getElementById('result').innerHTML = 'добро пожаловать'
//     }else if(a<16){
//         document.getElementById('result').innerHTML = 'вы еще молоды'
//     }else if(a===undefined){
//         document.getElementById('result').innerHTML = '“Введите возраст”.'
//     }
// }
// ageOfUser(1);


// javascriptkiev.com - function - task 9
// var startArray = ['my first point', 'my second point', 'my third point', 'my forth point'];
// function countAnArrray(a){
//     if(a === undefined){
//         document.getElementById('result').innerHTML = 'you`ve got an error man';
//     }
//     var lengthOfStartArray = a.length;
//         document.getElementById('result').innerHTML = lengthOfStartArray;
//
// }
// var someRandomArray = ['pa','ram','pam','hihi','hihi', 'huhu'];
// countAnArrray(startArray);


// javascriptkiev.com - function - task 10
// function countAndTimesThem() {
//     var catchNumberInField = document.getElementById('input-field').value;
//     if(catchNumberInField > 10){
//         document.getElementById('result').innerHTML = Math.pow(catchNumberInField,2)
//     }else if(catchNumberInField < 7){
//         document.getElementById('result').innerHTML = 'Your number is lower than 7';
//     }else if(catchNumberInField === 8 || catchNumberInField === 9){ //I don`t understand this part
//         return 6;
//     }
//     console.log(catchNumberInField)
// }


// javascriptkiev.com - function - task 11 - not done
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function onLoad1(a,b){
//     var randomNumber = document.getElementById('result');
//     randomNumber.innerHTML = getRandomInt(a,b);
// }
// function getNumbersFromInputToConsole() {
//     var field2 = document.getElementById('input-field').value;
//     if(field2 !== onLoad1(1,2)){
//         alert('numbers didn`t met');
//     }else if (field2 === onLoad1(1,2)){
//         alert('you catch it')
//     }
// }

// javascriptkiev.com - function - task 11 - variant 2 - not done

// var randomizaor = function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
//
// function result(b) {
//     var fistInput = document.getElementById("first").value;
//     if(fistInput === b)
//     {
//         alert('equell')
//     }
//     else if(fistInput > b)
//     {
//         alert("a is bigger");
//     }
//     else
//     {
//         alert('what?')
//     }
// }



// Events!!!
// javascriptkiev.com - events - task 1 - done
// function showCoordinates(MouseEvent)
// {
//     var horizontal = MouseEvent.screenX;
//     var vertical = MouseEvent.screenY;
//     document.getElementById('additional-p').innerHTML = horizontal + ',' + vertical;
// }
// document.getElementById('DivBlock').onmousemove = showCoordinates;


// javascriptkiev.com - events - task 2 - done
// document.getElementById('DivBlock').ondblclick = changePic;
// function changePic() {
//         document.getElementById('DivBlock').src="images/block4Photo3.jpg"
// }


// javascriptkiev.com - events - task 3 - need assitance
// var BlockRed = document.getElementById('blockRed');
// function addBlocks(a) {
//     var ArrayM = [];
//     for(var plural = 0;plural<300;plural++){
//         ArrayM[plural] = a;
//
//     }
//     return ArrayM;
// }
// document.getElementById('additional-p').innerHTML = addBlocks(BlockRed);
//
// function radius() {
//     BlockRed.style.borderRadius = '1em';
// }
// BlockRed.ondblclick = radius;


// javascriptkiev.com - events - task 4 - have no idea how to make it



// javascriptkiev.com - events - task 5 - done
// var redBlock = document.getElementById('blockRed');
// function moveBlock() {
//     redBlock.style.marginTop = "100px";
// }
// redBlock.ondblclick = moveBlock;

// javascriptkiev.com - events - task 5


// javascriptkiev.com - events - task 6 - my wrong variant
// var redBlock = document.getElementById('small-div');
// function addMarginLeft() {
//     redBlock.style.marginLeft = '50px';
// }
// function addMarginLeft2() {
//     redBlock.style.right = '100px';
// }
// var count = 0;
// redBlock.onclick = function countAClicks() {
//     count +=1;
//     if(count === 1){
//         redBlock = addMarginLeft();
//         console.log(1);
//     }else if (count === 2){
//         console.log(2);
//         redBlock = addMarginLeft2();
//     }
// };


// javascriptkiev.com - events - task 6 - done
// var redBlock = document.getElementById('small-div');
//
// var count = 0;
// redBlock.onclick = function countAClicks() {
//     count +=1;
//     redBlock.style.marginLeft = '50px';
//     console.log(count);
//     if (count === 2){
//         console.log(count);
//         redBlock.style.marginLeft = '100px';
//     }else if (count === 3){
//         redBlock.style.marginLeft = '0px';
//     }
// };


// Task on school 1
// var a = [17,5,14,8,3];
// for(var i in a){
//     var third = a[2];
//     var sum = a[0]+a[4];
// }
// console.log(third*2);
// console.log(sum);
// var second = a.map(function (t) { return t*2 });
// console.log(second);


// Task on school 2
// var newField = [];
// var mylist = ['English','Ukrainian','Russion'];
// mylist.push(newField);
// for(var j=0 in mylist){
//         newField[j] = mylist[j]
//     }
//
// console.log(newField);

// Task on school 2 - bullshit
// var a,b,c;
// var halofperimeter = a+b+c/2;
// var sin;
// var h ;
// var s = (sin*b)/2;
// if (a===b|| b===2 || a===c){
//     if (a===b){
//         var num halofperimeter*(halofperimeter*b)*halofperimeter
//         h = (2/c)*Math.sqrt()
//     }
// }