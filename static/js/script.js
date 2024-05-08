document.addEventListener('DOMContentLoaded', function () {
	const textarea = document.getElementById('writing-area');
	const timerDisplay = document.getElementById('timer-display');
	const resetButton = document.getElementById('reset-button');
	let timer;
	let countdown = 60; // 60 seconds countdown

	const resetTimer = (restart = true) => {
		clearInterval(timer);
		countdown = 60;
		timerDisplay.textContent = countdown;
		if (restart) {
			startTimer();
		}
	};

	const startTimer = () => {
		timer = setInterval(() => {
			countdown--;
			timerDisplay.textContent = countdown;
			if (countdown <= 0) {
				textarea.value = ''; // Clear the textarea when the countdown reaches 0
				resetTimer(false); // Stop the timer as there is no more text
			}
		}, 1000);
	};

	textarea.addEventListener('input', () => {
		resetTimer(); // Only reset the timer, do not clear the textarea here
	});

	resetButton.addEventListener('click', () => {
		textarea.value = ''; // Clear text when resetting manually
		resetTimer();
	});

	startTimer(); // Initialize the timer when the page loads
});
