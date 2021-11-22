function loadPage(name, setupFns) {
	console.log(name);
	var mydata = bookData[name];
	var navAddresses = mydata['nav_addresses'];
	let cons = $(JSON.parse(mydata.content).replace(/\s+(\W)/g, "$1"))
	let inner = cons.html()
	
	$('#content').html(inner);
	setupAudio(mydata['audio_url']);
	$('#prev_cpt_button').data('data-prev', navAddresses[0]);
	$('#next_cpt_button').data('data-next', navAddresses[1]);
	if (mydata.glo !== '') {
		setupFns(JSON.parse(mydata.glo));
	}
	if (mydata.fns !== '') {
		setupFns(JSON.parse(mydata.fns));
	}
	$('#book-selector-a').text(mydata.title);
	$('#chapter-selector-a').text(mydata.chapterNum);
	var chapters = JSON.parse(mydata.chapters);
	return {
		chapters: chapters,
		hasIntro: mydata.hasIntro,
		baseRef: mydata.baseRef,
		title: mydata.title,
		chapterNum: mydata.chapterNum
	};	
}

function setupAudio(audioUrl) {
	console.log(audioUrl);
	var playButton = document.getElementById('play-button');
    if (audioUrl === ''){
		playButton.style.display = 'none';
	} else {
		playButton.style.display = 'flex';
		var aelem = document.getElementById('audio-elem');
		aelem.setAttribute('src', audioUrl);
		aelem.dataset.state = 'pause';
	}
}

//TODO: figure out how to ke	
function searchData(searchString){
	//loop index keys for matches, then return matching pairs of stuff.
}