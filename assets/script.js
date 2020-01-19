var copybtn = document.getElementById('copybtn')
var initbtn = document.getElementById('initbtn')
var finalbtn = document.getElementById('finalbtn')
var hide = document.getElementById('hide')
var modal = document.getElementById('modal') 
var length = document.getElementById('length')
var password = document.getElementById('password')




// brings up the critera screen
initbtn.addEventListener("click", function(event){
 event.preventDefault()
 hide.style.setProperty("display", 'none')
 modal.style.setProperty('display','block')
} )




// make the password
finalbtn.addEventListener("click", function(event){
   var passwordlen = parseInt(length.value)
    if (passwordlen < 8 || passwordlen> 128 ) {alert('please choose a length between 8 and 128')}
    else {

    event.preventDefault()



password.value = "new"
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


