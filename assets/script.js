var copybtn = document.getElementById('copybtn')

 copybtn.addEventListener("click", function() {
    

    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");   
    alert('You have copied '+  copyText.value + 'to the clipboard')
       })


