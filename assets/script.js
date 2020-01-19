var copybtn = document.getElementById('copybtn')
var initbtn = document.getElementById('initbtn')
var finalbtn = document.getElementById('finalbtn')

 

initbtn.addEventListener("click", function(event){
 event.preventDefault()
var  CHAR_SETS = [
	[ "Numbers", "0123456789"],
	[ "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
	[ "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
	[ "ASCII symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
	[ "Space", " "],
];



} )













































copybtn.addEventListener("click", function() {
    

    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");   
    alert('You have copied '+  copyText.value + 'to the clipboard')
       })


