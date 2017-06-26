var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
    getJoke();
});
var paragraph = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    if(xhr.status == 200) {
	       console.log(xhr.response);
    }
    
    xhr.addEventListener('load', function(){
        var response = JSON.parse(xhr.response);
        //paragraph.innerHTML = response.value.joke;
        /*var joke = 'brak dowcipu';
        
        if (response.value && response.value.joke) {
            joke = response.value.joke;
        }
        paragraph.innerHTML = joke;*/
        
        paragraph.innerHTML = response.value && response.value.joke ? response.value.joke : 'brak dowcipu';
    });
    
    xhr.send();
}