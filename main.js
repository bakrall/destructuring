(function() {
	'use strict';

	const listJaneFriends = document.querySelector('.jane-friends .friends-list'),
		displayJaneFriendsButton = document.querySelector('.jane-friends button'),
		people = [
		    { name: 'John Doe', age: 50 },
		    { name: 'Jane Doe', age: 20, friends: [{ name: 'Annie' }, { name: 'Betty' }, { name: 'Cindy' }] }
		],
		personName = document.querySelector('.person'),
		personDetails = document.querySelector('.details'),
		person = {
		    first_name: 'Fred',
		    employment: {
		       title: 'Supervisor'
		    },
		    family: [{ first_name: 'Fran' }, { first_name: 'Frank' }]
		},
		displayPersonDetailsButton = document.querySelector('.person-details button');

	function getAndDisplayFriends() {
		const [, {friends: [{name: friend1}, {name: friend2}, {name: friend3}]}] = people,
			janeFriends = [friend1, friend2, friend3];

			listJaneFriends.innerHTML = janeFriends.map((friend, idx) => {
				return `<li>${friend}</li>`;
			}).join('');
	}

	function getAndDisplayPersonDetails() {
		const {first_name: name, employment: {title: job}, family: [, {first_name: secondChildsFirstName}]} = person;

		personName.textContent = name;
		personDetails.innerHTML = `Job title: ${job}, second child's name: ${secondChildsFirstName}`;
	}

	displayJaneFriendsButton.addEventListener('click', getAndDisplayFriends);
	displayPersonDetailsButton.addEventListener('click', getAndDisplayPersonDetails);
})();