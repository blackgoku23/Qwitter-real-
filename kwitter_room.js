
var firebaseConfig = {
      apiKey: "AIzaSyDTVrTUT8haDslJJyaMPz5VEu_Uqi_lrRE",
      authDomain: "red-social-dd578.firebaseapp.com",
      databaseURL: "https://red-social-dd578-default-rtdb.firebaseio.com",
      projectId: "red-social-dd578",
      storageBucket: "red-social-dd578.appspot.com",
      messagingSenderId: "34654431523",
      appId: "1:34654431523:web:309a9282809f2d504f0496"
    };
    
    firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
document.getElementById("nombre_de_usuario").innerHTML="hola"+ user_name

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

function logout(){
localStorage.removeItem ("user_name");
window.location="index.html"
}