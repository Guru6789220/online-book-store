function sub(){
    if(document.getElementById('roll').value=="")
    {
        window.alert("Enter the details");
        
    }
    var roll=document.getElementById("roll").value;
    var pas=document.getElementById("pass").value;
    if( roll=="20191CCE0086" && pas =="1234")
    {
        window.alert("Welcome to R C Books");
        window.location.assign('http://127.0.0.1:5500/Online.html');
    }

}