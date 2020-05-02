
const avatarPromise = new Promise(resolve => {
	setTimeout(function() {
		const result = {
			url: 'http://facebook.com/user/image0',
			status: 'OK',
		};
		resolve(result);
	}, 3000);
});

const coverImagePromise = new Promise(resolve => {
	setTimeout(function() {
		resolve('http://facebook.com/user/cover/image1');
	}, 1000);
});


const avatarPromise1 = new Promise(resolve => {
	setTimeout(function() {
		const result = {
			url: 'http://facebook.com/user/image2',
			status: 'OK',
		};
		resolve(result);
	}, 3000);
});

const coverImagePromise1 = new Promise(resolve => {
	setTimeout(function() {
		resolve('http://facebook.com/user/cover/image3');
	}, 1000);
});


// chay theo thu tu sap xep cua promise 

Promise.all([
  avatarPromise,
  avatarPromise1,
  coverImagePromise,
  coverImagePromise1
]).then(responses => console.log(responses));

const evolutionChainPromise = fetch('http://pokeapi.co/api/v2/evolution-chain/?limit=200&offset=100');
const typePromise = fetch('http://pokeapi.co/api/v2/type/3/');

Promise.all([evolutionChainPromise, typePromise])
	.then(responses => {
		return responses.map(element => element.json());
	})
	.then(data => console.log(data))
	.catch(err => console.log(err));
