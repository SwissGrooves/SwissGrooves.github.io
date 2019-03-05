

$(document).ready(function() {
	
	var taglines = [
		"Hier spielt die Musik",
		"Unsere Auswahl macht dich platt",
		"Hier dreht sich alles um Musik",
		"Wir halten mehrere Records",
		"Alles intakt",
		"Im Angebot: Chai(kovsky)"
	];

	var randomTagline = taglines[Math.floor(Math.random()*taglines.length)];
	
	$('#tagline').text(randomTagline);
});