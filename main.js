if (localStorage.getItem("img") !== null) {
	document.getElementsByTagName("img")[0].src = localStorage.getItem("img")
}

document.getElementById("ticket-select").addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
	file = document.getElementById("ticket-select").files[0]
	
	var reader = new FileReader();
	reader.onloadend = function() {
		document.getElementsByTagName("img")[0].src = reader.result
		localStorage.setItem("img", reader.result)
	}
	reader.readAsDataURL(file);
}


// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}
