//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBAGubQtJGUv6aYg4K-E7uBYSzMg83M0ZU",
      authDomain: "whitehat-99yk.firebaseapp.com",
      databaseURL: "https://whitehat-99yk-default-rtdb.firebaseio.com",
      projectId: "whitehat-99yk",
      storageBucket: "whitehat-99yk.appspot.com",
      messagingSenderId: "390008698492",
      appId: "1:390008698492:web:0b4346bc1900f37166bbf9"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            likes: 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
