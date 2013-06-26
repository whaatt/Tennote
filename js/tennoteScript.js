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
			$('#EditPlayer').hide();
		});
		
		$('#MatchHistoryTab').click(function() {
			$('#PlayerInfo').hide();
			$('#MatchHistory').show();
			$('#EditPlayer').hide();
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
		$('#Login').show();
	});
	
	$('#LoginSubmit').click(function(e) {
		e.preventDefault();
		$('#Login').hide();
		$('#NewUserWelcome').show();
		return false;
	});
	
	$('#registerSubmit').click(function(e) {
		e.preventDefault();
		$('#NewUserRegistration').hide();
		$('#Login').show();
		return false;
	});
	
	$('#forgotLoginButton').click(function() {
		$('#Login').hide();
		$('#forgotLogin').show();
	});
	
	$('#forgotLoginSubmit').click(function(e) {
		e.preventDefault();
		$('#forgotLogin').hide();
		$('#Login').show();
		return false;
	});
	
	$('#RegisterButton').click(function() {
		$('#Login').hide();
		$('#NewUserRegistration').show();
	});
	
	$('#registerSubmit').click(function(e) {
		$('#NewUserRegistration').hide();
		$('#Login').show();
	});
	
	$('#LogoutLink').click(function() {
		hideContent();
		$('#Login').show();
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
	
	$('#newMatchAfterScoreStats').change(function() {
		if ( $(this).val() === 'yes' ){
			$('#NewMatchAfterScoreStatsDiv').show();
		} else {
			$('#NewMatchAfterScoreStatsDiv').hide();
		}
	});
	
	$('#NewMatchBasicSubmit').click(function(e) {
		e.preventDefault();
		var whenRecordStats = $('input[name = "recordStats"]:checked').val()
		if (whenRecordStats === 'duringMatch') {
			$('#NewMatchBasicInfoForm').hide();
			$('#NewMatchScoreFormat').show();
			$('.MatchFormatFormContent').hide();
			$('#ScoreFormatForm').show();
			return false;
		} else {
			$('#NewMatchForms').hide();
			$('#NewMatchAfterScore').show();
			$('#NewMatchAfterScoreStatsDiv').hide();
			return false;
		}
	});
	
	$('#ScoreFormatButton').click(function(e) {
		e.preventDefault();
		var formId = "#" + $('input[name = "NumberSets"]:checked').val() + 'Form';
		$('#ScoreFormatForm').hide();
		$('#NumSetsForm').show();
		$('.NumSetsFormContent').hide();
		$(formId).show();
		return false;
	});
	
/* 	$('#NumberGamesButton').click(function() {
		$('#NumberGamesForm').hide();
		$('#FinalSetForm').show();
	}); */
	
	$('#NewMatchFormatSubmit').click(function(e) {
		e.preventDefault();
		$('#NewMatchForms').hide();
		$('#NewMatchLiveScore').show();
		return false;
	}); 
	
/* 	$('#NewMatchBasicSubmit').click(function(e) {
		e.preventDefault();
		$('#NewMatchBasicInfo').hide();
		$('#NewMatchStatistics').show();
		return false; 
	}); */
	
	$('#afterMatchStatSubmit').click(function(e) {
		e.preventDefault();
		$('#NewMatch').hide();
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
		$('.NewMatchContent').hide();
 		$('#NewMatchForms').show();
		$('.NewMatchFormContent').hide();
		$('#NewMatchBasicInfo').show(); 
		$('#NewMatchBasicInfoForm').show();
	});
	
	$('#AboutTennoteLink').click(function() {
		hideContent();
		$('#AboutTennote').show();
	});
		
});