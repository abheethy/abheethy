var fbElement= document.getElementById('fb_icon');
var instaElement= document.getElementById('insta_icon');
var downloadResume= document.getElementById('download-resume');
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
	}else{
		
	}
}
function downlodResume(e){
	e.preventDefault();  
	var URL = 'https://drive.google.com/file/d/1ezFPrxcgMnqE8zgbPxvdPS4dbCYa1-C5/view?usp=sharing'
	window.open(URL, '_blank');
}