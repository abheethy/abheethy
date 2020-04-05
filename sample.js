document.getElementsByClassName('abheethy-bar-item')[0].style.backgroundColor = '#000';
var fbElement= document.getElementById('fb_icon');
var instaElement= document.getElementById('insta_icon');
var linkdnElement= document.getElementById('linkdn_icon');
var navElements = document.getElementsByClassName('abheethy-bar-item');
for (var i = 0; i < navElements.length; i++) {
	navElements[i].addEventListener('click', event => {
		navigateBar(event);
});
}
function navigateBar(event) {
	var id  =  event.currentTarget.id;
	if(event.currentTarget.textContent.includes("ABOUT")){
		document.getElementsByClassName('abheethy-bar-item')[0].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[1].style.backgroundColor = '#000';
		document.getElementsByClassName('abheethy-bar-item')[2].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[3].style.backgroundColor = '#222';
	}else if(event.currentTarget.textContent.includes("HOME")){
		document.getElementsByClassName('abheethy-bar-item')[0].style.backgroundColor = '#000';
		document.getElementsByClassName('abheethy-bar-item')[1].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[2].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[3].style.backgroundColor = '#222';
	}else if(event.currentTarget.textContent.includes("PHOTOS")){
		document.getElementsByClassName('abheethy-bar-item')[0].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[1].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[2].style.backgroundColor = '#000';
		document.getElementsByClassName('abheethy-bar-item')[3].style.backgroundColor = '#222';
	}else{
		document.getElementsByClassName('abheethy-bar-item')[0].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[1].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[2].style.backgroundColor = '#222';
		document.getElementsByClassName('abheethy-bar-item')[3].style.backgroundColor = '#000';
	}
	
	var progressOne = document.getElementsByClassName('progress-one')[0];
	var progressTwo = document.getElementsByClassName('progress-two')[0];
	var progressThree = document.getElementsByClassName('progress-three')[0];
	var progressFour = document.getElementsByClassName('progress-four')[0];
	progressOne.classList.remove('progressone');
	progressTwo.classList.remove('progresstwo');
	progressThree.classList.remove('progressthree');
	progressFour.classList.remove('progressfour');
	if(event.currentTarget.textContent.includes("ABOUT")){
		progressOne.classList.add('progressone');
		progressTwo.classList.add('progresstwo');
		progressThree.classList.add('progressthree');
		progressFour.classList.add('progressfour');
	}
}

var downloadResume= document.getElementById('download-resume');
linkdnElement.addEventListener('click', event => {
				myFunction(event)
		});
fbElement.addEventListener('click', event => {
	myFunction(event)
});
downloadResume.addEventListener('click', event => {
	downlodResume(event)
});
instaElement.addEventListener('click', event => {
	myFunction(event)
});

function myFunction(event) {
	var id  =  event.currentTarget.id;
	if(id === 'fb_icon'){
		window.open('https://www.facebook.com/abheethy', '_blank');
	}else if(id === 'insta_icon'){
		window.open('https://www.instagram.com/abheethy/', '_blank');
	}else if(id === 'linkdn_icon'){
		window.open('https://www.linkedin.com/in/abhijithajithkumar/', '_blank')
	}
}
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([80.2277203, 12.9117073]),
      zoom: 15	
    })
  });
function downlodResume(e){
	e.preventDefault();  
	var URL = 'https://drive.google.com/file/d/1ezFPrxcgMnqE8zgbPxvdPS4dbCYa1-C5/view?usp=sharing'
	window.open(URL, '_blank');
}