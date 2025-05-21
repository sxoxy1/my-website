function ledOn(){
  console.log("LED ON");
  var ref = database.ref("led");
  ref.update({led:1})
}
function ledOff(){
  console.log("LED OFF");
  var ref = database.ref("led");
  ref.update({led:0})
}

var config = {
  apiKey: "AIzaSyAeqbvkKt9xQ3ma2--GETJ2aJYPffYSnMo",
  authDomain: "myweb-82db7.firebaseapp.com",
  databaseURL: "https://myweb-82db7-default-rtdb.firebaseio.com",
  projectId: "myweb-82db7",
  storageBucket: "myweb-82db7.firebasestorage.app",
  messagingSenderId: "833532123493",
  appId: "1:833532123493:web:77f6375009e2ad302d298c",
  measurementId: "G-49EEE9ZZ3P"
}

//Firebase 데이터베이스 만들기
firebase.initializeApp(config);
database = firebase.database();

// Firebase 데이터베이스 정보 가져오기
var ref = database.ref("led");
ref.on("value", gotData);


function gotData(data) {
  var val = data.val();

  if (val.led == 0){
    //document.getElementById("ledstatus").innerHTML = "led가 현재 꺼짐";
    document.getElementById("img").src = "off.png";}
  else {
    //document.getElementById("ledstatus").innerHTML = "led가 현재 켜짐";
    document.getElementById("img").src = "on.png";}

  console.log(val)
}