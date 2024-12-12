document.getElementById('submitButton').addEventListener('click', function() {
    const userlnput = document.getElementById('userlnput').value;
    const outputDiv = document.getElementById('output');
    if(userlnput) {
        outputDiv.textContent = 'Siz kiritdingiz:${userlnput}';
        document.getElementById('userlnput').value='';
    }else{
        outputDiv.textContent='iltmos,biror matn kiriting!';
    }
});