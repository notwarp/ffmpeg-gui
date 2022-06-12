(async () => {
	const response = await window.ffmpeg.get('formats');
	console.log(response);
	// we now have the response from the main thread without exposing
	// ipcRenderer, leaving the app less vulnerable to attack
})();

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
	const isDarkMode = await window.darkMode.toggle()
	if (isDarkMode){
		document.querySelector("html").classList.remove('light');
		document.querySelector("html").classList.add('dark');
	}else{
		document.querySelector("html").classList.remove('dark');
		document.querySelector("html").classList.add('light');
	}
	document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
	await window.darkMode.system()
	document.getElementById('theme-source').innerHTML = 'System'
})