const textarea = document.getElementById('writing-area');
let timer;

textarea.addEventListener('input', () => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		textarea.value = '';
	}, 2000); // 2000 milliseconds = 2 seconds
});
