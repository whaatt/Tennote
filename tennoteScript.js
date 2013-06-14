$(document).ready(function{

	function hideContent() {
		$(‘.contentDiv’).hide();
	}

	function PlayerBook() {
		hideContent();
		$('#PlayerList').show();
	}

	function PlayerSearch() {
		hideContent();
		$('#PlayerSearch').show();
	}

	function NewPlayer() {
		hideContent();
		$('#NewPlayer').show();
	}

	function NewMatch() {
		hideContent();
		$('#NewMatch').show();
	}

	function AboutTennote() {
		hideContent();
		$('#AboutTennote').show();
	}

	$(window).load(function() {
		hideContent();
		$('#NavMenu').show();
		$('#NewUserWelcome').show();
	});

});