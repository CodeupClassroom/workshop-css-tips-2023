const handleCardClick = (e) => {
	e.target.classList.toggle("flipped");
};

const addCardEventListeners = (cards) => {
	for (let card of cards) {
		card.addEventListener("click", (e) => {
			handleCardClick(e);
		});
	}
};

(() => {
	// TODO: Flip the card when clicked
	// TODO: NOW there are several cards on the page. Refactor to add event
	// listener to each one
	const cards = document.querySelectorAll(".poker-card");
	addCardEventListeners(cards);
})();
