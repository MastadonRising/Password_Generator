var copybtn = document.getElementById('copybtn')
var initbtn = document.getElementById('initbtn')
var finalbtn = document.getElementById('finalbtn')
var hide = document.getElementById('hide')
var modal = document.getElementById('modal') 
var length = document.getElementById('length')
var password = document.getElementById('password')
var critera = document.getElementById('criteria')


critera.addEventListener("click", function(event){
 event.preventDefault()
alert(event.target)
var el = event.target
alert(el.id)
 
})

// brings up the critera screen
initbtn.addEventListener("click", function(event){
 event.preventDefault()
 hide.style.setProperty("display", 'none')
 modal.style.setProperty('display','block')
} )




// make the password
finalbtn.addEventListener("click", function(event){
   var passwordlen = parseInt(length.value)
   var passwordOmega = ''

   var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var lowercase = 'abcdefghijklmnopqrstuvwxyz';
   var numbers = '0123456789';
   var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

   var charset = uppercase + lowercase + numbers + symbols;

    if (passwordlen < 8 || passwordlen> 128 ) {alert('please choose a length between 8 and 128')}
    else {
    event.preventDefault()
    for (i=0;i< passwordlen; i++){
        var char = Math.floor(Math.random() * charset.length );
        passwordOmega += charset.substring(char, char +1);
    }
password.value = passwordOmega
hide.style.setProperty("display", 'block')
modal.style.setProperty('display','none')
}})




// Copy funtion ---------Dont mess this works-----------------------
copybtn.addEventListener("click", function() {
    

      password.select();
    password.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");   
    alert('You have copied '+  password.value + ' to the clipboard')
       })


