var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo_polnep.png'){
        myImage.setAttribute('src','images/logo_elektro.png');
    } else {
         myImage.setAttribute('src','images/logo_polnep.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {

    var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Selamat Datang, ' + myName;

}

if (!localStorage.getItem('name')) {

    setUserName();

} else {
    var  storedName = localStorage.getItem ('name');
    myHeading.innerHTML = 'Selamat Datang, ' + storedName;

}

myButton.onclick = function() {
    setUserName();
	
}
