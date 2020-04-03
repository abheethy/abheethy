var fbElement= document.getElementById('fb_icon');
var instaElement= document.getElementById('insta_icon');
var linkdnElement= document.getElementById('linkdn_icon');

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