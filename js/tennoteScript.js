$(document).ready(function() {

	var picker = $('#NewMatchDate', this);
    picker.mobipick();

	// createPlayerBar and destroyPlayerBar are necessary
	// because otherwise, the navbar will take up space
	// at the top, even while hidden
	// thusly, we create/destroy them on command. c00l
	
	function createPlayerBar() {
		html = '<div data-role="navbar" id="playerTabs"><ul><li><a id="PlayerInfoTab">Player Information</a></li><li><a id="MatchHistoryTab">Match History</a></li></ul></div>';
		$('#header').append(html);
		$('#playerTabs').navbar();
		$('#PlayerInfoTab').addClass('ui-btn-active'); // adds the active class
		$('#content').trigger('create'); // this .trigger('create') business refreshes the jQM styling, which doesn't happen by default
		$('#PlayerInfoTab').click(function() {
			$('#PlayerInfo').show();
			$('#MatchHistory').hide();
		});
		
		$('#MatchHistoryTab').click(function() {
			$('#PlayerInfo').hide();
			$('#MatchHistory').show();
		});
	}
	
	function destroyPlayerBar() {
		$('#playerTabs').remove();
		$('#content').trigger('create');
	}
	
	function hideContent() {
		$('.contentDiv').hide();
		destroyPlayerBar(); // remove more custom menus below this, as necessary
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
		createPlayerBar();
		$('#PlayerInfo').show();
		$('#MatchHistory').hide();
	});
	
	$('#FillerKeyForSearchPerson').click(function() {
		$('#PlayerSearchResults').hide();
		$('#PlayerInfoWithMatchHistory').show();
		$('#PlayerInfo').show()
		$('#MatchHistory').hide();
	});
	
	$('#FillerMatchKey').click(function() {
		$('#PlayerInfoWithMatchHistory').hide();
		$('#MatchStats').show();		
	});
	
	$('#EditPlayerButton').click(function() {
		$('#PlayerInfo').hide();
		$('#EditPlayer').show();
	});
	
	$('#EditPlayerSubmit').click(function(e) {
		e.preventDefault();
		$('#EditPlayer').hide();
		$('#PlayerInfoWithMatchHistory').show();
		$('#PlayerInfo').show();
		$('#MatchHistory').hide();
		return false;
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
		$('#NewMatchBasicInfo').show();
		$('#NewMatchStatistics').hide();
	});
	
	$('#AboutTennoteLink').click(function() {
		hideContent();
		$('#AboutTennote').show();
	});
		
});