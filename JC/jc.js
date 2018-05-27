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


// javascriptkiev.com - events - task 7-8-9 - done, 1 question below
// var myTable = document.getElementById('my-table');
// var count = 0;
// myTable.onclick = function addBorder() {
//     count +=1;
//     myTable.style.border = "thick solid #0000FF";
//     if (count === 2){
//         myTable.style.border = "0px";
//         myTable.classList.add('stripes');
//     }else if(count ===3){
//         myTable.classList.remove('stripes');
//         myTable.style.border = "10px solid red";
//     }
// };
// function addBorderByCheckbox(){
//     myTable.style.border = "thick solid #0000FF";
// }
// function removeBorderAddStriped(){
//     myTable.style.border = "0px";
//     myTable.classList.add('stripes');
// }
// // document.getElementById('stripped-of-highlight-on').onclick = 'if(this.checked){removeBorderAddStriped()}'; - why I can`t to hang a function from js?
// function removeStripedAddHighlight(){
//     myTable.classList.remove('stripes');
//     myTable.style.border = "10px solid red";
// }

// javascriptkiev.com - events - task 10 - done
// var buttonWithTextIner = document.getElementById('button-with-text');
// function getTextFromButton () {
//     alert(buttonWithTextIner.innerText)
// }
// function closeThePopUp (){
//     buttonWithTextIner.setAttribute("disabled", "disabled");
// }


// javascriptkiev.com - events - task 11 - done
//to make it work add: onclick="getTypeOfDoc(event)" to body tag
// function getTypeOfDoc(event) {
//     alert(event.target.nodeName);
// }


// javascriptkiev.com - events - task 12 - need to ask teacher !!!
// var firstDiv = document.getElementById('first');
// var secondDiv = document.getElementById('second')
// function outListener(event) {
//     console.log("exited " + event.target.first + " for " + event.relatedTarget.second);
// }


// javascriptkiev.com - events - task 13 - done
// var getButton = document.getElementById('only-one button');
// getButton.addEventListener('mousedown', function(){
//     alert("you pressed the button:" + event.which);
// });


// javascriptkiev.com - events - task 13 - done by html.events
// var getButton = document.getElementById('only-one button');
// function getResultFromClick(event){
//     alert("you pressed the button:" + event.which)
// }


// javascriptkiev.com - events - task 14 - done  - how to make code shorter?
// var Myimage = document.getElementById('one-image');
// var count = 0;
// Myimage.onclick = function ChangeSize () {
//     count++;
//     Myimage.style.height = '300px';
//     Myimage.style.width = '350px';
//     if(count === 2){
//         Myimage.style.opacity = '0.9'
//     }else if(count===3){
//         Myimage.style.opacity = '0.8'
//     }else if(count===4){
//         Myimage.style.opacity = '0.7'
//     }else if(count===5){
//         Myimage.style.opacity = '0.6'
//     }
// };


// javascriptkiev.com - events - task 15 - done
// var Myimage = document.getElementById('one-image');
// var count = 0;
// Myimage.onmouseover = function ChangeSize () {
//     count++;
//     Myimage.style.height = '300px';
//     Myimage.style.width = '350px';
//     if(count === 2){
//         Myimage.style.opacity = '0.9'
//     }else if(count===3){
//         Myimage.style.opacity = '0.8'
//     }else if(count===4){
//         Myimage.style.opacity = '0.7'
//     }else if(count===5){
//         Myimage.style.opacity = '0.6'
//     }
// };


// avascriptkiev.com - events - task 16 - need to ask the teacher !
// var Myimage = document.getElementById('one-image');
//
// Myimage.onmouseover = function ChangePic(){
//      Myimage.src="images/block4Photo2.jpg";
// };
//
// Myimage.onmouseout = function getBackFirstPic() {
//     Myimage.src='images/block6-shoes.jpg'
// };


// avascriptkiev.com - events - task 17 - need to ask teacher , as problem the same as in task 16
// var Myimage = document.getElementById('one-image');
//
// Myimage.onmouseover = function changeSize(){
//      Myimage.style.height = '400px';
//      Myimage.style.width = '700px'
// };
// Myimage.onmouseout = function getSizeBack() {
//     Myimage.style.height = '600px';
//     Myimage.style.width = '1000px';
// };


// avascriptkiev.com - events - task 17 - done not in nice way
// var Myimage = document.getElementById('one-image');
// var myDiv = document.getElementById('back-div');
// Myimage.onclick = function () {
//     Myimage.style.width = '70%';
//     Myimage.style.height = '400px';
//     Myimage.style.position = 'absolute';
//     Myimage.style.paddingLeft = '17%';
//     myDiv.style.backgroundColor = 'black';
//     Myimage.style.display = "block";
//     myDiv.style.position = 'relative';
// };



// school 21.05.2018
// getMinFromNumbers(4,3,12,8);
//
// function getMinFromNumbers(a,b,c,d) {
//     var arr1 = [a,b];
//     var arr2 = [c,d];
//     var min1 = min(arr1);
//     var min2 = min(arr2);
//     var max1min = max(min1,min2);
//     console.log(max1min)
// }
// function max(arr) {
//     for(var i=0,i<a){
//         if(arr[i]>arr[i+1])
//             return arr[i]
//     }
// }
// function min(arr) {
//     for(var i in arr){
//         if(arr[i]<arr[i+1])
//             return arr[i]
//     }
// }

// school 21.05.2018 - done
// class CountSQ{
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     getArea(){
//         alert(this.a*this.b)
//     }
// }
// var react = new CountSQ(4,6);
// react.getArea();


//STRING
// avascriptkiev.com - string - task 1 - done
// function countLteral() {
//     var myInput = document.getElementById('field').value;
//     alert(myInput.length)
// }
// document.getElementById('my-p').onclick = countLteral;


// avascriptkiev.com - string - task 2 - done
// var arrayofPics = [
//     {name:'firstimage', image: 'images/block7-forest.jpeg'},
//     {name:'secondimage', image: 'images/block4Photo3.jpg'}
// ];
// for(var i = 0; i < arrayofPics.length; i++){
//     var displayImage = arrayofPics[1];
//     document.getElementById('my-p').innerHTML = displayImage.name + '<img src="'+displayImage.image+'">';
//     var displayImage2 = arrayofPics[0];
//     document.getElementById('my-div').innerHTML = displayImage2.name + '<img src="'+displayImage2.image+'">'
// }


// avascriptkiev.com - string - task 3 - DONE!! best progran ever =)
// function countLteral() {
//     var myInput = document.getElementById('field').value;
//     var checkHttp = myInput.startsWith('http://');
//     var checkHttps = myInput.startsWith('https://');
//     // alert("http:"+ checkHttp);
//     // alert("https:"+ checkHttps);
//     var divClass = document.getElementById('my-div');
//     var resultHttp;
//     if(checkHttp === true){
//         resultHttp = myInput.slice(7,myInput.length);
//         divClass.innerHTML = resultHttp;
//     }else if(checkHttps === true){
//         resultHttp = myInput.slice(8,myInput.length);
//         divClass.innerHTML = resultHttp;
//     }
// }
// document.getElementById('my-p').onclick = countLteral;


// avascriptkiev.com - string - task 4 - done
// function searchSite() {
//     var myInput = document.getElementById('field').value;
//     var checkHttp = myInput.match(/site.ua/);
//     var divClass = document.getElementById('my-div');
//     divClass.innerHTML = checkHttp;
// }
// document.getElementById('my-p').onclick = searchSite;


// avascriptkiev.com - string - task 5
// var Arrayuser = [];
// function submitForm() {
//     var firstName = document.getElementById("first-name").value;
//     var lastName = document.getElementById("last-name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if (firstName === '' || email === '' || lastName === '') {
//         alert("Please fill all fields...!!!!!!");
//     }else if (password.length < 5){
//         alert('Password has to be with minimum 5 characters')
//     }else {
//         // Arrayuser.push(firstName,lastName,email,password);
//         // console.log(Arrayuser);
//         var objectOfUser = {firstname1: firstName,lastname1: lastName,email1: email,password1: password};
//         Arrayuser.push(objectOfUser);
//         alert(objectOfUser.lastname1);
//         alert(Arrayuser);
//         console.log(objectOfUser);
//         console.log(Arrayuser);
//        alert('user first name is:'+ objectOfUser.firstname1 +' '+ 'user last name:' + objectOfUser.lastname1 +" "+'user email:' + objectOfUser.email1 +" "+ 'user password:' + objectOfUser.password1);
//         // document.getElementById('my-p').innerHTML = Arrayuser;
//     }
// }


// AJAX REQUEST !!! - school
// $(document).ready(function(){
//     $("button").click(function(){
//         $.ajax({
//             url: 'https://api.openaq.org/v1/countries',
//             success: function(result){
//                 var countries = result.results;
//                 viewData(countries);
//             }
//         });
//     });
//     function  viewData(countries) {
//         for(var i = 0; i<countries.length; i++){
//             $("#div1").append('<div class="parent"><div class="container">'+countries[i].name+"</div>"+
//                 " <div>"+countries[i].code+"</div>"+
//                 " <div>"+countries[i].count+"</div>"+
//                 " <div>"+countries[i].cities+"</div>"+
//                 " <div>"+countries[i].locations+"</div></div>");
//         }
//     }
// });


// example1 - youtube - not done, can`t access the key in array;
// function getScores() {
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
//         document.getElementById('div1').innerHTML = xmlhttp.responseText;
//         var cities = xmlhttp.result;
//         getI(cities);
//     }else{
//         document.getElementById('div1').innerHTML = 'waiting for response from server';
//     }
//   };
//     function getI (cities) {
//      for(var i=0;i<cities.length;i++){
//          $('#div2').append('<div class ="parent">'+cities[i].city+"</div>");
//      }
//  }
// xmlhttp.open("GET","https://learnwebcode.github.io/json-example/animals-1.json",true );
// xmlhttp.send();
// }


// AJAX REQUEST !!! - youtube - done
// var countAClicks = 1;
// var myDiv = document.getElementById('div1');
// var myButtonToClcik = document.getElementById('button');
// myButtonToClcik.addEventListener('click', function () {
//     var makeXmlRequest = new XMLHttpRequest();
//     makeXmlRequest.open('GET',"https://learnwebcode.github.io/json-example/animals-"+ countAClicks+".json");
//     makeXmlRequest.onload = function () {
//         var collectedDataFromAjaxRequest = JSON.parse(makeXmlRequest.responseText);
//         renderHTML(collectedDataFromAjaxRequest);
//     };
//     makeXmlRequest.send();
//     countAClicks++;
//     if(countAClicks===4){
//         myButtonToClcik.style.visibility = 'hidden';
//     }
// });
// function renderHTML(data) {
//     var htmlString = ' ';
//     for(var i=0;i<data.length;i++){
//         htmlString+="<p>"+data[i].name+" is a"+" "+data[i].species+" "+"that likes to eat ";
//
//         for(var ii = 0;ii<data[i].foods.likes.length;ii++){
//             if(ii===0){
//                 htmlString+=data[i].foods.likes[ii];
//             }else {
//                 htmlString+=' and'+" "+data[i].foods.likes[ii];
//             }
//         }
//         htmlString += ' while dislikes ';
//
//         for(ii = 0;ii<data[i].foods.dislikes.length;ii++){
//             if(ii===0){
//                 htmlString+=data[i].foods.dislikes[ii];
//             }else {
//                 htmlString+=' and '+" "+data[i].foods.dislikes[ii];
//             }
//         }
//         htmlString+='</p>'
//     }
//     myDiv.insertAdjacentHTML('beforeend',htmlString);
// }


// Contac Forma ! - done by saving into local storage and showing to HTML
// function setData() {
//     var firstName = document.getElementById('name').value;
//     var lastName = document.getElementById('last-name').value;
//     var userEmail = document.getElementById('email').value;
//
//     var User = {
//         Username: firstName, Lastname: lastName, UserEmail: userEmail
//     };
//     var localData = JSON.stringify(User);
//     localStorage.setItem("userdata", localData);
// }
//     function getData() {
//         var emptyStringToShowUserInfo = '';
//         var UserInforShow = document.getElementById('div2');
//         var data = localStorage.getItem('userdata');
//         var collectDataFromLocalStorage = JSON.parse(data);
//         emptyStringToShowUserInfo = collectDataFromLocalStorage.Username +'<br>'+ collectDataFromLocalStorage.Lastname +'<br>'+ collectDataFromLocalStorage.UserEmail;
//         UserInforShow.innerHTML = emptyStringToShowUserInfo;
// }


// Login and access to website - home task
function setData() {
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('last-name').value;
    var userEmail = document.getElementById('email').value;
    var Userpassword = document.getElementById('password').value;

    var User = {
        Username: firstName, Lastname: lastName, UserEmail: userEmail, UserPassword: Userpassword
    };
    
    var localData = JSON.stringify(User);
    localStorage.setItem("userdata", localData);
}
function getData() {
    var emptyStringToShowUserInfo = '';
    var UserInforShow = document.getElementById('div2');
    var data = localStorage.getItem('userdata');
    var collectDataFromLocalStorage = JSON.parse(data);
    emptyStringToShowUserInfo = collectDataFromLocalStorage.Username +'<br>'+ collectDataFromLocalStorage.Lastname +'<br>'+ collectDataFromLocalStorage.UserEmail+'<br>'+collectDataFromLocalStorage.UserPassword;
    UserInforShow.innerHTML = emptyStringToShowUserInfo;
}
function LoginUser() {
    var loginUseremail = document.getElementById('Loginemail').value;
    var loginUserPassword = document.getElementById('Loginpassword').value;
    var LoginParseData = localStorage.getItem('userdata');
    var parseJsonOnLoginPage = JSON.parse(LoginParseData);
    if(loginUseremail === parseJsonOnLoginPage.UserEmail && loginUserPassword === parseJsonOnLoginPage.UserPassword){
        window.open('UserProfile.html',"_self")
    }else{
        alert('Email or password is wrong')
    }
}
