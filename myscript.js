const genPicture = () => fetch('https://api.unsplash.com/photos/random?client_id=8yQn8QW5PoLhMjRcawCSnhKNwG9D_8-TWZqksr2QT94')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myJson) => {
		let myImage;
		console.log(myJson);
		if(document.getElementById('myImg')){
			myImage = document.getElementById('myImg');
			myImage.src = myJson.urls.raw;
		}else{
			myImage = document.createElement('img');
			myImage.width = "500";
			myImage.height = "500";
			myImage.src = myJson.urls.raw;
			myImage.id = "myImg";
			let LikeButton = document.createElement('button');
			const newText = document.createTextNode("Like");
			LikeButton.appendChild(newText);
			LikeButton.id = "LikeButton" + myJson.id;
			LikeButton.onclick = function() {likeImage(myJson.id)};
			document.querySelector('body').appendChild(myImage);
			document.body.insertBefore(LikeButton, myImage);
		}
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
});

const genMovie = () => fetch('https://api.themoviedb.org/3/movie/550?api_key=5d94b91365afa1ce07dc9b6c672cccd1')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myJson) => {
		let myImage2;
		console.log(myJson);
		if(!document.getElementById('myImg2')){
			myImage2 = document.createElement('img');
			myImage2.src = "https://image.tmdb.org/t/p/w500" + myJson.poster_path;
			myImage2.id = "myImg2";
			document.querySelector('body').appendChild(myImage2);
		}
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
	});

const topStories = () => fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myJson) => {
		let array = myJson.slice(0,10);
		array.forEach(element => {
			showStory(element);
		})
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
	});

const showStory = (id) => fetch("https://hacker-news.firebaseio.com/v0/item/"+id+".json?print=pretty")
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myStory) => {
		console.log(myStory);
		const newContent = document.createTextNode(myStory.title);
		myDiv = document.createElement('div');
		myDiv.appendChild(newContent);
		myDiv.id = "myStory" + myStory.id;
		document.querySelector('body').appendChild(myDiv);
	});
const likeImage = (id) => fetch("https://api.unsplash.com/photos/"+id+"/like", 
	{
	method: 'POST',
	headers: {
		Authorization: "Client-ID 8yQn8QW5PoLhMjRcawCSnhKNwG9D_8-TWZqksr2QT94"
	}
	})
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myPhoto) => {
		console.log(myPhoto.photo.likes);
		console.log(myPhoto.photo.liked_by_user);
	});
const authorize = () => window.location.replace("https://unsplash.com/oauth/authorize?client_id=MrDSLc-olHpDJF0B4VdnzcFYiEaWf3O4Yed9ULiZtww&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=read_user+write_user")

const params ={
	client_id: "MrDSLc-olHpDJF0B4VdnzcFYiEaWf3O4Yed9ULiZtww&",
	client_secret: "fMvUTdjXB5gS3TQfEnylQfa5j5OMTkDSR0kbu4O6TTw",
	redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
	code: "e8Jzkk8LlbOn7ztmcDPNPlr2InxZDM2ojlybW697c_k",
	grant_type: "authorization_code"
};

const postToken = () => fetch("https://unsplash.com/oauth/token", 
	{
	method: 'POST',
	body: JSON.stringify(params)
	})
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myJson) => {
		console.log(myJson.access_token);
	});
