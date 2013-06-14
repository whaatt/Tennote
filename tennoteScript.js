$(document).ready(function() {

	function hideContent() {
		$('.contentDiv').hide();
	}
	
	$(window).load(function() {
		hideContent();
		$('#NewUserWelcome').show();
	});
	
	$('#PlayerBookLink').click(function() {
		hideContent();
		$('#PlayerBook').show();
		$('.PlayerBookContent').hide();
		$('#PlayerList').show();
	});
	
	$('#FillerKeyForPerson').click(function() {
		$('#PlayerList').hide();
		$('#PlayerInfoWithMatchHistory').show();
		$('#MatchHistory').hide();
	});
	
	$('#FillerKeyForSearchPerson').click(function() {
		$('#PlayerSearchResults').hide();
		$('#PlayerInfoWithMatchHistory').show();
		$('#MatchHistory').hide();
	});
	
	$('#FillerMatchKey').click(function() {
		$('#PlayerInfoWithMatchHistory').hide();
		$('#MatchStats').show();		
	});
	
	$('#PlayerSearchSubmit').click(function(e) {
		e.preventDefault();
		$('#PlayerSearch').hide();
		$('#PlayerSearchResults').show();
		return false; 
	});
	
	$('#NewPlayerSubmit').click(function(e) {
		e.preventDefault();
		$('#NewPlayer').hide();
		$('#NewPlayerSaved').show();
		return false; 
	});
	
	$('#NewMatchBasicSubmit').click(function(e) {
		e.preventDefault();
		$('#NewMatchBasicInfo').hide();
		$('#NewMatchStatistics').show();
		return false; 
	});
	
	$('#NewMatchStatisticsSubmit').click(function(e) {
		e.preventDefault();
		$('#NewMatchStatistics').hide();
		$('#NewMatchSaved').show();
		return false; 		
	});
	
	$('#PlayerInfoTab').click(function() {
		$('#PlayerInfo').show();
		$('#MatchHistory').hide();
	});
	
	$('#MatchHistoryTab').click(function() {
		$('#PlayerInfo').hide();
		$('#MatchHistory').show();
	});
	
	$('#PlayerSearchLink').click(function() {
		hideContent();
		$('#PlayerSearch').show();
	});
	
	$('#NewPlayerLink').click(function() {
		hideContent();
		$('#NewPlayer').show();
	});
	
	$('#NewMatchLink').click(function() {
		hideContent();
		$('#NewMatch').show();
		$('#NewMatchStatistics').hide();
	});
	
	$('#AboutTennoteLink').click(function() {
		hideContent();
		$('#AboutTennote').show();
	});
		
});