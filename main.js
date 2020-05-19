(function() {
	'use strict';

	const listJaneFriends = document.querySelector('.jane-friends .friends-list'),
		displayJaneFriendsButton = document.querySelector('.jane-friends button'),
		people = [
		    { name: 'John Doe', age: 50 },
		    { name: 'Jane Doe', age: 20, friends: [{ name: 'Annie' }, { name: 'Betty' }, { name: 'Cindy' }] }
		];

	function getAndDisplayFriends() {
		const [, {friends: [{name: friend1}, {name: friend2}, {name: friend3}]}] = people,
			janeFriends = [friend1, friend2, friend3];

			listJaneFriends.innerHTML = janeFriends.map((friend, idx) => {
				return `<li>${friend}</li>`;
			}).join('');
	}

	displayJaneFriendsButton.addEventListener('click', getAndDisplayFriends);
})();