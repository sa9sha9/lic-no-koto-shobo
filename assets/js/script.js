console.log( 'hi' );

window.TrelloPowerUp.initialize( {
	'card-buttons': function( t, opts ) {
			return [ {
				icon    : TrelloIcons.CONTROLLER,
				text    : 'この本を借りる',
				callback: function( t ) {
					return t.popup( {
						title : '貸出フォーム',
						url   : './components/borrow_book.html',
						height: 278 // initial height, can be changed later
					} );
				}
			} ];
	},
} )
