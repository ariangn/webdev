$(function() {

	// place a <p> when you click on the first link
	$('.nav').hide().delay(500).fadeIn(1000);
	$('.header').hide().delay(500).fadeIn(1000);


	$('.links').eq(0).click(function() {
		$('.mainContent').empty();
		let $about = '<p>    Tetris is a puzzle video game created in 1985 by Alexey Pajitnov, a Soviet software engineer.[1] It has been published by several companies for multiple platforms, most prominently during a dispute over the appropriation of the rights in the late 1980s. After a significant period of publication by Nintendo, the rights reverted to Pajitnov in 1996, who co-founded the Tetris Company with Henk Rogers to manage licensing. <br> <br> In Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field. The longer the player can delay this outcome, the higher their score will be. In multiplayer games, players must last longer than their opponents; in certain versions, players can inflict penalties on opponents by completing a significant number of lines. Some versions add variations on the rules, such as three-dimensional displays or a system for reserving pieces.<a href="https://en.wikipedia.org/wiki/Tetris"> source: Wikipedia </a><p>';	
		$('.mainContent').html($about);
		$('.mainContent').hide().delay(500).fadeIn(1000);
	})

	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
		let $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/NmCCQxVBfyM?si=tJMzM5g7eHXwoQRn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		$('.mainContent').html($video);
		$('.mainContent').hide().delay(500).fadeIn(1000);
		

	})

	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $photo = '<img src="tetris.gif" border=2>';
		$('.mainContent').html($photo);
		$('.mainContent').hide().delay(500).fadeIn(1000);
		
	})

});