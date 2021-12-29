user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

//ADD YOUR FIREBASE LINKS HERE

    
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

    function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }