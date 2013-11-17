function putbox(document){
	var box = document.getElementById('mw-content-text');
	var table = document.createElement("table");
	var newrow = document.createElement('tr');
	var th = document.createElement('th');
	table.className = "infobox vcard";
	table.style.width = "22em";
	th.colspan = "2";
	th.className = "n";
	th.style.textAlign = "center";
	th.style.fontSize = "125%";
	th.innerText = "hello world";
	newrow.appendChild(th);
	table.appendChild(newrow);
	box.insertBefore(table, box.firstChild);
}

// function runscript(document) {
//   // No tabs or host permissions needed!
//   console.log('putting box');
//   chrome.tabs.executeScript({
//     code: 'putbox(document)'
//   });
//};

//chrome.tabs.onUpdated.addListener(runscript);