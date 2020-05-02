/*
console.log("start downloading pokemons");

const pokemonPromise = fetch(
  "http://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200"
);

console.log(typeof pokemonPromise);

console.log(pokemonPromise)

pokemonPromise
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))

console.log("finish downloading pokemons");

*/
const posts = [
	{
		content: 'toi la hoc sinh ',
		likes: 51,
		user: 'Paul',
		id: 1,
	},
	{
		content: 'toi la hoc sinh ',
		likes: 51,
		user: 'Paul',
		id: 2,
	},
];

const users = [
	{
		userName: 'Paul',
		age: 24,
	},
	{
		userName: 'Duong',
		age: 23,
	},
	{
		userName: 'Loc',
		age: 22,
	},
];
function findPostById(id) {
  const post = posts.find(post => post.id === id)
  return new Promise((resolve , reject) =>{
			setTimeout(function(){
				if (post) {
					resolve(post);
				}
				reject('reject not find view by id post ' + id);
			}, 2000)
      
	});
}

function queryUserDetail(post){
	const user = users.find(user => user.userName === post.user);
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			if (user) {
				post.userDetails = user;
				resolve(post);
			}else{
				reject('rejected because not find user in post' + post);
			}	
		}, 2000)
	})
}


findPostById(1)
	.then(post => queryUserDetail(post))
	.then(data => console.log(data))
	.catch(err => console.log(err));