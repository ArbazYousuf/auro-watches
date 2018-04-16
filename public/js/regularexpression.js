 // Contact Form
// // ID 
//         textarea = For comment area /text area ;
//         commenterror = if comment area doesn't have any value , restrict box for text area ;
//          table = for table ;
//          restrictstar3 = for name's restrict star ;
//          fname = for input for name ;
//          restrictbar = if name doesn't have value or correct valu , restrict box for name ;
//          restrictstar4 = for email's restrict star ;
//          restrictbar4 = if email doesn't have value or correct value , restrict box for email ;
//          email = for input for name;
//          restrictstar5 = for number's restrict star ;
//          number = for input for number;
//           restrictbar5 = if number doesn't have value or correct value , restrict box for number ;
// 
var Textarea= document.getElementById('textarea').value;
var ZERO =0;


function commentclick() {
    if(textarea !== ZERO ){
        document.getElementById('table').style.display = "inline-block";
    }
    else{
        document.getElementById('commenterror').style.display = "inline-block";
        document.getElementById('restrictstar').style.color = "red";
        
    };

}
function submitbutton() {
    if(){
        if(){}
    }
}