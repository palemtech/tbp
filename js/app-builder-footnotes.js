// App Builder Footnote Functions 
// Requires jQuery and Tooltipster plugins

function initFootnotes(footnotes) {
    const endnotes =  $('<div>');
    endnotes.addClass('endnotes');
    const header = $('<h2>');
    let glo = false
    const keys = Object.keys(footnotes);
    if (keys.some(x => x.startsWith('F'))) {
        header.html('Catatan Kaki');
    } else if (keys.some(x => x.startsWith('X'))) {
        header.html('Reperinsi Silang');
    } else if (keys.some(x => x.startsWith('G'))) {
        glo = true
        header.html('Kamus');
    }

    endnotes.append(header);

	$.each(footnotes, function(id, value) {
		//$('#' + id).tooltipster({
        const val =  $(value);
        let x = $('[id="' + id + '"]')
		x.tooltipster({
			content: val, 
			interactive: true,
			theme: 'tooltipster-theme',
			maxWidth: 500
		});
        const fn = $('<div>');
        if (!glo) {
            let marker = $('<sup>');
            marker.html(x.children().first().text() + ' ');
            val.prepend(marker);
        }
        fn.html(val);
        endnotes.append(fn);
	});
    $('#content').append(endnotes);
}


