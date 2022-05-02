var token = configKey.MY_API_TOKEN;

let photoGenerator = `https://api.unsplash.com/photos/random/?client_id=${token}`;
let image = document.querySelector('#unsplashImage');
let photographer = document.querySelector('#photographer');
let dislikeCounter = document.querySelector('#dislikeCounter');
let likeCounter = document.querySelector("#likeCounter");
let dislikeCount = 0;
let likeCount = 0;

const getPhotoForDislike = function(){
	dislikeCount += 1
	dislikeCounter.innerText = dislikeCount
	console.log(dislikeCount)

	fetch(photoGenerator)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
		// console.log(data)	
		image.src = data.urls.regular
		photographer.innerText = data.user.name
		photographer.setAttribute("href", data.user.portfolio)
		})
		.catch(err => {
			console.log(`error ${err}`)
		});

}
const getPhotoForLike = function(){
	likeCount += 1
	likeCounter.innerText = likeCount
	console.log(likeCount)

	fetch(photoGenerator)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
		// console.log(data)	
		image.src = data.urls.regular
		photographer.innerText = data.user.name
		photographer.setAttribute("href", data.user.portfolio)
		})
		.catch(err => {
			console.log(`error ${err}`)
		});

}

const getPhoto = function(){
	fetch(photoGenerator)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
		// console.log(data)	
		image.src = data.urls.regular
		photographer.innerText = data.user.name
		photographer.setAttribute("href", data.user.portfolio)
		})
		.catch(err => {
			console.log(`error ${err}`)
		});

}

document.getElementById('dislikeTrigger').addEventListener('click',getPhotoForDislike);
document.getElementById('likeTrigger').addEventListener('click',getPhotoForLike);
window.addEventListener('load',getPhoto);