const t = TrelloPowerUp.iframe();
const Promise = window.TrelloPowerUp.Promise;

const CurrentCardContext = {
	cardId: null,
	listId: null,
}

/**
 * Borrowボタンをクリックした時のイベント処理
 *
 */
window.btn_borrow.addEventListener( 'submit', function( event ) {
	event.preventDefault();
	const User = {
		belonging: window.user_belonging.value,
		name: window.user_name.value,
		comment: window.user_comment.value,
	}
	const comments = `
	### 借りた人
	- 所属: ${User.belonging}
	- 名前: ${User.name}
	- ひとこと: ${User.comment}
	`

	Trello.get(`/cards/${CurrentCardContext.cardId}/actions/comments`, {
		text: comments
	})
	.then( (res) => {
		console.log('successfully borrowed')
	})
	.catch( (errorMsg) => {
		console.error( errorMsg );
	})

	// putBorrowLog(CurrentCardContext, User)
} );



t.render( function() {
	const context = t.getContext();
	CurrentCardContext.listId = context.list;
	CurrentCardContext.cardId = context.card;

	Trello.get(`/cards/${context.card}`)
	.then( (res) => {
		// 本のタイトルを自動入力
		window.book_title.value = res.name
	})
	.then( () =>
		t.sizeTo('#borrow_form').done()
	)
	.catch( (errorMsg) => {
		console.error( errorMsg );
	})
// return t.sizeTo( '#search_product' ).done();
	// return t.sizeTo( '#search_product' ).done();
	// return t.get( 'card', 'shared', 'estimate' )
	// // データを取得できたら、表示に反映する
	// .then( function( estimate ) {
	// 	window.parts_category_selector.value = estimate;
	// } )
	// //
	// .then( function() {
	// 	t.sizeTo( '#parts_category' ).done();
	// } );
} );