console.log( 'hi' );

const TrelloIcons = {
	LICNOKOTOSHOBO: 'https://raw.githubusercontent.com/sa9sha9/lic-no-koto-shobo/master/assets/image/lic-no-koto-shobo-icon.png'
}

window.TrelloPowerUp.initialize( {
	'card-buttons': function( t, opts ) {
			return [ {
				icon    : TrelloIcons.LICNOKOTOSHOBO,
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
