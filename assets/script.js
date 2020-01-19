var copybtn = document.getElementById('copybtn')
var initbtn = document.getElementById('initbtn')
var finalbtn = document.getElementById('finalbtn')
var hide = document.getElementById('hide')
var modal = document.getElementById('modal') 
var length = document.getElementById('length')
var password = document.getElementById('password')
var critera = document.getElementById('criteria')
var num = document.getElementById("0")
var low = document.getElementById('1')
var up = document.getElementById('2')
var special = document.getElementById('3')
var empty = document.getElementById('4')
var numbers ='0123456789'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var punctuation = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~'
var blank = ' '
varcharset = ''




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

    if (passwordlen < 8 || passwordlen> 128 || length.value === '' ) {alert('please choose a length between 8 and 128')}
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

