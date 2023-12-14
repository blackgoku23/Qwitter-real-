function add_User(){
    user_name=document.getElementById("usuario").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html"
}